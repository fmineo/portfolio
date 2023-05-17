import React from "react";
import { FaHeart } from "react-icons/fa";
import { MdCoffee } from "react-icons/md";

function Footer() {
    return (
        <footer className="bg-black dark:bg-slate-700 py-5 text-center text-sm text-gray-300">
            Made with <FaHeart className="text-[red] inline text-xs" /> and lots
            of <MdCoffee className="inline" />
        </footer>
    );
}

export default Footer;
