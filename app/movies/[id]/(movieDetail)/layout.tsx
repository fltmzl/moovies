import SubNavbar from "@/components/common/SubNavbar";
import { getMovie } from "@/utils";
import HeaderDetailPage from "../HeaderDetailPage";

const ImagesLayout = async ({ children, params }: { children: React.ReactNode; params: { id: string } }) => {
  const movie: Movie = await getMovie(params.id);

  return (
    <div className="py-16">
      <HeaderDetailPage movie={movie} />
      <SubNavbar movieId={movie.id} />
      {children}
    </div>
  );
};

export default ImagesLayout;
