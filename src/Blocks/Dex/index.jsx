import React from "react";
import "./style.css";
import DexImg from "../../assets/img/brand/dex3.svg";
import dexMobile from "../../assets/img/brand/dexMobile.svg";
import Icon from "../../components/Icon";
const DexSection = () => {
  return (
    <div className="dex" id="dex">
      <div className="dexsection2-container aic">
        <Icon imgsrc={DexImg} classnamestyle="dexsection2--img" />
        <Icon imgsrc={dexMobile} classnamestyle="dexsection2--img-mobile" />
      </div>
    </div>
  );
};

export default DexSection;
