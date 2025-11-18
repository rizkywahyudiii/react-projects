import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function Main() {
    const { theme, fontColor } = React.useContext(ThemeContext);

    return (
        <ThemeContext.Consumer>
            {
                ({ theme, fontColor }) => (
                    <>
                        <main style={fontColor}>
                            <div>
                                <h5>Main Components</h5>
                                <p>Isi main components</p>
                                <small>Tema Sekarang : {theme}</small>
                            </div>
                        </main>
                    </>
                )
            }
        </ThemeContext.Consumer>
    )
}

export default Main;