import MoviesOrTvCardWrapper from "../MoviesOrTvCardWrapper";

const Movies = () => {
  return (
    <main className="container-base pt-20">
      <MoviesOrTvCardWrapper type="movie" sectionTitle="Discover Movies" apiEndpoint="/discover/movie" cardSize="lg" keyPrefix="dicoverMovie" />
      <MoviesOrTvCardWrapper type="movie" sectionTitle="Now Playing Movies" apiEndpoint="/movie/now_playing" keyPrefix="nowPlayingMovie" />
      <MoviesOrTvCardWrapper type="movie" sectionTitle="Upcoming Movies" apiEndpoint="/movie/upcoming" keyPrefix="upcomingMovies" />
      <MoviesOrTvCardWrapper type="movie" sectionTitle="Popular Movies" apiEndpoint="/movie/popular" keyPrefix="popularMovies" />
      <MoviesOrTvCardWrapper type="movie" sectionTitle="Top Rated Movies" apiEndpoint="/movie/top_rated" keyPrefix="topRatedMovies" />
    </main>
  );
};

export default Movies;
