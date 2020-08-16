import React from "react";
import Header from "../layout/Header";
import SingleSymptom from "../symptoms/SingleSymptom";
import RandomInfo from "../randomInfo/RandomInfo";
import headerIcon from "../../assets/images/Welcome/doctor-gloves.svg";

import drycough from "../../assets/images/Home/drycough.svg";
import fever from "../../assets/images/Home/fever.svg";
import dizzy from "../../assets/images/Home/dizzy.svg";
const Home = () => {
  // }
  const headerContent = {
    title: "objawy",
    description: "objawy mogą ukazać się od 2-14 dni po zarażeniu",
    icon: `${headerIcon}`,
  };
  const symptomsData = [
    {
      id: 1,
      title: "suchy kaszel",
      shortDesc: "więcej niż połowa zarażonych posiada takie objawy",
      logo: `${drycough}`,
    },
    {
      id: 2,
      title: "gorączka",
      shortDesc: "wysoka gorączka zwykle przekraczająca 38◦C",
      logo: `${fever}`,
    },
    {
      id: 3,
      title: "zmęczenie",
      shortDesc: "ból mięśni, poczucie osłabienia organizmu",
      logo: `${dizzy}`,
    },
  ];
  return (
    <div className='home-container'>
      <Header headerContent={headerContent} />
      <SingleSymptom symptoms={symptomsData} />
      <RandomInfo />
    </div>
  );
};

export default Home;
