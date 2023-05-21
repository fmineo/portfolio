import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaStackOverflow, FaEnvelope } from "react-icons/fa";

function Profile() {
    const goToBottom = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    }; 
    return (
        <>
            <div className="mt-3">
                <Image
                    src={"/images/profile.svg"}
                    alt="Profile"
                    width="120"
                    height="120"
                    className="rounded-full mx-auto aspect-square"
                />
            </div>
            <div className="text-center mt-3">
                <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
                    Francesco Mineo
                </h1>
                <h2 className="text-[0.8rem] sm:text-sm md:text-lg lg:text-xl inline-block">
                    Sviluppatore
                    <TypeAnimation
                        sequence={[
                            " Front End",
                            2000,
                            " Back End",
                            2000,
                            " Full Stack",
                            2000,
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                    />
                    | Palermo, Italia
                </h2>
            </div>
            <div className="text-center mt-5 lg:mt-6 flex justify-center">
                <Link
                    href={"https://www.linkedin.com/in/francesco-mineo/"}
                    target="_blank"
                    title="LinkedIn"
                    className="border border-black dark:border-white rounded-md px-2 py-1 mx-2 hover:bg-slate-50 dark:hover:bg-slate-700"
                >
                    <FaLinkedinIn className="inline" />
                </Link>
                <Link
                    href={"https://github.com/fmineo"}
                    target="_blank"
                    title="GitHub"
                    className="border border-black dark:border-white rounded-md px-2 py-1 mx-2 hover:bg-slate-50 dark:hover:bg-slate-700"
                >
                    <FaGithub className="inline" />
                </Link>
                <Link
                    href={"https://stackoverflow.com/users/2078421/fmineo"}
                    target="_blank"
                    title="Stackoverflow"
                    className="border border-black dark:border-white rounded-md px-2 py-1 mx-2 hover:bg-slate-50 dark:hover:bg-slate-700"
                >
                    <FaStackOverflow className="inline" />
                </Link>
                <span
                    onClick={goToBottom}
                    className="cursor-pointer border border-black dark:border-white rounded-md px-2 py-1 mx-2 hover:bg-slate-50 dark:hover:bg-slate-700"
                >
                    <FaEnvelope className="inline" />
                </span>
            </div>
        </>
    );
}

export default Profile;
