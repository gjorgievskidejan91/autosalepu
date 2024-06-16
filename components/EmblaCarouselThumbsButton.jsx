import React from "react";
import Image from "next/image";
export const Thumb = (props) => {
  const { selected, index, onClick, url } = props;

  return (
    <div
      className={"embla-thumbs__slide".concat(
        selected ? " embla-thumbs__slide--selected" : ""
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number"
      >
        {/* {index + 1} */}
        <Image
          src={url}
          alt={`Car image ${index + 1}`}
          width={200}
          height={200}
          className="rounded-t-xl   "
        />
      </button>
    </div>
  );
};
