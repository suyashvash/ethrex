import bannerPic from '../assets/banner.jpg'
import { AiFillStar } from 'react-icons/ai'
import PrimaryButton from './primaryButton'
import { projectFirestore } from '../../firebase/config'
import { useEffect, useState } from 'react';
import LoadingScreen from './loadingScreen';
import { useHistory } from 'react-router';

export default function Banner() {

    const mediaRef = projectFirestore.collection('mediaList');
    const history = useHistory()

    const [bannerMedia, setBannerMedia] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getBannerMedia()
    }, [])

    const getBannerMedia = () => {
        let pack: any = [];
        mediaRef.doc('Show.1633024242875').onSnapshot((doc: any) => {
            pack.push(doc.data())
            setBannerMedia(pack)
            setIsLoading(false)
        })
    }

    const cardTap = (cardData: any) => {
        const routeData = {
            genre: cardData.mediaGenre.replace(/ /g, "").split("|"),
            docId: `${cardData.mediaType}.${cardData.mediaId.split(".")[1]}`
        }
        history.push({ pathname: '/watch', search: `?${cardData.mediaName.replace(" ", '-')}/`, hash: `${cardData.mediaId.replace(" ", "-")}`, state: routeData });
    }

    return (
        !isLoading ?
            <div className="base-flex banner">
                <div className="banner-img-holder">
                    <img className="banner-img" src={bannerPic} alt="Banner image" />
                </div>

                <div className="base-flex banner-content-holder">
                    <div className="base-flex banner-content">
                        <h1 className="banner-show-name">{bannerMedia[0].mediaName}</h1>
                        <div className="base-flex banner-show-stats">
                            <span className="base-flex"><AiFillStar size={20} /><span>{bannerMedia[0].mediaStar}/5</span></span>
                            <span className="base-flex">2018</span>
                            <span className="base-flex">{bannerMedia[0].mediaSeaon} Seasons</span>
                        </div>
                        <p className="banner-show-bio">
                            {bannerMedia[0].mediaBio}
                        </p>

                        <PrimaryButton type={"Play"} title={"Watch Now"} onClick={() => cardTap(bannerMedia[0])} />


                    </div>


                </div>
            </div>
            :
            <LoadingScreen />
    )
}