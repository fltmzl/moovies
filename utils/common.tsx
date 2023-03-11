export const scrollElement = (direction: "left" | "right", element: React.RefObject<HTMLDivElement>, scrollValue = 330) => {
  if (direction === "left") return (element.current!.scrollLeft -= scrollValue);
  return (element.current!.scrollLeft += scrollValue);
};

export const getGenreString = (movie: MovieDetail): string => {
  const genreArray = movie?.genres?.map((genre) => genre.name);
  const genreString = genreArray?.join(", ");
  return genreString;
};

export const roundNumber = (number: number): number => {
  return Math.round(number * 10) / 10;
};

export const getReadableDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" });
};

export const formatToDollar = (price: number) => {
  const USDolar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return USDolar.format(price);
};
