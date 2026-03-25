import { useState, useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
    const [dark, setDark] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

        const shouldUseDark = theme === "dark" || (!theme && prefersDarkMode);

        setDark(shouldUseDark);
        
        if (shouldUseDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", "light");
    }, [dark]);

    return (
        <button onClick={() => setDark(prev => !prev)} className="size-8 p-1.5 dark:text-yellow-400 cursor-pointer border border-gray-500 rounded-full">
            {dark ? <FiSun /> : <FiMoon className="text-black" />}
        </button>
    );
}