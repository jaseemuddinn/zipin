import React, { useState, useEffect } from "react";

function Hero() {
  const [typedText, setTypedText] = useState("");
  const wordsToType = ["Reality", "Actions", "Results", "Success", "Impact"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordsToType.length);
        setIsTyping(true);
        setTypedText("");
      }, 1000);
    }, 1000);
    return () => clearInterval(interval);
  }, [currentWordIndex, wordsToType]);

  useEffect(() => {
    if (isTyping) {
      const interval = setInterval(() => {
        if (typedText !== wordsToType[currentWordIndex]) {
          setTypedText((prevText) => prevText + wordsToType[currentWordIndex][prevText.length]);
        } else {
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    } else {
      const interval = setInterval(() => {
        if (typedText !== "") {
          setTypedText((prevText) => prevText.slice(0, -1));
        } else {
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    }
  }, [typedText, currentWordIndex, isTyping, wordsToType]);

  return (
    <div id="home" className="bg-neutral-900">
      <div className="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24">
        <h1 className="font-semibold text-white text-5xl md:text-[120px]">
          <span className="text-skin-base font-bold">ZIPIN:</span> Transforming
          Ideas Into <span className="text-skin-base">{typedText}</span>
          <span className="animate-blink">|</span>
        </h1>
        <div className="max-w-4xl flex">
          <p className="mt-5 text-neutral-400 text-lg">
            The one-stop shop for expert software consulting. We bring a passion for innovation and a wealth of experience to help businesses to achieve their software goals. From concept to completion, we provide tailored solutions that elevate the software and drive results.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
