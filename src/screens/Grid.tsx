

export default function ShowGrid(props: any) {
    return (
        <div className="base-flex show-grid">
            {console.log(props.data)}
            <div className="base-flex grid-wrapper">
                <h3>{props.title}</h3>
                <div className="grid-holder">
                    {props.data.map((item: any, index: any) => (
                        <a key={index} className="grid-card">
                            <img src={item.showUrl} alt="" />
                        </a>
                    ))}


                </div>

            </div>
        </div>
    )
}