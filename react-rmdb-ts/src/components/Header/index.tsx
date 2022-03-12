import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Logos
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

// Context
import Context from "../../context/context";
import { UserContextType } from "../../@types/context";

const Header: React.FC = () => {
    const { state } = useContext(Context) as UserContextType;

    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <LogoImg src={RMDBLogo} alt='rmdb-logo' />
                </Link>
                {state && (state.username != "") ? (
                    <span>Logged in as: {state.username}</span>
                ) : (
                    <Link to='/login'>
                        <span>Log in</span>
                    </Link>
                )}
                <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
            </Content>
        </Wrapper>
    );
};

export default Header;