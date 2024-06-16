// components/Hero.js
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-10 mb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl ">
              Find The Perfect Car
            </h1>
            <p className="my-4 text-xl text-white">
              Discover the perfect cars that suits your needs.
            </p>
            <Image
              src="/car.png" // Replace with your image path
              alt="Car Image"
              // layout="fill"
              // objectFit="contain"
              // quality={100}
              width={900}
              height={400}
              className="object-cover md:h-[400px] mt-[-53px] mx-auto rounded-xl   "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
