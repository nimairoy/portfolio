import ScrollToTop from "react-scroll-to-top";
import { BsFileArrowUpFill } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer className=" text-center p-10 text-neutral-content">
            <p className="text-xl ">&copy; Copyright All Right Reserved By Nimai Chandra Roy</p>

            <ScrollToTop style={{boxShadow: 'none', background: 'none'}} className="text-4xl bg-none" smooth component={<BsFileArrowUpFill className="text-warning"></BsFileArrowUpFill>} />

        </footer>
    );
};

export default Footer;