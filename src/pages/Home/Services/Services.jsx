import { AiFillHtml5 } from 'react-icons/ai';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: '1500'
});
const Services = () => {
    
    return (
        <div id='service' className="bg-purple-600 pt-16 pb-24">
            <div className='my-container'>
                <h1 data-aos="fade-down" data-aos-anchor-placement="center-center"  className="mb-5 mt-4 text-center text-white text-3xl md:text-5xl font-bold">What I Do ?</h1>
                <p data-aos="fade-up" data-aos-anchor-placement="center-center" className='text-center text-white mb-12'>I have more than 1 years experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies i use. Want to find out more about my experience? Check out my online resume and project portfolio.</p>
                <div className='grid md:grid-cols-4 md:gap-4'>

                    <div data-aos="fade-right" className="card rounded-md w-full bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <AiFillHtml5 className='text-5xl text-yellow-400'></AiFillHtml5>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Figma to HTML</h2>
                            <p className='my-3'>I create eye catching, user-friendly and 100% responsive web applications.</p>
                            <div className="card-actions">
                                <button className="btn btn-warning">View Details</button>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-down" data-aos-duration="3000" className="card mt-5 md:mt-0 rounded-md w-full bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <FaReact className='text-5xl text-sky-400'></FaReact>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Web Applications With React</h2>
                            <p className='my-3'>Modern and Attractive Web Appications with the latest web technologies.</p>
                            <div className="card-actions">
                                <button className="btn btn-warning">View Details</button>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="4000" className="card mt-5 md:mt-0 rounded-md w-full bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <FaNodeJs className='text-5xl text-green-400'></FaNodeJs>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Node as a Beckend Technology</h2>
                            <p className='my-3'>Node Js is now a popular technology as a backend. It has added more powerful features to the web platform. </p>
                            <div className="card-actions">
                                <button className="btn btn-warning">View Details</button>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-left" data-aos-duration="6000" className="card mt-5 md:mt-0 rounded-md w-full bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <SiMongodb className='text-5xl text-green-600'></SiMongodb>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">MongoDB Database</h2>
                            <p className='my-3'>MongoDB is a no sql database. It is very easy to use and flexible for all web application. </p>
                            <div className="card-actions">
                                <button className="btn btn-warning">View Details</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Services;