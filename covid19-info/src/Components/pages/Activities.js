import React from "react";
import Header from "../layout/Header";
import headerIcon from "../../assets/images/Activities/heart.svg";
const Activities = () => {
  const headerContent = {
    title: "zdrowie",
    description: "żyj zdrowo i dbaj o siebie budując odporność",
    icon: `${headerIcon}`,
  };
  return (
    <div>
      <Header headerContent={headerContent} />
    </div>
  );
};

export default Activities;
