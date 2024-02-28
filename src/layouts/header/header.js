// Components
import Nav from '../../components/nav/nav';
import Divider from '../divider/divider';

// Style
import './header.scss';

const Header = (props) => {
    const {clazz, title, page} = props;

    const classWrap = page === 'homePage' ? 'container header__wrapp header__wrapp_home' : 'container header__wrapp';
    
    const colorHomeDivider = page === 'homePage' ? "white" : "black";
    return (
        <header className={`header ${clazz}`}>
            <Nav />
            <div className={classWrap}>
                <h1 className='title header__title'>{title}</h1>
                {page && (
                    <div className='header__more'>
                        <Divider color={colorHomeDivider}/>
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