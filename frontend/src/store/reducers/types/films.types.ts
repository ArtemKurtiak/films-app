export type BasicFilmType = {
    id: number;
    adult: boolean;
    original_language: string;
    title: string;
    overview: string;
    popularity: number;
    backdrop_path: null | string;
    poster_path: null | string;
    vote_average: number;
    release_date: string;
}

export type ExtendedFilmType = {
    vote_count: number;
    status: string;
    revenue: number;
    runtime: number;
}

export type FilmsState = {
    films: BasicFilmType[],
    currentFilm: BasicFilmType & ExtendedFilmType | null;
}