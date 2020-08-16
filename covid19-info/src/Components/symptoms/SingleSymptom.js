import React, { useState, useEffect, useRef } from "react";
// i do slider components in symptoms folder all components such as arrows bullets and slider content is here
import SingleCard from "./SingleCard";
import Arrow from "./Arrow";
import Dots from "./Dots";

const SingleSymptom = ({ symptoms }) => {
  //checking actual width of window
  const widthWindow = () => window.innerWidth;
  // get reference to symptom data, that we manage later to create carousel effect
  const firstCard = symptoms[0];
  const secondCard = symptoms[1];
  const lastCard = symptoms[symptoms.length - 1];

  // state hook
  const [state, setState] = useState({
    activeIndex: 0,
    translate: widthWindow(),
    transition: 0.45,
    cards: [lastCard, firstCard, secondCard],
  });
  const { activeIndex, translate, cards, transition } = state;
  // useref hook to set smooth transition beetween last and first slide
  const transitionRef = useRef();
  useEffect(() => {
    transitionRef.current = smoothTransition;
  });
  // add listener on tarnsition end and start
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
  }, [transition, state]);
  // eslint-disable-next-line
  // change array places to carousel effect in slider
  const smoothTransition = () => {
    let cards = [];
    // We're at the last slide.
    if (activeIndex === symptoms.length - 1)
      cards = [symptoms[symptoms.length - 2], lastCard, firstCard];
    // We're back at the first slide. Just reset to how it was on initial render
    else if (activeIndex === 0) cards = [lastCard, firstCard, secondCard];
    // Create an array of the previous last slide, and the next two slides that follow it.
    else cards = symptoms.slice(activeIndex - 1, activeIndex + 2);

    setState({
      ...state,
      cards,
      transition: 0,
      translate: widthWindow(),
    });
  };
  // handling next slide button
  const nextSlide = () =>
    setState({
      ...state,
      translate: translate + widthWindow(),
      activeIndex: activeIndex === symptoms.length - 1 ? 0 : activeIndex + 1,
    });
  // handling prev slide button
  const prevSlide = () =>
    setState({
      ...state,
      translate: 0,
      activeIndex: activeIndex === 0 ? symptoms.length - 1 : activeIndex - 1,
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
      <Dots activeIndex={activeIndex} cards={symptoms} />
    </div>
  );
};

export default SingleSymptom;
