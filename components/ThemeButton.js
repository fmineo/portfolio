"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BsFillSunFill } from "react-icons/bs";
import { TbMoonFilled } from "react-icons/tb";

const ThemeButton = () => {
    const [mounted, setMounted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const toggleTheme = () => {
        if (currentTheme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    }; 
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <div className="py-5 text-right">
            <button
                onClick={toggleTheme}
                className="text-xl md:text-3xl rounded-lg"
            >
                {currentTheme === "dark" ? <BsFillSunFill /> : <TbMoonFilled />}
            </button>
        </div>
    );
};

export default ThemeButton;
