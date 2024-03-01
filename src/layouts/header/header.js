// Components
import Nav from '../../components/nav/nav';
import Divider from '../divider/divider';

// Style
import './header.scss';

const Header = (props) => {
    const {title, page} = props;

    const classWrap = page === 'homePage' ? 'container header__wrapp header__wrapp_home' : 'container header__wrapp';
    
    const color = page === 'homePage' ? "white" : "black";

    const clazz = () => {
        switch (page) {
            case 'homePage':
                return 'header__home';
            case 'coffeePage':
                return 'header__coffee';
            case 'goodsPage':
                return 'header__goods';
            default: 
                return '';
        }
    } 
    return (
        <header className={`header ${clazz()}`}>
            <Nav color={'white'}/>
            <div className={classWrap}>
                <h1 className='title header__title'>{title}</h1>
                {page === 'homePage' && (
                    <div className='header__more'>
                        <Divider color={color}/>
                        <div className="header__question">
                            <h2 className='subtitle header__subtitle'>We makes every day full of energy and taste</h2>
                            <h2 className='subtitle header__subtitle'>Want to try our beans?</h2>
                        </div>
                        <a href="#somelink" className='header__button'>More</a>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header;