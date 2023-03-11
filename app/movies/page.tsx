import MoviesCardWrapper from "../MoviesCardWrapper";

const Movies = () => {
  return (
    <main className="main-container">
      <MoviesCardWrapper sectionTitle="Discover Movie" apiEndpoint="/discover/movie" cardSize="lg" keyPrefix="dicoverMovie" loadingState={"Loading Discover"} />
      <MoviesCardWrapper sectionTitle="Now Playing Movies" apiEndpoint="/movie/now_playing" keyPrefix="nowPlayingMovie" loadingState={"Loading Now Playing Movies"} />
      <MoviesCardWrapper sectionTitle="Upcoming Movies" apiEndpoint="/movie/upcoming" keyPrefix="upcomingMovies" loadingState={"Loading Upcoming Movies"} />
      <MoviesCardWrapper sectionTitle="Popular Movies" apiEndpoint="/movie/popular" keyPrefix="popularMovies" loadingState={"Loading Popular Movies"} />
      <MoviesCardWrapper sectionTitle="Top Rated Movies" apiEndpoint="/movie/top_rated" keyPrefix="topRatedMovies" loadingState={"Loading Top Rated Movies"} />
    </main>
  );
};

export default Movies;
