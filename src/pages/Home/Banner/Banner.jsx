import banner from '../../../assets/images/banner.jpg'

const Banner = () => {
    return (
        <div className="hero -mt-2 min-h-screen" style={{background: `url(${banner})center/cover no-repeat`,}}>
            <div style={{backgroundImage: 'radial-gradient(circle at center, transparent 20%, black 40%)'}} className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content w-full text-center text-neutral-content">
                <div className="max-w-xl">
                    <p className="mb-5">Hi, I am Nimai, a <span className='text-yellow-400'>Creative</span></p>
                    <h1 className="mb-5 text-5xl font-bold">Frontend Developer</h1>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;