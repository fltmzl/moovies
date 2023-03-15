import MoviesOrTvCardWrapper from "../MoviesOrTvCardWrapper";

const Tv = () => {
  return (
    <main className="container-base pt-20">
      <MoviesOrTvCardWrapper type="tv" sectionTitle="Discover TV" apiEndpoint="/discover/tv" cardSize="lg" keyPrefix="dicoverTv" loadingState={"Loading Discover"} />
      <MoviesOrTvCardWrapper type="tv" sectionTitle="On Air TV" apiEndpoint="/tv/on_the_air" keyPrefix="nowPlayingMovie" loadingState={"Loading Now Playing Movies"} />
      {/* <MoviesOrTvCardWrapper type="tv" sectionTitle="Upcoming TV" apiEndpoint="/tv/upcoming" keyPrefix="upcomingMovies" loadingState={"Loading Upcoming Movies"} />
      <MoviesOrTvCardWrapper type="tv" sectionTitle="Popular TV" apiEndpoint="/tv/popular" keyPrefix="popularMovies" loadingState={"Loading Popular Movies"} />
      <MoviesOrTvCardWrapper type="tv" sectionTitle="Top Rated TV" apiEndpoint="/tv/top_rated" keyPrefix="topRatedMovies" loadingState={"Loading Top Rated Movies"} /> */}
    </main>
  );
};

export default Tv;
