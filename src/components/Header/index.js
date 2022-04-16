import React, { useContext } from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import marioHeader from '../../assets/image3.png';
import { GameContext } from '../../contexts/GamesContext.js';
import colors from '../../styles/colors.js';
import { HeaderContainer } from './style.js';

export default function Header() {
    const { gameData } = useContext(GameContext);

    return (
        <HeaderContainer>
            <img className="image-background" src={marioHeader} alt="Personagens do Mário Bros" />
            <div className="content-header">
                <div className="above-items">
                    <h1 className="title">Júnior's GameHub <Link to="/cart"><BsFillCartFill fill={colors.black60} /></Link></h1>
                    <div className="search">
                        <input type="text" className="input-search" placeholder="Pesquise um game" />
                        <FaSearch className="icon-search" fill={colors.black40} />
                    </div>
                </div>
                <nav className="navigation">
                    {gameData.map((obj, index) => (
                        <React.Fragment key={index}>
                            <a href={obj.link} target="_blank" alt="O link levará para um resumo/anáise sobre o game" className="links" rel="noreferrer">
                                {obj.name}
                            </a>
                        </React.Fragment>
                    ))}
                </nav>
            </div>
        </HeaderContainer >
    )
}