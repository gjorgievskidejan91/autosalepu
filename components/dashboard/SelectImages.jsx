"use client";

import { useState } from "react";
import Image from "next/image";
const SelectImages = ({ images, onSelect }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const handleImageSelect = (imageId) => {
    const updatedSelectedImages = selectedImages.includes(imageId)
      ? selectedImages.filter((id) => id !== imageId)
      : [...selectedImages, imageId];

    setSelectedImages(updatedSelectedImages);
    updatedSelectedImages.map((image) => console.log(image));
    console.log(updatedSelectedImages);
    onSelect(updatedSelectedImages);
  };

  return (
    <div className="grid grid-cols-5 gap-4">
      {images.map((item, index) => (
        <div
          key={index}
          onClick={() => handleImageSelect(item)}
          className={`cursor-pointer ${
            selectedImages.includes(item) ? "border-2 border-blue-500" : ""
          }`}
        >
          <Image
            src={item}
            width={100}
            height={100}
            alt={item}
            className="w-full h-auto"
          />
        </div>
      ))}
    </div>
  );
};

export default SelectImages;
