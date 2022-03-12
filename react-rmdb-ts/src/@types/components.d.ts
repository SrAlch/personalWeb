import { MovieState } from "../../hooks/useMovieFetch";

export type RateProp = {
    callback: (number: number) => void;
};