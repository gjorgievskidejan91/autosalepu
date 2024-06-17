import Link from "next/link";
import { fetchMedia } from "@/app/lib/data";
import Image from "next/image";
import { DeleteMedia } from "@/components/dashboard/buttons";

const page = async () => {
  const media = await fetchMedia();

  return (
    <div>
      <Link href={`/dashboard/media/add`}>Add Media</Link>

      <div className=" md:grid grid-cols-8 gap-2">
        {media.map((image) => (
          <div key={image}>
            <Image src={image.url} width={200} height={200} alt={image.url} />
            <DeleteMedia id={image._id.toString()} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
