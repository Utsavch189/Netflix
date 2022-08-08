const api_key = "8b1d3157425e8f85e44884bcb3fbf8f9";
export const url = "https://api.themoviedb.org/3"
export const imgURL = "https://image.tmdb.org/t/p/original/"

export const req = {
    Trending: `/trending/all/week?api_key=${api_key}&language=en-US`,
    NetflixOriginals: `/discover/tv?api_key=${api_key}&with_networks=213`,
    TopRated: `/movie/top_rated?api_key=${api_key}&language=en-US`,
    Action: `/discover/movie?api_key=${api_key}&with_genres=28`,
    Comedy: `/discover/movie?api_key=${api_key}&with_genres=35`,
    Horror: `/discover/movie?api_key=${api_key}&with_genres=27`,
    Romantic: `/discover/movie?api_key=${api_key}&with_genres=10749`,
    Documentory: `/discover/movie?api_key=${api_key}&with_genres=99`,
}