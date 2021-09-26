import logo from '../screens/assets/logo.png'
import { AiFillHome, AiFillSetting } from 'react-icons/ai'
import { BiCameraMovie, BiLogOut } from 'react-icons/bi'
import { FiMonitor } from 'react-icons/fi'
import { MdMovie } from 'react-icons/md'
import { GiPopcorn } from 'react-icons/gi'

export default function HomeScreen() {
    return (
        <>
            <div className="base-flex side-bar">
                <div className="base-flex side-bar-div">
                    <img className="logo" src={logo} alt="" />
                </div>

                <div className="base-flex side-bar-div">
                    <a href="" className="base-flex nav-links"><AiFillHome size={22} /> <span>Home</span></a>
                    <a href="" className="base-flex nav-links"><BiCameraMovie size={22} /><span>Movies</span></a>
                    <a href="" className="base-flex nav-links"><FiMonitor size={22} /><span>TV Shows</span></a>
                    <a href="" className="base-flex nav-links"><MdMovie size={22} /><span>Series</span></a>

                    <a href="" className="base-flex nav-links"><GiPopcorn size={22} /><span>Fav</span></a>
                    <a href="" className="base-flex nav-links"><AiFillSetting size={22} /><span>Settings</span></a>
                </div>

                <div className="base-flex side-bar-div">
                    <a href="" className="base-flex nav-links log-out"><BiLogOut size={22} /><span>Log-Out</span></a>
                </div>
            </div>
            <div className="base-flex main-body">Hello</div>
        </>

    )
}