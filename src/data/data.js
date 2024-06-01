import { FaLinkedinIn , FaXTwitter , FaYoutube } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoMdJet } from "react-icons/io";
import { IoLogoWebComponent } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";

const profiles = [
    {
        name : "Kakxshii",
        developer : "Normal Human",
        image : "/profile.png"
    }
]

const links = [
    {
        plateform : "Instagram",
        url : "https://www.instagram.com/kakxshii_",
        icon : <FaInstagram />
    },
    {
        plateform : "Telegram",
        url : "https://t.me/Kakashi7878",
        icon : <SiTelegram />
    },
    {
        plateform : "Youtube",
        url : "https://youtube.com/@kakashi._xd",
        icon : <FaYoutube />
    },
    {
        plateform : "Github",
        url : "https://github.com/Kakxshii",
        icon : <FaGithub />
    },
]

export { profiles, links };