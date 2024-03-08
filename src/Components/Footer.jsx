import img from '../../public/pic/Background.jpg';
import img1 from '../../public/pic/Group 1000008504.jpg';
import { TiSocialLinkedin } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className="relative bg-cover   h-28 w-full" style={{ backgroundImage: `url(${img})` }}>
            <div className="absolute inset-0 bg-secondary_color opacity-40 "></div>
            <div className='flex items-center justify-between h-full section-container text-white'>
                <img src={img1} alt="" />
                <ul className='flex gap-8'>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Cookies</li>
                </ul>
                <div className='flex  gap-4'>
                    <TiSocialLinkedin className='border text-3xl rounded-full' />
                    <FaFacebookF className='border text-3xl rounded-full' />
                    <FaTwitter className='border text-3xl rounded-full ' />
                </div>
            </div>
        </div>

    );
};

export default Footer;