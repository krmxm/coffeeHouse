import Nav from '../../components/nav/nav';
import Divider from '../divider/divider';

import './footer.scss';

const Footer = ({color}) => {
    return(
        <footer className="container">
            <Nav color={color}/>
            <Divider />
        </footer>
    )
}

export default Footer;