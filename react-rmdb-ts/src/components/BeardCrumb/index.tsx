import React from "react";
import { Link } from "react-router-dom";
 
// Styles
import { Wrapper, Content } from "./BeardCrumbs.styles";

// Types
type Props = {
    movieTitle: string;
};

const BeardCrumb: React.FC<Props> = ({ movieTitle }) => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <span>Home</span>
            </Link>
            <span>|</span>
            <span>{movieTitle}</span>
        </Content>
    </Wrapper>
);

export default BeardCrumb;