import React, { useEffect, useState } from "react";
import RockResult from "./RockResult";
import PaperResult from "./PaperResult";
import ScissorResult from "./ScissorResult";
import LizardResult from "./LizardResult";
import SpockResult from "./SpockResult";
import Modal from "./Modal";

const Game = ({ choice, setChoice, setScore, options, score, isAdvanced }) => {
  const [computer, setComputer] = useState({});
  const [result, setResult] = useState("");
  const length = isAdvanced ? 5 : 3;
  /*  Math.floor(Math.random() * length) */
  const computerChoice = () => {
    let choiceRandom = options[Math.floor(Math.random() * length)];
    setComputer(choiceRandom);
    handlescore(choice, choiceRandom);
  };
  /*   const handlescore = (yours, computers) => {
    if (
      (yours === "Rock" && computers === "Paper") ||
      (yours === "Paper" && computers === "Scissor") ||
      (yours === "Scissor" && computers === "Rock")
    ) {
      setScore((prev) => prev - 1);
      setResult("Lose");
    } else if (
      (yours === "Rock" && computers === "Scissor") ||
      (yours === "Scissor" && computers === "Paper") ||
      (yours === "Paper" && computers === "Rock")
    ) {
      setScore((prev) => prev + 1);
      setResult("Win");
    } else setResult("Draw");
  }; */

  const handlescore = (yours, computers) => {
    if (yours === computers?.option) {
      setScore(score);
      setResult("Draw");
    } else if (computers?.defeat?.includes(yours)) {
      setScore(score - 1);
      setResult("Lose");
    } else {
      setScore(score + 1);
      setResult("Win");
    }
  };

  const showChoice = (c) => {
    switch (c) {
      case "Rock": {
        return <RockResult />;
      }
      case "Paper": {
        return <PaperResult />;
      }
      case "Scissor": {
        return <ScissorResult />;
      }
      case "Lizard": {
        return <LizardResult />;
      }
      case "Spock": {
        return <SpockResult />;
      }
      default: {
        return null;
      }
    }
  };

  useEffect(() => {
    computerChoice();
  }, []);

  return (
  
    <main className={`grid grid-cols-2 h-[450px] lg:gap-x-64 md:gap-x-32 sm:gap-x-5 mt-2 md:w-2/3 sm:w-full `}>
      <p className="text-white text-2xl font-bold mb-28 text-center">
        You Picked
      </p>
      <p className="text-white text-2xl font-bold mb-28 text-center">
        House Picked
      </p>

      <div className="col-span-full flex flex-nowrap justify-between w-full">
        <div className="place-holder rounded-full h-fit w-fit bg-darkBlue grid place-content-center">
          {showChoice(choice)}
        </div>
        <div className="flex flex-col w-fit h-fit">
          {result && (
            <>
              <p className="text-white text-2xl font-bold mb-32 text-center">
                You {result}
              </p>
              <button
                onClick={() => setChoice("")}
                className="bg-white font-semibold text-lg rounded-lg px-10 py-2 "
              >
                Play Again
              </button>
            </>
          )}
        </div>
        <div className="place-holder aspect-square rounded-full h-fit w-fit bg-darkBlue grid place-content-center">
          {showChoice(computer?.option)}
        </div>
      </div>
    </main>
  );
};

export default Game;
