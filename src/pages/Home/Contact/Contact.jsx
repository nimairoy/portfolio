import { AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";

const Contact = () => {
    return (
        <div id="contact" className='my-container my-4 md:pb-16  md:pt-12'>
            <h4 data-aos="fade-up" className='text-3xl md:text-5xl text-center font-semibold mb-12 mt-16'>Contact Me</h4>
            <div className=" md:grid md:grid-cols-2 gap-4 items-center">
                <div data-aos="fade-right">
                    <h4 className='text-3xl font-semibold mb-4'>Get In Touch</h4>
                    <p><strong>Mobile:</strong> +8801755279718</p>
                    <p><strong>Email:</strong> nimairoy718@gmail.com</p>
                    <h4 className='text-xl md:text-3xl mt-8 font-semibold mb-4'>Social Links</h4>
                    <div className="flex gap-2 mb-5 md:mb-0">
                        <a target="_blank" rel="noreferrer noopener" href="https://www.facebook.com/nimairoy08"><AiFillFacebook className="text-3xl text-blue-600"></AiFillFacebook></a>
                        <a target="_blank" rel="noreferrer noopener" href="https://twitter.com/NimaiRo57801085"><AiFillTwitterSquare className="text-3xl text-blue-500"></AiFillTwitterSquare></a>
                        <a target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/nimai-chandra-roy-b850971bb/"><AiFillLinkedin className="text-3xl text-blue-800"></AiFillLinkedin></a>
                    </div>
                </div>
                <div data-aos="fade-left" className="border rounded-md shadow-xl py-12 px-4 border-indigo-100">
                    <h4 className='text-xl md:text-3xl font-semibold mb-4'>Send Message</h4>
                    <form className='pb-6 text-center'>
                        <input name="name" required type="text" placeholder="Name" className="input mt-4 w-full border border-indigo-200" />
                        <input name="email" required type="email" placeholder="Email" className="input w-full border border-indigo-200 my-4" />
                        <textarea type="text" placeholder="Message" rows={'6'} className=" w-full border px-2 border-indigo-200 my-4" />
                        <button type='submit' className='btn btn-warning w-full rounded-none mt-4'>Submit</button>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Contact;