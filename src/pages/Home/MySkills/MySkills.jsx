import ProgressBar from 'react-animated-progress-bar';


const MySkills = () => {
    return (
        <div className='my-container'>
            <h1 data-aos="zoom-out-down" className="mb-5 mt-16 text-center text-5xl font-bold">My Skills</h1>
            <p data-aos="zoom-out-up" className='text-center mb-12'> My work is clean, user-friendly, fully responsive and Also world-class level. </p>
            <div className='grid md:grid-cols-2 gap-4 mb-16'>
                <div>
                    <h4 className='text-xl -mb-4 font-semibold'>HTML</h4>
                    <ProgressBar
                        width="400px"
                        height="12px"
                        rect
                        fontColor="gray"
                        percentage="90"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="#333333"
                        trackBorderColor="grey"
                    />
                </div>
                <div>
                    <h4 className='text-xl -mb-4 font-semibold'>CSS</h4>
                    <ProgressBar
                        width="400px"
                        height="12px"
                        rect
                        fontColor="gray"
                        percentage="80"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="#333333"
                        trackBorderColor="grey"
                    />
                </div>
                <div>
                    <h4 className='text-xl -mb-4 font-semibold'>JavaScript</h4>
                    <ProgressBar
                        width="400px"
                        height="12px"
                        rect
                        fontColor="gray"
                        percentage="75"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        rectBackgroundColor="#FACC15" 
                        bgColor="#333333"
                        trackBorderColor="grey"
                    />
                </div>
                <div>
                    <h4 className='text-xl -mb-4 font-semibold'>React</h4>
                    <ProgressBar
                        width="400px"
                        height="14px"
                        rect
                        fontColor="gray"
                        percentage="70"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="#333333"
                        trackBorderColor="grey"
                    />
                </div>
                <div>
                    <h4 className='text-xl -mb-4 font-semibold'>Express</h4>
                    <ProgressBar
                        width="400px"
                        height="14px"
                        rect
                        fontColor="gray"
                        percentage="50"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="#333333"
                        trackBorderColor="grey"
                    />
                </div>
                <div>
                    <h4 className='text-xl -mb-4 font-semibold'>Node</h4>
                    <ProgressBar
                        width="400px"
                        height="14px"
                        rect
                        fontColor="gray"
                        percentage="40"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="#333333"
                        trackBorderColor="grey"
                    />
                </div>
                <div>
                    <h4 className='text-xl -mb-4 font-semibold'>MongoDB</h4>
                    <ProgressBar
                        width="400px"
                        height="14px"
                        rect
                        fontColor="gray"
                        percentage="50"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="#333333"
                        trackBorderColor="grey"
                    />
                </div>
                <div>
                    <h4 className='text-xl -mb-4 font-semibold'>Tailwind CSS</h4>
                    <ProgressBar
                        width="400px"
                        height="14px"
                        rect
                        fontColor="gray"
                        percentage="70"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="#333333"
                        trackBorderColor="grey"
                    />
                </div>
            </div>
        </div>
    );
};

export default MySkills;