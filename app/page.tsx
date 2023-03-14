import TopRatedMovies from "./movies/TopRatedMovies";
import Trending from "./Trending";

// async function getData() {
//   const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=de0cd008a577937b76a08decd616583a`);

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

export default function Home() {
  // const data = await getData();

  return (
    <main className="container-base pt-20">
      <Trending sectionTitle="Trending" apiEndpoint="/trending" keyPrefix="trending" loadingState={<p>Loading Trending...</p>} />
      <TopRatedMovies sectionTitle="Top Rated Movie" apiEndpoint="/movie/top_rated" keyPrefix="top-rated-movies" loadingState={<p>Loading Top Rated Movies...</p>} />
    </main>
  );
}
