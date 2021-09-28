import logo from '../screens/assets/logo.png'
import Banner from './components/banner'
import { RiAccountCircleFill } from 'react-icons/ri'
import ShowGrid from './Grid';
import { projectFirestore } from '../firebase/config';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import popLogo from '../screens/assets/popLogo.png'


export default function HomeScreen() {

    const mediaRef = projectFirestore.collection('mediaList');
    const [mediaPack, setMediaPack] = useState<any>([]);
    const [trendingMedia, setTrendingMedia] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);


    useEffect(() => {
        getMedia();
    }, [])

    const getMedia = () => {
        let pack: any = [];
        mediaRef.get().then(querySnapshot => {
            querySnapshot.docs.forEach(doc => pack.push(doc.data()))
            const trendPack = pack.filter((item: any) => item.trending === true);
            setTrendingMedia(trendPack)
            setMediaPack(pack);
            setIsLoading(false)
        }).catch((error) => { alert("Error" + error) })
    }


    return (
        !isLoading ?
            <>

                <div className="base-flex main-body">
                    <nav className="base-flex nav-bar">
                        <div className="base-flex nav-bar-div logo-holder">
                            <img className="logo" src={logo} alt="" />
                        </div>
                        <div className="base-flex nav-bar-div nav-link-holder">
                            <a className="base-flex nav-links"> Home</a>
                            <a className="base-flex nav-links">Movies</a>
                            <a className="base-flex nav-links">Shows</a>
                        </div>
                        <div className="base-flex nav-bar-div logout-holder">
                            <Link to={{ pathname: "/profile" }} className="base-flex nav-links user-links"> <RiAccountCircleFill size={28} /></Link>
                        </div>
                    </nav>
                    <Banner />
                    {trendingMedia &&
                        <>
                            <ShowGrid title={"Trending Shows"} data={trendingMedia.filter((item: any) => item.mediaType == "Show")} />
                            <ShowGrid title={"Trending Movies"} data={trendingMedia.filter((item: any) => item.mediaType == "Movie")} />
                        </>
                    }

                </div>
            </>
            :
            <>
                <div className="base-flex loading-holder">
                    <img src={popLogo} alt="" />
                    <h1>Loading Content</h1>
                </div>

            </>


    )
}