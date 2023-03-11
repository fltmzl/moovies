import { getData } from "@/utils";

const Videos = async ({ params }: { params: { id: string } }) => {
  const videos: Videos = await getData(`/movie/${params.id}/videos`);

  return (
    <section className="px-10 mb-14">
      <h2 className="text-xl py-2 mb-5 inline-block border-b-2 border-slate-600 font-semibold">Videos</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-7">
        {videos?.results?.map((video) => (
          <iframe key={video.id} src={`https://www.youtube.com/embed/${video.key}`} className="w-full aspect-video rounded-2xl"></iframe>
        ))}
      </div>
    </section>
  );
};

export default Videos;
