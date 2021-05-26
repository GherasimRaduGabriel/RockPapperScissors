import React from "react";
import { useState } from "react";
import "./index.css";
import paper from "./Paper.png";
import rock from "./Rock.png";
import scissors from "./Scissors.png";
import poza from "./poza.png";

function App() {
  const weapons = [paper, rock, scissors, poza];
  const [scorePlayer, setscorePlayer] = useState(0);
  const [scoreCpu, setscoreCpu] = useState(0);
  const [weaponPlayer, setweaponPlayer] = useState(weapons[0]);
  // var weaponCPU = weapons[0];
  const [weaponCPU, setweaponCPU] = useState(weapons[0]);
  const pickPaper = () => setweaponPlayer(weapons[0]);
  const pickRock = () => setweaponPlayer(weapons[1]);
  const pickScissors = () => setweaponPlayer(weapons[2]);
  const [whoWin, setwhoWin] = useState("Winner");
  const [JJ, setJJ] = useState(0);
  const cpuPick = () => {
    // setweaponCPU(weapons[3]);
    // console.log(weaponCPU);
    setweaponCPU(weapons[Math.floor(Math.random() * 3)]);
  };

  const selectWinner = () => {
    cpuPick();
    setJJ(JJ + 1);
  };
  React.useEffect(() => {
    console.log(weaponCPU, weaponPlayer);
    if (weaponPlayer === weaponCPU) {
      setwhoWin("Egalitate");
    } else if (
      (weaponPlayer === weapons[0] && weaponCPU === weapons[1]) ||
      (weaponPlayer === weapons[1] && weaponCPU === weapons[2]) ||
      (weaponPlayer === weapons[2] && weaponCPU === weapons[0])
    ) {
      setwhoWin("Player win");
      setscorePlayer(scorePlayer + 1);
    } else {
      setwhoWin("CPU win");
      setscoreCpu(scoreCpu + 1);
    }
  }, [JJ, weaponCPU]);
  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1>
      <div className="cont">
        <div>
          <div>
            <h1>{scorePlayer}</h1>
          </div>
          <div>
            <img src={weaponPlayer}></img>
          </div>
          <div>
            <h1>Player</h1>
          </div>
        </div>
        <div>
          <div>
            <h1>{scoreCpu}</h1>
          </div>
          <div>
            <img src={weaponCPU}></img>
          </div>
          <div>
            <h1>CPU</h1>
          </div>
        </div>
      </div>
      <div className="cont">
        <h1>{whoWin}</h1>
      </div>
      <div className="cont">
        <button type="button" className="btn" onClick={pickPaper}>
          Paper
        </button>
        <button type="button" className="btn" onClick={pickRock}>
          Rock
        </button>
        <button type="button" className="btn" onClick={pickScissors}>
          Scissors
        </button>
      </div>
      <div className="cont">
        <button type="button" className="btn" onClick={selectWinner}>
          Start
        </button>
      </div>
      <div>
        <h1>Games played: {JJ}</h1>
      </div>
    </div>
  );
}
export default App;
