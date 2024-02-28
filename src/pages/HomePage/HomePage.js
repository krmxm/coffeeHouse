// Components
import Header from '../../layouts/header/header';
import About from '../../layouts/about/about';

// Styles
import './HomePage.scss';


const HomePage = () => {
    const page = 'homePage';
    //for Header
    const titleHeader = "Everything You Love About Coffee";
    const clazz = "header header__home";
    const homePage = true;
    //for section About
    const titleAbout = "About Us"
    const descr = () => {
        return (
            <p className='descr'>
                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                Afraid at highly months do things on at. Situation recommend objection do intention
                so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                met spot shy want. Children me laughing we prospect answered followed. At it went
                is song that held help face. <br></br> <br></br>
                Now residence dashwoods she excellent you. Shade being under his bed her, Much
                read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                horrible but confined day end marriage. Eagerness furniture set preserved far
                recommend. Did even but nor are most gave hope. Secure active living depend son
                repair day ladies now.
            </p>
        )
    }
    return (
        <>
            <Header clazz={clazz} title={titleHeader} page={page} />
            <About title={titleAbout} descr={descr()} page={page} />
        </>
    );
}


export default HomePage;