import { useHistory } from "react-router"
import { AiFillStar, AiFillLike, AiFillHome } from 'react-icons/ai'
import { projectFirestore } from '../firebase/config';
import { useEffect, useState } from "react";
import LoadingScreen from "./components/loadingScreen";
import PrimaryButton from "./components/primaryButton";
import { FaCommentDots } from 'react-icons/fa';
import { LoggedIn } from "./features/localState";

export default function WatchScreen() {

    const history = useHistory()
    const mediaRef = projectFirestore.collection('mediaList');
    const routeData: any = history.location.state;

    const [currentMedia, setCurrentMedia] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);



    useEffect(() => {
        getCurrentMedia();
    }, [])

    const getCurrentMedia = () => {
        let pack: any = [];
        mediaRef.doc(routeData.docId).onSnapshot((doc: any) => {
            pack.push(doc.data())
            setCurrentMedia(pack)
            setIsLoading(false)
        })
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
                            <img src={currentMedia[0].mediaPic} alt="" />
                        </div>
                        <div className="about-holder">
                            <h2>{currentMedia[0].mediaName}</h2>
                            <div className="base-flex">
                                <span><AiFillStar /> {currentMedia[0].mediaStar}/5</span>
                                <span>{currentMedia[0].mediaGenre}</span>
                            </div>
                            <p>{currentMedia[0].mediaBio}</p>
                            <PrimaryButton title={`Likes : ${currentMedia[0].mediaLikes.length}`} size={'sm'} >
                                <AiFillLike />
                            </PrimaryButton>

                        </div>
                    </div>
                </div>

                <div className="base-flex media-about">
                    <h2>Comments</h2>
                    {
                        currentMedia[0].mediaComments.length !== 0 ?
                            currentMedia[0].mediaComments.map((item: any) => (
                                <div className="base-flex comment-box">
                                    <h3>{item.comment}</h3>
                                    <h4>{item.commentAuthor}</h4>
                                </div>
                            ))
                            :
                            <div className="notification-plate">
                                <h4 >No comments, be the first to start the discussion !</h4>
                            </div>
                    }
                    <textarea className="comment-text" spellCheck placeholder="Such a great movie.."></textarea>
                    <div className="base-flex comment-drawer">
                        <PrimaryButton title={"Add Comment"} size={'sm'} >
                            <FaCommentDots />
                        </PrimaryButton>
                        {LoggedIn() && <span className="login-alert-text">Login required !</span>}
                    </div>
                </div>

            </div>
            :
            <LoadingScreen />
    )
}