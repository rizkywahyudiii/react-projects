import React, {useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function Footer() {
    const {theme, fontColor} = useContext(ThemeContext);
    return (
        <>
            <footer style={fontColor}>
                <div>&copy; 2025 Kelas 23C</div>
                <small>Tema Sekarang : {theme}</small>
            </footer>   
        </>
    )
}

export default Footer;