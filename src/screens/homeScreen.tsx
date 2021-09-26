import logo from '../screens/assets/logo.png'
import Banner from './components/banner'
import { RiAccountCircleFill } from 'react-icons/ri'

export default function HomeScreen() {
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

            </div>
        </>

    )
}