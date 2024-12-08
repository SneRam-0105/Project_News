
import Widget from '../components/Weather/widget';
import Articles from '../components/Article/It_articles';
import Footer from '../components/Footer/footer';

const Home_Page = () => {

    return (
        <>

            <div className="two">
                <div className="main"><Articles /></div>
                <div className="aside"><Widget /></div>
                <div className="footer"><Footer /></div>
            </div>


        </>
    );
};

export default Home_Page;


