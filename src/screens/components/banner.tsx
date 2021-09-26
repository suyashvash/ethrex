import bannerPic from '../assets/banner.jpg'
import { AiFillStar } from 'react-icons/ai'
import PrimaryButton from './primaryButton'

export default function Banner() {
    return (
        <div className="base-flex banner">
            <div className="banner-img-holder">
                <img className="banner-img" src={bannerPic} alt="" />
            </div>

            <div className="base-flex banner-content-holder">
                <div className="base-flex banner-content">
                    <h1 className="banner-show-name">Stranger Things</h1>
                    <div className="base-flex banner-show-stats">
                        <span className="base-flex"><AiFillStar size={20} /><span>4/5</span></span>
                        <span className="base-flex">2018</span>
                        <span className="base-flex">3 Seasons</span>
                    </div>
                    <p className="banner-show-bio">
                        In 1980s Indiana, a group of young friends witness supernatural forces
                        and secret government exploits. As they search for answers, the children
                        unravel a series of extraordinary mysteries.
                    </p>

                    <PrimaryButton title={"Watch Now"} onClick={() => alert("Now playing Stranger Things")} />


                </div>


            </div>
        </div>
    )
}