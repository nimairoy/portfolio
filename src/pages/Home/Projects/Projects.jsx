import project1 from '../../../assets/images/slide2.png';
import project2 from '../../../assets/images/slide4.png';
import project3 from '../../../assets/images/slide3.png';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div id='portfolio' className="bg-purple-600 py-24">
            <div className="my-container">
                <h1 data-aos="fade-up" className="mb-12 mt-4 text-center text-white text-3xl md:text-5xl font-bold">Recent Works</h1>

                <div className='grid md:grid-cols-3 md:gap-4'>

                    <div data-aos="flip-left" className="card rounded-md w-full bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={project1} alt="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Baby Doll and Toys E-Shop</h2>
                            <p className='my-3'>I create eye catching, user-friendly and 100% responsive web applications.</p>
                            <div className="card-actions">
                                <Link target='_blank' to={'https://github.com/nimairoy/baby-dolls-client-side'}> <button className="btn btn-warning">client</button></Link>
                                <Link target='_blank' to={'https://github.com/nimairoy/baby-dolls-server'}> <button className="btn btn-warning">server</button></Link>
                                <Link target='_blank' to={'https://baby-dolls-54819.web.app/'}> <button className="btn btn-warning">Live</button></Link>
                            </div>
                        </div>
                    </div>

                    <div data-aos="flip-down" className="card mt-5 md:mt-0 rounded-md w-full bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={project2} alt="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Yoga & Meditaion</h2>
                            <p className='my-3'>This is a website where is trained Yoga and meditation for the people.</p>
                            <div className="card-actions">
                                <Link target='_blank' to={'https://github.com/nimairoy/yoga-park'}> <button className="btn btn-warning">client</button></Link>
                                <Link target='_blank' to={'https://github.com/nimairoy/yoga-park-server-side'}> <button className="btn btn-warning">server</button></Link>
                                <Link target='_blank' to={'https://yoga-park-e9e4f.web.app/'}> <button className="btn btn-warning">Live</button></Link>
                            </div>
                        </div>
                    </div>

                    <div data-aos="flip-right" className="card mt-5 md:mt-0 rounded-md w-full bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={project3} alt="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Italian Food Restaurant</h2>
                            <p className='my-3'> It was an restaurant website where people can order a food and buy some food and to buy food user must be login first. </p>
                            <div className="card-actions">
                                <Link target='_blank' to={'https://github.com/nimairoy/italian-food-clients'}> <button className="btn btn-warning">client</button></Link>
                                <Link target='_blank' to={'https://github.com/nimairoy/italian-food-server'}> <button className="btn btn-warning">server</button></Link>
                                <Link target='_blank' to={'https://italian-food-ab35d.web.app/'}> <button className="btn btn-warning">Live</button></Link>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Projects;