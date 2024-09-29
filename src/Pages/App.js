import { useState } from "react";
import { ReactComponent as Rock } from "../icons/icon-rock.svg";
import { ReactComponent as Paper } from "../icons/icon-paper.svg";
import { ReactComponent as Scissor } from "../icons/icon-scissors.svg";
import { ReactComponent as Lizard } from "../icons/icon-lizard.svg";
import { ReactComponent as Spock } from "../icons/icon-spock.svg";
import Header from "../components/Header";
import OptionsPanel from "../components/OptionsPanel";
import Game from "../components/Game";
import "../styles/input.css";
import Modal from "../components/Modal";

function App() {
  
  const [isAdvanced, setIsAdvanced] = useState(!false);
  const [choice, setChoice] = useState("");
  const [score, setScore] = useState(0);
  const [isModal,setIsModal]=useState(true);

  const options = [
    {
      id: 1,
      option: "Rock",
      img: <Rock />,
      style: {
        classTrio:'w-fit h-auto col-start-1 col-end-2 row-start-1 row-end-2 justify-self-end',
        classPoly:'w-fit h-auto col-start-1 col-end-2 row-start-1 row-end-2 justify-self-center self-end ',
        bg: "blue",
      },
      defeat: ["Scissor", "Lizard"],
    },
    {
      id: 2,
      option: "Paper",
      img: <Paper />,
      style: {
        classTrio:'w-fit h-auto col-start-3 col-end-4 row-start-1 row-end-2 justify-self-start',
        classPoly:'w-fit h-auto col-start-2 col-end-3 row-start-1 row-end-2 justify-self-center',
        bg: "blue",
      },
      defeat: ["Rock", "Spock"],
    },
    {
      id: 3,
      option: "Scissor",
      img: <Scissor />,
      style: {
        classTrio:'w-fit h-auto rounded-full col-start-2 col-end-3 row-start-2 row-end-3 self-end justify-self-center',
        classPoly:'w-fit h-auto rounded-full col-start-3 col-end-4 row-start-1 -row-end-4 self-end justify-self-center',
        bg: "blue",
      },
      defeat: ["Paper", "Lizard"],
    },
    {
      id: 4,
      option: "Lizard",
      img: <Lizard />,
      style: {
        classPoly: "w-fit h-auto rounded-full col-start-1 col-end-2 row-start-2 row-end-3 self-end justify-self-end",
        bg: "blue",
      },
      defeat: ["Paper", "Spock"],
    },
    {
      id: 5,
      option: "Spock",
      img: <Spock />,
      style: {
        classPoly: "w-fit h-auto rounded-full col-start-3 col-end-4 row-start-2 row-end-3 self-end justify-self-start",
        bg: "blue",
      },
      defeat: ["Scissor", "Rock"],
    },
  ];
  return (
    <div className="relative  max-h-screen flex flex-col ">
      <Modal isModal={isModal} setIsModal={setIsModal} isAdvanced={isAdvanced}/>
      <div className={`App  relative max-h-screen flex flex-col justify-start items-center ${isModal?'filter blur-sm':''}`}>
        <Header score={score} />
        {!choice ? (
          <OptionsPanel
            
            setIsAdvanced={setIsAdvanced}
            isAdvanced={isAdvanced}
            options={options}
            setChoice={setChoice}
          />
        ) : (
          <Game
            choice={choice}
            isAdvanced={isAdvanced}
            setChoice={setChoice}
            setScore={setScore}
            options={options}
            score={score}
            isModal={isModal}
          />
        )}
        <div className="flex flex-nowrap justify-between items-center w-11/12">
          {(!choice)?(<button className="w-fit px-5 py-1 bg-white text-black font-semibold text-lg" onClick={()=>setIsAdvanced(!isAdvanced)}>{isAdvanced?'Basic':'Advanced'} </button>):null}
          <button className=" w-fit  text-center text-black text-lg font-bold bg-white px-5 py-1" onClick={()=>setIsModal(true)}>Rules</button>
        </div>
      </div>
    </div>
  );
}

export default App;
