import MoviesOrTvCardWrapper from "../MoviesOrTvCardWrapper";

const Tv = () => {
  return (
    <main className="container-base pt-20">
      <MoviesOrTvCardWrapper type="tv" sectionTitle="Discover TV" apiEndpoint="/discover/tv" cardSize="lg" keyPrefix="dicoverTv" />
      <MoviesOrTvCardWrapper type="tv" sectionTitle="On Air" apiEndpoint="/tv/on_the_air" keyPrefix="onAirTv" />
      <MoviesOrTvCardWrapper type="tv" sectionTitle="Aring Today" apiEndpoint="/tv/airing_today" keyPrefix="aringTodayTv" />
      <MoviesOrTvCardWrapper type="tv" sectionTitle="Popular TV" apiEndpoint="/tv/popular" keyPrefix="popularTv" />
      <MoviesOrTvCardWrapper type="tv" sectionTitle="Top Rated TV" apiEndpoint="/tv/top_rated" keyPrefix="topRatedTv" />
    </main>
  );
};

export default Tv;
