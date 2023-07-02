import banner from '../../../assets/images/banner.jpg'
import img1 from '../../../assets/images/atom.png'
import img2 from '../../../assets/images/star.png'
import img3 from '../../../assets/images/right.png'
import './Banner.css'
import React from 'react';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Frontend developer', 'React Developer', 'MERN Stack Developer'];

const Banner = () => {

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            4000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <div className='relative'>
            <div className="hero -mt-2 min-h-screen" style={{ background: `url(${banner})center/cover no-repeat`, }}>
                <div style={{ backgroundImage: 'radial-gradient(circle at center, transparent 20%, #9333EA 50%)' }} className="hero-overlay bg-opacity-60"></div>
                <div className='absolute left-20 top-40'>
                    <img id='react' className='w-20' src={img1} alt="" />
                </div>
                <div className='absolute left-48 bottom-20'>
                    <img id='star' className='w-10' src={img2} alt="" />
                </div>
                <div className='absolute right-28'>
                    <img id='triangle' className='w-10' src={img3} alt="" />
                </div>
                <div className="hero-content w-full text-center text-neutral-content">
                    <div className="max-w-xl absolute bottom-20">
                        <p className="mb-5 text-xl">Hey, I am Nimai, a <span className='text-yellow-400'>Creative</span></p>
                        <h1 className="mb-5 text-5xl font-bold">
                            <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
                        </h1>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-between w-full left-1.5 bg-red-400'>
                <span id="star1" className='w-[20px] h-[20px] absolute -bottom-10 invisible bg-sky-200 rounded-full'></span>
                <span id="star3" className='w-[10px] h-[10px] absolute -bottom-10 invisible bg-sky-200 rounded-full'></span>
                <span id="star4" className='w-[25px] h-[25px] absolute -bottom-10 invisible bg-sky-200 rounded-full'></span>
                <span id="star5" className='w-[15px] h-[15px] absolute -bottom-10 invisible bg-sky-200 rounded-full'></span>
                <span id="star6" className='w-[20px] h-[20px] absolute -bottom-10 invisible bg-sky-200 rounded-full'></span>
                <span id="star7" className='w-[10px] h-[10px] absolute -bottom-10 invisible bg-sky-200 rounded-full'></span>
                <span id="star2" className='w-[25px] h-[25px] absolute -bottom-10 invisible bg-sky-200 rounded-full'></span>
                <span id="star4" className='w-[20px] h-[20px] absolute -bottom-10 invisible bg-sky-200 rounded-full'></span>
            </div>
        </div>
    );
};

export default Banner;