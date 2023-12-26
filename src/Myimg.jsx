import React from "react";
import Imgt from "./Imgt";
import lmn from "./lmn.webp";
import nmb from "./nmb.jpg";
const Myimg = () => {
  return (
    <div>
      <h2>Click to Toggle Images</h2>
      <Imgt image1={nmb} image2={lmn} />
    </div>
  );
};

export default Myimg;
