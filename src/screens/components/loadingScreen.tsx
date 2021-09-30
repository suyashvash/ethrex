
import popLogo from '../assets/popLogo.png'
export default function LoadingScreen() {
    return (
        <div className="base-flex loading-holder">
            <img src={popLogo} alt="" />
            <h1>Loading Content</h1>
        </div>
    )
}