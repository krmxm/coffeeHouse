import Divider from '../divider/divider';
import './about.scss';

const About = ({title, img, descr, page}) => {

    const paddingAbout = (page) => {
        switch (page) {
            case 'homePage':
                return 'about__padding-home';
            case 'coffeePage':
                return 'about__padding-coffee';
            case 'goodsPage':
                return 'about__padding-coffee';
            default:
                return '';
        }
    }

    const widthDescr = (page) => {
        switch (page) {
            case 'homePage':
                return 'about__descr_home';
            case 'coffeePage':
                return 'about__descr_coffee';
            case 'goodsPage':
                return 'about__descr_goods';
            default:
                return '';
        }
    }

    const description = () => {
        return (
            <>
                <div className={`about__descr ${widthDescr(page)}`}>
                    <h2 className='subtitle about__subtitile'>{title}</h2>
                    <Divider />
                    <div className="about__descr">
                        {descr}
                    </div>
                </div>
            </>
        )
    }

    return(
        <section className={`about ${paddingAbout(page)}`}>
            <div className="container about__wrapp">
                {img && (
                    <img src={process.env.PUBLIC_URL + `/images/abouts/${img}.png`} alt={img.replace("-", " ")} />
                )}
                {description()} {/* Вызываем функцию description без фигурных скобок */}
            </div>
        </section>
    )
}

export default About;