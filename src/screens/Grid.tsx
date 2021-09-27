import { useRef } from 'react'
import { AiFillPlayCircle, AiFillStar } from 'react-icons/ai'
import { GrNext, GrPrevious } from 'react-icons/gr'
import PrimaryButton from './components/primaryButton'


export default function ShowGrid(props: any) {

    const scrollRef = useRef<any>(null);
    const gridCard = useRef<any>(null);

    const gridScroller = (direction: any) => {
        var scrollAmount = gridCard.current.offsetWidth;
        if (direction == "Next") { scrollRef.current.scrollLeft += scrollAmount }
        if (direction == "Prev") { scrollRef.current.scrollLeft -= scrollAmount }
    }



    return (
        <div className="base-flex show-grid">

            <div className="base-flex grid-wrapper">
                <div className="base-flex grid-head">
                    <h3>{props.title}</h3>
                    <div className="base-flex">
                        <PrimaryButton onClick={() => gridScroller("Prev")} ><GrPrevious size={15} /></PrimaryButton>
                        <PrimaryButton onClick={() => gridScroller("Next")}><GrNext size={15} /></PrimaryButton>
                    </div>
                </div>


                <div className="grid-holder" ref={scrollRef}>
                    {props.data.map((item: any, index: any) => (
                        <a ref={gridCard} key={index} className="grid-card">
                            <img src={item.showUrl} alt="" />
                            <div className="base-flex gird-data">
                                <div className="base-flex">
                                    <h3>{item.showName}</h3>
                                    <span>{item.showGenre}</span>
                                    <span className="base-flex"><AiFillStar />{item.showStars} | {item.showSeason}</span>
                                </div>
                                <div className="play-show">
                                    <AiFillPlayCircle size={40} />
                                </div>
                            </div>
                        </a>
                    ))}


                </div>

            </div>
        </div>
    )
}