import MoviesOrTvCardWrapper from "../MoviesOrTvCardWrapper";

const Movies = () => {
  return (
    <main className="container-base pt-20">
      <MoviesOrTvCardWrapper type="movie" sectionTitle="Discover Movies" apiEndpoint="/discover/movie" cardSize="lg" keyPrefix="dicoverMovie" loadingState={"Loading Discover"} />
      <MoviesOrTvCardWrapper type="movie" sectionTitle="Now Playing Movies" apiEndpoint="/movie/now_playing" keyPrefix="nowPlayingMovie" loadingState={"Loading Now Playing Movies"} />
      <MoviesOrTvCardWrapper type="movie" sectionTitle="Upcoming Movies" apiEndpoint="/movie/upcoming" keyPrefix="upcomingMovies" loadingState={"Loading Upcoming Movies"} />
      <MoviesOrTvCardWrapper type="movie" sectionTitle="Popular Movies" apiEndpoint="/movie/popular" keyPrefix="popularMovies" loadingState={"Loading Popular Movies"} />
      <MoviesOrTvCardWrapper type="movie" sectionTitle="Top Rated Movies" apiEndpoint="/movie/top_rated" keyPrefix="topRatedMovies" loadingState={"Loading Top Rated Movies"} />
    </main>
  );
};

export default Movies;
