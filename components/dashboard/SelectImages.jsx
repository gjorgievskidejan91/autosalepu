import { useState } from "react";
import Image from "next/image";

const SelectImages = ({ selectedI, images, onSelect }) => {
  const [selectedImages, setSelectedImages] = useState(selectedI);

  const handleImageSelect = (imageId) => {
    const updatedSelectedImages = selectedImages.includes(imageId)
      ? selectedImages.filter((id) => id !== imageId)
      : [...selectedImages, imageId];

    setSelectedImages(updatedSelectedImages);
    onSelect(updatedSelectedImages);
  };

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
      {images.map((item, index) => (
        <div
          key={index}
          onClick={() => handleImageSelect(item)}
          className={`cursor-pointer relative ${
            selectedImages.includes(item) ? "border-4 border-blue-500" : ""
          }`}
        >
          <Image
            src={item}
            width={100}
            height={100}
            alt={item}
            className="w-full h-auto"
          />
          {selectedImages.includes(item) && (
            <span className="absolute top-2 left-2 bg-blue-500 text-white rounded-full px-2 font-bold">
              {selectedImages.indexOf(item) + 1}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default SelectImages;
