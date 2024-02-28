// Components
import Header from '../../layouts/header/header';
import About from '../../layouts/about/about';

// Styles
// import './HomePage.scss';


const Coffeepage = () => {
    //for all components
    const page = 'coffeePage'
    //for section About
    const titleAbout = "Our Coffee"
    const img = "drink-coffee";
    const descr = () => {
        return (
            <p className='descr'>
                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                <br /><br />
                Afraid at highly months do things on at. Situation recommend objection do intention <br />
                so questions. <br /> 
                As greatly removed calling pleased improve an. Last ask him cold feel <br />
                met spot shy want. Children me laughing we prospect answered followed. At it went
                is song that held help face.
            </p>
        )
    }
    return (
        <>
            <Header clazz="header header__coffee" title={titleAbout} /> {/* props for style HomePage */}
            <About title={"About our beans"} descr={descr()} page={page} img={img}/>
        </>
    );
}

export default Coffeepage;