import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function Header() {
    const { theme, setTheme, fontColor } = useContext(ThemeContext);

    const themeToggle = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <>
            <header style= {fontColor}>
                <h1>Toko Kelas 23C</h1>
                <small>Tema Sekarang : {theme}</small>
            </header>
            <div>
                <button onClick={themeToggle}>Ganti Tema</button>
            </div>
        </>
    )
}

export default Header;