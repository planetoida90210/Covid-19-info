import React, { Fragment, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
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

  const containerWidth = useRef();
  const firstCard = symptomsData[0];
  const secondCard = symptomsData[1];
  const lastCard = symptomsData[symptomsData.length - 1];
  const [state, setState] = useState({
    activeIndex: 0,
    slideWidth: null,
    translate: 0,
    transition: 0.4,
    marginLeft: 15,
    marginRight: 15,
    _cards: [lastCard, firstCard, secondCard],
  });
  const {
    slideWidth,
    activeIndex,
    translate,
    transition,
    _cards,
    marginLeft,
    marginRight,
  } = state;

  // getting reference to single card width by useRef
  useEffect(() => {
    let width = null;
    if (containerWidth.current) {
      width = containerWidth.current.offsetWidth;
    }
    setState({
      ...state,
      slideWidth: width,
    });
  }, [containerWidth]);
  //eslint-disable-next-line
  // previous card update
  const prevSlide = () => {
    setState({
      ...state,
      translate: 0,
      activeIndex:
        activeIndex === 0 ? symptomsData.length - 1 : activeIndex - 1,
    });
  };

  // next card update
  const nextSlide = () => {
    setState({
      ...state,
      translate: translate + slideWidth + marginLeft + marginRight,
      activeIndex:
        activeIndex === symptomsData.length - 1 ? 0 : activeIndex + 1,
    });
  };

  return (
    <div className='single-symptom-container'>
      {symptomsData.map((symptom) => (
        <Fragment key={symptom.title}>
          <Arrow direction='left' handleClick={prevSlide} />
          <Arrow direction='right' handleClick={nextSlide} />
          <div
            style={{
              transform: `translateX(-${translate}px)`,
              marginLeft: `${marginLeft}px`,
              marginRight: `${marginRight}px`,
            }}
            ref={containerWidth}
            className='single-symptom-chart'
          >
            <div className='single-symptom-hero-container'>
              <img
                src={symptom.logo}
                alt='symptom logo'
                className='single-symptom-hero'
              />
            </div>
            <h4 className='single-symptom-header'>{symptom.title}</h4>
            <p className='single-symptom-shortdesc'>{symptom.shortDesc}</p>
            <Link to={`/symptoms/${symptom.id}`}>
              <button className='more-symptoms-btn'>czytaj</button>
            </Link>
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default SingleSymptom;
