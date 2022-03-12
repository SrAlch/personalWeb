import React, { useContext } from "react";
import API from "../../API";

// Component
import Thumb from "../Thumb";
import Rate from "../Rate";

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

// Image
import NoImage from '../../images/no_image.jpg'

// Styles
import { Wrapper, Content, Text } from "./MovieInfo.styles";

// Types
import { MovieState } from "../../hooks/useMovieFetch";
import { UserContextType } from "../../@types/context";

// Context
import Context from "../../context/context"

type Props = {
    movie: MovieState;
};

const MovieInfo: React.FC<Props> = ({ movie }) => {
    const { state } = useContext(Context) as UserContextType;
    const handleRating = async (value: number) => {
        const rate = await API.rateMovie(state.sessionId, String(movie.id), value)
    }

    return (
        <Wrapper backdrop={movie.backdrop_path}>
            <Content>
                <Thumb
                    image={
                        movie.poster_path
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                            : NoImage
                    }
                    clickable={false}
                />
                <Text>
                    <h1>{movie.title}</h1>
                    <h3>PLOT</h3>
                    <p>{movie.overview}</p>
                    <div className="rating-directors">
                        <div>
                            <h3>RATING</h3>
                            <div className="score">{movie.vote_average}</div>
                        </div>
                        <div className="director">
                            <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
                            {movie.directors.map(director => (
                                <p key={director.credit_id}>{director.name}</p>
                            ))}
                        </div>
                    </div>
                    {state && (state.username != "") ? (
                        <div>
                            <p>Rate Movie</p>
                            <Rate callback={handleRating} />
                        </div>
                    ) : null}
                </Text>
            </Content>
        </Wrapper>
    );
};

export default MovieInfo;