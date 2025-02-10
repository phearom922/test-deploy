import React from "react";
import image01 from "/public/tantan-01.jpg";
import image02 from "/public/tantan-02.jpg";
import image03 from "/public/tantan-03.jpg";

const CardImage = () => {
  return (
    <div className="grid grid-cols-4 gap-5">
      <img
        className="h-full object-cover object-center rounded-3xl"
        src={image01}
        alt="image1"
      />
      <img
        className="h-full object-cover object-center rounded-3xl"
        src={image02}
        alt="image2"
      />
      <img
        className="h-full object-cover object-center rounded-3xl"
        src={image03}
        alt="image3"
      />
    </div>
  );
};

export default CardImage;
