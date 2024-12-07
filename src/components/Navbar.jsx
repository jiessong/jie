import logo from "../assets/Logo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 item-center cursor-pointer">
      <img className="mx-2 w-10" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href=""><FaHome /></a>
      <a href="https://www.linkedin.com/in/song-jie-78133352/"><FaLinkedin /></a>
      <a href="https://medium.com/@jies_2408"><FaMedium /></a>
      <a href="https://github.com/jiessong"><FaGithub /></a>
      <a href="https://www.instagram.com/jies.2408/"><FaInstagram /></a>
    </div>
  </nav>
}

export default Navbar