import SubNavbar from "@/components/common/SubNavbar";
import { getMovie } from "@/utils";
import HeaderDetailPage from "../HeaderDetailPage";

const ImagesLayout = async ({ children, params }: { children: React.ReactNode; params: { id: string } }) => {
  const movie: Movie = await getMovie(params.id);

  return (
    <div>
      <HeaderDetailPage movie={movie} />
      <SubNavbar movieId={movie.id} />
      <div className="container-base">{children}</div>
    </div>
  );
};

export default ImagesLayout;
