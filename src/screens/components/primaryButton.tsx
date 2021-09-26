import { BiPlayCircle } from 'react-icons/bi'

export default function PrimaryButton(props: any) {
    return (
        <a onClick={props.onClick} className="base-flex primary-btn"><BiPlayCircle size={25} /> <span>{props.title}</span></a>
    )

}