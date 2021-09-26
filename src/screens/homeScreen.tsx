import logo from '../screens/assets/logo.png'
import Banner from './components/banner'
import { RiAccountCircleFill } from 'react-icons/ri'
import ShowGrid from './Grid'

import show1 from '../screens/assets/13R.jpeg';
import show2 from '../screens/assets/aty.jpg';
import show3 from '../screens/assets/dAdvo.jpg';
import show4 from '../screens/assets/rEvil.jpg'
import show5 from '../screens/assets/rickMortyVideo.jpg'

export default function HomeScreen() {

    const TVshows = [
        { showUrl: show1 },
        { showUrl: show2 },
        { showUrl: show3 },
        { showUrl: show4 },
        { showUrl: show5 },

    ];



    return (
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
                        <a className="base-flex nav-links">Series</a>
                        <a className="base-flex nav-links">Fav</a>

                    </div>

                    <div className="base-flex nav-bar-div logout-holder">
                        <a href="" className="base-flex nav-links user-links"><RiAccountCircleFill size={28} /></a>
                    </div>

                </nav>
                <Banner />
                <ShowGrid title={"Recommended"} data={TVshows} />
                <ShowGrid title={"Trending Shows"} data={TVshows} />
                <ShowGrid title={"Trending Movies"} data={TVshows} />
                <ShowGrid title={"Trending Anime"} data={TVshows} />


            </div>
        </>

    )
}