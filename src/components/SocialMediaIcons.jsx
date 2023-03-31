import {BsLinkedin, BsTelegram} from "react-icons/bs";
import {FaGithub, FaInstagram} from "react-icons/fa";

const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com/in/oleksandr-protasov/"
                target="_blank"
                rel="noreferrer"
            >
                <BsLinkedin size={40}/>
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://github.com/JohnyFours"
                target="_blank"
                rel="noreferrer"
            >
                <FaGithub size={40}/>
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://t.me/OleksandrProtasov"
                target="_blank"
                rel="noreferrer"
            >
                <BsTelegram size={40}/>
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.instagram.com/aleks.protasov/"
                target="_blank"
                rel="noreferrer"
            >
                <FaInstagram size={40}/>
            </a>
        </div>
    );
};

export default SocialMediaIcons;
