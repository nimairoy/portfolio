
import About from "../About/About";
import Banner from "../Banner/Banner";
import MySkills from "../MySkills/MySkills";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import SlideShow from "../SlideShow/SlideShow";


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <SlideShow></SlideShow>
            <About></About>
            <Services></Services>
            <MySkills></MySkills>
            <Projects></Projects>
            
        </>
    );
};

export default Home;