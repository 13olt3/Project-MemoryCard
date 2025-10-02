import "./picture.css";
import { randomNumberList } from "../../assets/randomNumbers/random.jsx";
import { getPokemonInfo } from "../../assets/pokemonAPI/pokemon.jsx";
import { useState, useEffect } from "react";

export default function PictureCard({
  setCurrentScore,
  currentStreak,
  updateStreak,
  highScore,
  setHighScore,
}) {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    getAllPokemonData(randomNumberList(15)).then((data) =>
      setPokemonData(data)
    );
  }, []);

  async function getAllPokemonData(array) {
    let dataArray = [];
    for (let i = 0; i < array.length; i++) {
      let data = await getPokemonInfo(array[i]);
      let thisData = {
        key: data.name,
        imgUrl: data.sprites.other.dream_world.front_default,
      };
      dataArray.push(thisData);
    }
    return dataArray;
  }

  function shuffleArray() {
    let currentIndex = 15;
    let array = [...pokemonData];

    while (currentIndex !== 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  function streakUpdate(e) {
    let newList = currentStreak.slice(0);
    newList.push(e.target.id);
    updateStreak(newList);
  }

  function handleClick(e) {
    setPokemonData(shuffleArray);
    if (!currentStreak.includes(e.target.id)) {
      setCurrentScore((prev) => prev + 1);
      if (currentStreak.length >= highScore) {
        setHighScore((prev) => prev + 1);
      }
      streakUpdate(e);
    } else {
      setCurrentScore(0);
      updateStreak([]);
    }
  }

  return (
    <div className="mainBox">
      {pokemonData ? (
        pokemonData.map((data) => {
          return (
            <div
              key={data.key}
              className="pictureCard"
              onClick={(e) => handleClick(e)}
            >
              <img
                id={data.key}
                className="pokePicture"
                src={data.imgUrl}
              ></img>
            </div>
          );
        })
      ) : (
        <p>Loading Image...</p>
      )}
    </div>
  );
}
