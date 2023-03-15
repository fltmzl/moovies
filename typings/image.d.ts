interface ImageObject {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: string | null;
  vote_average: number;
  vote_count: number;
  width: number;
}

interface Images {
  id: number;
  backdrops: [ImageObject];
  logos: [ImageObject];
  posters: [ImageObject];
}
