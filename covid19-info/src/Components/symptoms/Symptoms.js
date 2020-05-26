import React from "react";
import SingleSymptom from "./SingleSymptom";
import RandomInfo from "./RandomInfo";

const Symptoms = () => {
  const symptomsData = [
    {
      title: "suchy kaszel",
      shortDesc: "więcej niż połowa zarażonych posiada takie objawy",
      longDescHeader: "suchy kaszel w przebiegu COVID-19",
      longDesc:
        "Wśród dominujących symptomów wskazujących na COVID-19 znajdują się gorączka i zmęczenie, a także samopoczucie podobne do tego pojawiającego się w przebiegu przeziębienia i grypy. U mniej więcej połowy osób zakażonych koronawirusem SARS-CoV-2 stwierdza się również kaszel. W przebiegu COVID-19 kaszel ma charakter suchy i uporczywy, co wynika z podrażnienia tkanki płucnej. Podczas kaszlu pojawiają się też bóle mięśniowe i spłycenie oddechu (duszność). Wraz z postępowaniem choroby w płucach gromadzi się płyn, dlatego z czasem trudności z oddychaniem mogą się nasilać.",
    },
    {
      title: "gorączka",
      shortDesc: "wysoka gorączka zwykle przekraczająca 38◦C",
      longDescHeader: "wysoka gorączka w przebiegu COVID-19",
      longDesc:
        "Wzrost temperatury ciała to jeden z podstawowych wskaźników informujących o infekcji. Pojawienie się wysokiej gorączki to objaw, który może wskazywać na zakażenie koronawirusem COVID-19, o ile występuje równocześnie z innymi symptomami takimi jak suchy kaszel i duszności. Powszechnie uważa się, że temperatura 36,6 st. C to umowna wartość prawidłowa dla zdrowego człowieka. Obecnie uważa się, że w granicach normy znajdują się wyniki od 36,4 do 37 st. C.",
    },
    {},
    {},
    {},
  ];
  return (
    <div>
      <SingleSymptom />
      <RandomInfo />
    </div>
  );
};

export default Symptoms;
