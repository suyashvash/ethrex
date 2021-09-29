import { useHistory } from "react-router"
import { AiFillStar } from 'react-icons/ai'

export default function WatchScreen() {

    const history = useHistory()
    const mediaData: any = history.location.state;

    return (
        <div className="base-flex watch-screen">

            <div className="base-flex media-frameholder">
                <span>Now playing- {mediaData.mediaName}</span>
                <video width="100%" height="90%" controlsList="nodownload" controls src="https://firebasestorage.googleapis.com/v0/b/ethrex-watch.appspot.com/o/0b7077ce-f2bb-4cdc-84db-ee74c572bfe3.webm?alt=media&token=2ca75259-cd08-41bb-82d9-90a271aed8b3">
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="base-flex media-about">
                <h2>About </h2>
                <div className="base-flex">
                    <div className="poster-card">
                        <img src={mediaData.mediaPic} alt="" />
                    </div>
                    <div className="about-holder">
                        <h2>{mediaData.mediaName}</h2>
                        <div className="base-flex">
                            <span><AiFillStar /> {mediaData.mediaStar}/5</span>
                            <span>{mediaData.mediaGenre}</span>
                        </div>
                        <p>{mediaData.mediaBio}</p>
                    </div>
                </div>
            </div>

            <div className="base-flex media-about">
                <h2>Comments </h2>
                {mediaData.mediaComments.map((item: any, index: any) => (
                    <h3 key={index}>{item}</h3>
                ))}
            </div>

        </div>
    )
}