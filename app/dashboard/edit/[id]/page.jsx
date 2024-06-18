import EditCarForm from "@/components/dashboard/EditCarForm";
import { fetchCarById, fetchMedia } from "@/app/lib/data";

const page = async ({ params }) => {
  const { id } = params;
  const car = await fetchCarById(id);
  const media = await fetchMedia();
  const images = media.map((item) => item.url);

  return (
    <div>
      <div className="text-h2">Edit Car</div>
      <EditCarForm images={images} car={car} />
    </div>
  );
};

export default page;
