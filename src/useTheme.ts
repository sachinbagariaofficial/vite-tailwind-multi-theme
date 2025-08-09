import { useEffect, useState } from "react";

const useTheme = () => {
    const [themeMode, setThemeMode] = useState("");

    // Set our theme in localstorage
    const setTheme = (mode: string) => {
        setThemeMode(mode);
        localStorage.setItem("theme", mode);
        document.documentElement.setAttribute("data-theme", mode);
    };

    useEffect(() => {

        const savedTheme = localStorage.getItem("theme") || "";

        if (savedTheme.length) {
            setThemeMode(savedTheme);
            document.documentElement.setAttribute("data-theme", savedTheme);
        }
    }, []);

    return { themeMode, setThemeMode: setTheme };
};

export default useTheme;
