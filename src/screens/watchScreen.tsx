import { useHistory } from "react-router"
import { AiFillStar, AiFillLike, AiFillHome } from 'react-icons/ai'
import { projectFirestore } from '../firebase/config';
import { useEffect, useState } from "react";
import LoadingScreen from "./components/loadingScreen";
import PrimaryButton from "./components/primaryButton";
import { FaCommentDots } from 'react-icons/fa';
import { LoggedIn, UserEmail } from "./features/localState";

export default function WatchScreen() {

    const history = useHistory()
    const mediaRef = projectFirestore.collection('mediaList');
    const routeData: any = history.location.state;
    const userEmail = UserEmail();
    const loggedIn = LoggedIn();

    const [currentMedia, setCurrentMedia] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [reload, setReload] = useState<boolean>(true);
    const likeDisabled = loggedIn ? false : true
    const commentDisabled = loggedIn ? false : true;
    const [comment, setComment] = useState<string>('');


    useEffect(() => {
        getCurrentMedia();
    }, [reload])

    const getCurrentMedia = () => {
        let pack: any = [];
        mediaRef.doc(routeData.docId).onSnapshot((doc: any) => {
            pack.push(doc.data())
            setCurrentMedia(pack)
            setIsLoading(false)
        })
    }

    const addLike = () => {
        if (!likeDisabled || userEmail !== null) {
            const checkLike = currentMedia[0].mediaLikes.filter((item: any) => item.user === userEmail);
            console.log(checkLike.length)
            if (checkLike.length === 1) {
                alert("You already liked this movie")
            } else {
                mediaRef.doc(routeData.docId).set(
                    { mediaLikes: [...currentMedia[0].mediaLikes, { user: `${userEmail}` }] },
                    { merge: true })

                setReload(!reload)
            }

        } else { alert("Login before Like") }
    }

    const addComment = () => {
        if (!likeDisabled || userEmail !== null) {
            if (comment === "") {
                alert("Please insert Comment !")
            } else {
                mediaRef.doc(routeData.docId).set(
                    { mediaComments: [...currentMedia[0].mediaComments, { comment: `${comment}`, commentAuthor: `${userEmail}` }] },
                    { merge: true })
                setComment('')
                setReload(!reload)
            }
        } else { alert("Login before adding comments") }
    }





    return (
        !isLoading ?
            <div className="base-flex watch-screen">
                <div className="base-flex media-frameholder">
                    <div className="base-flex media-head">
                        <PrimaryButton onClick={() => { history.push({ pathname: '/' }) }} title={"Home"} >
                            <AiFillHome />
                        </PrimaryButton>
                        <span className="now-playing">Now playing- {currentMedia[0].mediaName}</span>
                    </div>

                    <video width="100%" height="90%" controlsList="nodownload" controls src="https://firebasestorage.googleapis.com/v0/b/ethrex-watch.appspot.com/o/0b7077ce-f2bb-4cdc-84db-ee74c572bfe3.webm?alt=media&token=2ca75259-cd08-41bb-82d9-90a271aed8b3">
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="base-flex media-about">
                    <h2>About </h2>
                    <div className="base-flex">
                        <div className="poster-card">
                            <img src={currentMedia[0].mediaPic} alt="Current Movie/Show Poster" />
                        </div>
                        <div className="about-holder">
                            <h2>{currentMedia[0].mediaName}</h2>
                            <div className="base-flex">
                                <span><AiFillStar /> {currentMedia[0].mediaStar}/5</span>
                                <span>{currentMedia[0].mediaGenre}</span>
                                <PrimaryButton disabled={likeDisabled} onClick={addLike} title={`Likes : ${currentMedia[0].mediaLikes.length}`} size={'sm'} >
                                    <AiFillLike />
                                </PrimaryButton>

                            </div>
                            <p>{currentMedia[0].mediaBio}</p>


                        </div>
                    </div>
                </div>

                <div className="base-flex media-about media-comment">
                    <h2>Comments</h2>

                    <textarea className="comment-text" value={comment} onInputCapture={(e: any) => setComment(e.target.value)} spellCheck placeholder="Such a great movie.."></textarea>
                    <div className="base-flex comment-drawer">
                        <PrimaryButton disabled={commentDisabled} onClick={addComment} title={"Add Comment"}  >
                            <FaCommentDots />
                        </PrimaryButton>
                    </div>

                    {
                        currentMedia[0].mediaComments.length !== 0 ?
                            currentMedia[0].mediaComments.map((item: any) => (
                                <div className="base-flex comment-box">
                                    <img src={`https://avatars.dicebear.com/api/identicon/:${item.commentAuthor.split("@")[0]}.svg`} alt="Comment Author Profile Pic" />
                                    <div className="base-flex comment-holder">
                                        <h4 className="comment">{item.comment}</h4>
                                        <h4 className="comment-author">{item.commentAuthor}</h4>
                                    </div>

                                </div>
                            ))
                            :
                            <div className="notification-plate">
                                <h4 >No comments, be the first to start the discussion !</h4>
                            </div>
                    }
                </div>

            </div >
            :
            <LoadingScreen />
    )
}