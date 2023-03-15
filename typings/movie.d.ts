// import Media from "./media";

interface Movie extends Media {
  adult: boolean;
  release_date: string;
  title: string;
  original_title: string;
  video: boolean;
}

interface Movies {
  page: number;
  results: [Movie];
  total_pages: number;
  total_results: number;
}

interface MovieDetail extends Movie {
  belongs_to_collection?: object;
  budget: number;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  homepage: string | null;
  imdb_id: string | null;
  production_companies: [
    {
      id: number;
      logo_path: string | null;
      name: string;
      origin_country: string;
    }
  ];
  production_countries: [
    {
      iso_3166_1: string;
      name: string;
    }
  ];
  revenue: number;
  runtime: number | null;
  spoken_languages: [
    {
      iso_639_1: string;
      name: string;
    }
  ];
  status: "Rumored" | "Planned" | "In Production" | "Post Production" | "Released" | "Canceled";
  tagline: string | null;
}
