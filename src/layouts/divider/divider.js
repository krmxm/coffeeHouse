import {WhiteBeans, BlackBeans} from "../../assets";

import './divider.scss';

const Divider = ({color}) => {
    const beans = color === "white" ? WhiteBeans : BlackBeans;
    const divider = color === "white" ? "divider-white" : "divider"
    const clazz = color === "white" ? "divider__img divider__img_white" : "divider__img divider__img_black"
    
    return (
        <div className={divider}>
            <img src={beans} alt="coffee beans" className={clazz} />
        </div>
    )
}

export default Divider;