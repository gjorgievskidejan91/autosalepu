import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import Image from "next/image";
const Gallery = ({ car }) => {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          {car.imageUrl.map((car, index) => (
            <CarouselItem key={index} className=" h-3/4">
              <Image
                src={car}
                alt=""
                height={0}
                width={0}
                sizes="100vw"
                className="w-full  rounded-t-xl"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Gallery;
