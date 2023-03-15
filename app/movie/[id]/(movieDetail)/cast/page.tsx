import { getData } from "@/utils";
import CreditCardContainer from "./CreditCardContainer";

const Cast = async ({ params }: { params: { id: string } }) => {
  const credits: Credits = await getData(`/movie/${params.id}/credits`);

  return (
    <>
      <section>
        <h2 className="text-xl py-2 mb-5 inline-block border-b-2 border-slate-600 font-semibold">Cast</h2>
        <CreditCardContainer credits={credits} creditsType="cast" />
      </section>

      <section>
        <h2 className="text-xl py-2 mb-5 inline-block border-b-2 border-slate-600 font-semibold">Crew</h2>
        <CreditCardContainer credits={credits} creditsType="crew" />
      </section>
    </>
  );
};

export default Cast;
