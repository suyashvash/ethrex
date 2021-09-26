import logo from '../screens/assets/logo.png'


export default function HomeScreen() {
    return (
        <>
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
                    <a className="base-flex nav-links user-links">Settings</a>
                    <a href="" className="base-flex nav-links user-links"><span>Log-Out</span></a>
                </div>

            </nav>
            <div className="base-flex main-body">

            </div>
        </>

    )
}