import "./picture.css";
import { randomNumberList } from "../../assets/randomNumbers/random.jsx";
import { getPokemonInfo } from "../../assets/pokemonAPI/pokemon.jsx";
import { useState, useEffect } from "react";

export default function PictureCard() {
  const [numberList, setNumberList] = useState(randomNumberList(15));
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    getAllPokemonData(numberList).then((data) => setPokemonData(data));
  }, [numberList]);

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

  function jumbleArray() {
    let currentIndex = numberList.length;
    let array = numberList.slice(0);

    while (currentIndex !== 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    console.log(array);
    setNumberList(array);
  }

  return (
    <div className="mainBox">
      {pokemonData ? (
        pokemonData.map((data) => {
          return (
            <div
              key={data.key}
              className="pictureCard"
              onClick={() => jumbleArray()}
            >
              <img className="pokePicture" src={data.imgUrl}></img>
            </div>
          );
        })
      ) : (
        <p>Loading Image...</p>
      )}
    </div>
  );
}
