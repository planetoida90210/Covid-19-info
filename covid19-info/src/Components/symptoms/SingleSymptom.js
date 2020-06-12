import React, { useState, useEffect, useRef } from "react";
import SingleCard from "./SingleCard";
import Arrow from "../layout/Arrow";
import drycough from "../../assets/images/Home/drycough.svg";
import fever from "../../assets/images/Home/fever.svg";
import dizzy from "../../assets/images/Home/dizzy.svg";

const SingleSymptom = () => {
  const symptomsData = [
    {
      id: 1,
      title: "suchy kaszel",
      shortDesc: "więcej niż połowa zarażonych posiada takie objawy",
      longDescHeader: "suchy kaszel w przebiegu COVID-19",
      longDesc:
        "Wśród dominujących symptomów wskazujących na COVID-19 znajdują się gorączka i zmęczenie, a także samopoczucie podobne do tego pojawiającego się w przebiegu przeziębienia i grypy. U mniej więcej połowy osób zakażonych koronawirusem SARS-CoV-2 stwierdza się również kaszel. W przebiegu COVID-19 kaszel ma charakter suchy i uporczywy, co wynika z podrażnienia tkanki płucnej. Podczas kaszlu pojawiają się też bóle mięśniowe i spłycenie oddechu (duszność). Wraz z postępowaniem choroby w płucach gromadzi się płyn, dlatego z czasem trudności z oddychaniem mogą się nasilać.",
      logo: `${drycough}`,
    },
    {
      id: 2,
      title: "gorączka",
      shortDesc: "wysoka gorączka zwykle przekraczająca 38◦C",
      longDescHeader: "wysoka gorączka w przebiegu COVID-19",
      longDesc:
        "Wzrost temperatury ciała to jeden z podstawowych wskaźników informujących o infekcji. Pojawienie się wysokiej gorączki to objaw, który może wskazywać na zakażenie koronawirusem COVID-19, o ile występuje równocześnie z innymi symptomami takimi jak suchy kaszel i duszności. Powszechnie uważa się, że temperatura 36,6 st. C to umowna wartość prawidłowa dla zdrowego człowieka. Obecnie uważa się, że w granicach normy znajdują się wyniki od 36,4 do 37 st. C.",
      logo: `${fever}`,
    },
    {
      id: 3,
      title: "zmęczenie",
      shortDesc: "ból mięśni, poczucie osłabienia organizmu",
      longDescHeader: "osłabienie w przebiegu COVID-19",
      longDesc:
        "W niektórych przypadkach infekcji COVID-19 mogą towarzyszyć: złe samopoczucie, dezorientacja i bardzo silne zmęczenie. Zalicza się je do najczęściej wymienianych nietypowych objawów zakażenia, które występują łącznie z kaszlem i gorączką. Zmęczenie jest bardzo rzadko zgłaszane przez chorych na COVID-19 jako jedyny występujący objaw. Z kolei eksperci amerykańskich Centrów Kontroli i Prewencji Chorób (CDC) podkreślają, że silna dezorientacja czy problemy z obudzeniem się, z utrzymaniem świadomości mogą być objawami ostrzegawczymi, świadczącymi o poważniejszym problemie zdrowotnym. Osoby, u których występują, zwłaszcza łącznie z innymi objawami, jak np. zasinienie ust, trudności z oddychaniem czy ból w klatce piersiowej, powinny natychmiast wezwać pomoc medyczną.",
      logo: `${dizzy}`,
    },
  ];
  const widthWindow = () => window.innerWidth;
  const firstCard = symptomsData[0];
  const secondCard = symptomsData[1];
  const lastCard = symptomsData[symptomsData.length - 1];
  const [state, setState] = useState({
    activeIndex: 0,
    translate: widthWindow(),
    transition: 0.45,
    cards: [lastCard, firstCard, secondCard],
  });

  const { activeIndex, translate, cards, transition } = state;
  const transitionRef = useRef();
  useEffect(() => {
    transitionRef.current = smoothTransition;
  });

  useEffect(() => {
    const smooth = () => {
      transitionRef.current();
    };
    const transitionEnd = window.addEventListener("transitionend", smooth);
    return () => {
      window.removeEventListener("transitionend", transitionEnd);
    };
  }, []);

  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.45 });
  }, [transition]);

  const smoothTransition = () => {
    let _cards = [];

    // We're at the last slide.
    if (activeIndex === symptomsData.length - 1)
      _cards = [symptomsData[symptomsData.length - 2], lastCard, firstCard];
    // We're back at the first slide. Just reset to how it was on initial render
    else if (activeIndex === 0) _cards = [lastCard, firstCard, secondCard];
    // Create an array of the previous last slide, and the next two slides that follow it.
    else _cards = symptomsData.slice(activeIndex - 1, activeIndex + 2);

    setState({
      ...state,
      cards,
      transition: 0,
      translate: widthWindow(),
    });
  };

  const nextSlide = () =>
    setState({
      ...state,
      translate: translate + widthWindow(),
      activeIndex:
        activeIndex === symptomsData.length - 1 ? 0 : activeIndex + 1,
    });

  const prevSlide = () =>
    setState({
      ...state,
      translate: 0,
      activeIndex:
        activeIndex === 0 ? symptomsData.length - 1 : activeIndex - 1,
    });

  return (
    <div className='single-symptom-container'>
      <Arrow direction='left' handleClick={prevSlide} />
      <div className='single-symptom-card-container'>
        {cards.map((symptom) => (
          <SingleCard
            transition={transition}
            translate={translate}
            symptom={symptom}
            width={widthWindow() * cards.length}
            key={symptom.title}
          />
        ))}
      </div>
      <Arrow direction='right' handleClick={nextSlide} />
    </div>
  );
};

export default SingleSymptom;
