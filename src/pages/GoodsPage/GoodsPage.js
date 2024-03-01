// Components
import Header from '../../layouts/header/header';
import About from '../../layouts/about/about';
import CoffeeList from '../../components/coffeeList/coffeeList';
import Footer from '../../layouts/footer/footer';


// Styles
// import './GoodsPage.scss';


const GoodsPage = ({data}) => {
    //for all components
    const page = 'goodsPage'
    //for section About
    const titleAbout = "For your pleasure"
    const img = "coffee-cup";
    
    const descr = () => {
        return (
            <p className='descr'>
                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.

                Afraid at highly months do things on at. Situation recommend objection do intention
                so questions. 
                As greatly removed calling pleased improve an. Last ask him cold feel
                met spot shy want. Children me laughing we prospect answered followed. At it went
                is song that held help face.
            </p>
        )
    }
    return (
        <>
            <Header title={titleAbout} page={page}/> {/* props for style HomePage */}
            <About title={"About our beans"} descr={descr()} page={page} img={img}/>
            <section className="products container">
                <CoffeeList data={data}/>
            </section>
            <Footer color="black"/>
        </>
    );
}

export default GoodsPage;