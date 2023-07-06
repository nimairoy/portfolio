import banner from '../../../assets/images/banner.jpg'
import img1 from '../../../assets/images/atom.png'
import img2 from '../../../assets/images/star.png'
import img3 from '../../../assets/images/right.png'
import resume from '../../../assets/resume/resume.pdf'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
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
            <div className="hero -mt-2 min-h-[350px] md:min-h-screen" style={{ background: `url(${banner})center/cover no-repeat`, }}>
                <div style={{ backgroundImage: 'radial-gradient(circle at center, transparent 20%, #9333EA 50%)' }} className="hero-overlay bg-opacity-60"></div>
                <div className='absolute left-8 top-10 md:left-20 md:top-40'>
                    <img id='react' className='w-10 md:w-20' src={img1} alt="" />
                </div>
                <div className='absolute left-64 md:left-48 bottom-40 md:bottom-20'>
                    <img id='star' className='w-[10px] md:w-10' src={img2} alt="" />
                </div>
                <div className='absolute right-28'>
                    <img id='triangle' className='w-[10px] md:w-10' src={img3} alt="" />
                </div>
                <div className='absolute top-1/4 right-5 md:right-20'>
                    <a href="https://github.com/nimairoy" target="_blank" rel="noopener noreferrer"><AiFillGithub className='text-3xl md:text-5xl bg-purple-200 p-1 rounded-sm'></AiFillGithub></a>
                    <a className='mt-4 bg-purple-400' target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/nimai-chandra-roy-b850971bb/"><AiFillLinkedin className='bg-purple-200 p-1 rounded-sm mt-3 text-3xl md:text-5xl text-blue-500'></AiFillLinkedin></a>
                </div>
                <div className="hero-content w-full text-center text-neutral-content">
                    <div className="max-w-xl absolute bottom-1 md:bottom-20">
                        <p className="mb-5 text-xl">Hey, I am Nimai, a <span className='text-warning'>Creative</span></p>
                        <h1 className="mt-36 md:mt-0 mb-5 text-3xl md:text-5xl font-bold">
                            <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
                        </h1>
                        <a href={resume} download='Resume'> <button className="btn  sm:btn-sm md:btn-md lg:btn-lg mb-6 btn-warning">Download Resume</button></a>
                    </div>
                </div>
            </div>
            <div className='flex justify-between w-full left-1.5 bg-red-400'>
                <span id="star1" className='md:w-[20px] w-[8px] h-[8px] md:h-[20px] absolute -bottom-10 invisible bg-sky-200 rounded-full'></span>
                <span id="star3" className='md:w-[10px] w-[12px] h-[12px] md:h-[10px] absolute -bottom-10 invisible bg-sky-200 rounded-full'></span>
                <span id="star4" className='md:w-[25px] w-[15px] h-[15px] md:h-[25px] absolute -bottom-10 invisible bg-sky-200 rounded-full'></span>
                <span id="star5" className='md:w-[15px] w-[10px] h-[10px] md:h-[15px] absolute -bottom-10 invisible bg-sky-200 rounded-full'></span>
                <span id="star6" className='md:w-[20px] w-[8px] h-[8px] md:h-[20px] absolute -bottom-10 invisible bg-sky-200 rounded-full'></span>
                <span id="star7" className='md:w-[10px] w-[12px] h-[12px] md:h-[10px] absolute -bottom-10 invisible bg-sky-200 rounded-full'></span>
                <span id="star2" className='md:w-[25px] w-[8px] h-[8px] md:h-[25px] absolute -bottom-10 invisible bg-sky-200 rounded-full'></span>
                <span id="star4" className='md:w-[20px] w-[14px] h-[14px] md:h-[20px] absolute -bottom-10 invisible bg-sky-200 rounded-full'></span>
            </div>
        </div>
    );
};

export default Banner;