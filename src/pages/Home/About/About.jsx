import { Link } from 'react-router-dom';
import image1 from '../../../assets/images/about.png'
import { AiOutlineDownload } from 'react-icons/ai'

const About = () => {
    return (
        <div id='about' className='my-container md:grid md:grid-cols-2 gap-6 items-center'>
            <div>
                <img className='w-full' src={image1} alt="" />
            </div>
            <div>
                <h1 className="text-5xl font-bold">About Me</h1>
                <p className="py-6">Hi, I'am Nimai Chandra Roy, a Junior MERN Stack Developer. As a MERN Developer with a solid foundation in frontend development, I have extensive experience in JavaScript, React JS, Firebase Authentication, Express JS, Node JS, Rest API and MongoDB Database . I also experienced to make completely responsive and  interactive web  applications using tailwind or Bootstrap CSS frameworks and DaisyUI components library.</p>
                <Link target="_blank" to={'https://drive.google.com/file/d/1TdOHskpWA7kO3md-LKCJDFd-2k-pc0v-/view?usp=sharing'} className="btn btn-primary">Download Resume <AiOutlineDownload className='text-white text-2xl'></AiOutlineDownload></Link>
            </div>
        </div>
    );
};

export default About;