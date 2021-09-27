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
        {
            showUrl: show1,
            showName: "13 Reasons Why",
            showStars: "4/5",
            showGenre: "Drama | Suicide | Mystery",
            showSeason: "7 Seasons"
        },
        {
            showUrl: show2,
            showName: "Apytical",
            showStars: "3/5",
            showGenre: "Story | Family | Mystery",
            showSeason: "4 Seasons"
        },
        {
            showUrl: show3,
            showName: "Devil advocate",
            showStars: "5/5",
            showGenre: "Devil | Action | Geek",
            showSeason: "1 Seasons"
        },

        {
            showUrl: show4,
            showName: "Resident Evil 2",
            showStars: "4/5",
            showGenre: "Action | Adult | Sci-fi",
            showSeason: "2 Seasons"
        },
        {
            showUrl: show5,
            showName: "Rick and Morty",
            showStars: "5/5",
            showGenre: "Drama | Dark | Mystery",
            showSeason: "5 Seasons"
        },
        {
            showUrl: show2,
            showName: "Apytical",
            showStars: "3/5",
            showGenre: "Story | Family | Mystery",
            showSeason: "4 Seasons"
        },
        {
            showUrl: show3,
            showName: "Devil advocate",
            showStars: "5/5",
            showGenre: "Devil | Action | Geek",
            showSeason: "1 Seasons"
        },

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