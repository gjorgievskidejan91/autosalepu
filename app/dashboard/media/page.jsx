import Link from "next/link";
import { fetchMedia } from "@/app/lib/data";
import Image from "next/image";
const page = async () => {
  const media = await fetchMedia();

  return (
    <div>
      <Link href={`/dashboard/media/add`}>Add Media</Link>

      {media.map((image) => (
        <div key={image.url}>
          <img src={image.url} width={100} height={100} />
        </div>
      ))}

      <img
        src={
          "https://scontent.fskp3-1.fna.fbcdn.net/v/t39.30808-6/447886532_312926545193108_4503650780505642056_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CnkaYaKZVjcQ7kNvgGWPWtV&_nc_ht=scontent.fskp3-1.fna&oh=00_AYBdKjKpVevhdwcnw3aPr5rpUqX_ttOdAk4AHS4Q7zQRRQ&oe=66679B85"
        }
        width={100}
        height={100}
      />
    </div>
  );
};

export default page;
