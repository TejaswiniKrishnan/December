import React, { useState } from "react";

const Imgt = ({ image1, image2 }) => {
  const [isVisible, setVisible] = useState(true);

  const toggleImage = () => {
    setVisible((prevValue) => !prevValue);
  };

  return (
    <div onClick={toggleImage}>
      {isVisible ? (
        <img src={image1} alt="Image1" />
      ) : (
        <img src={image2} alt="Image2" />
      )}
    </div>
  );
};

export default Imgt;
