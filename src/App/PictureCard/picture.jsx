import "./picture.css";
import { randomNumberList } from "../../assets/randomNumbers/random.jsx";
import { getPokemonInfo } from "../../assets/pokemonAPI/pokemon.jsx";
import { useState, useEffect } from "react";

export default function PictureCard() {
  const [numberList, setNumberList] = useState(randomNumberList(15));
  const [imgUrlArray, setImgUrlArray] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [imgDataArray, setImgDataArray] = useState(null);

  useEffect(() => {
    pokemonData().then((data) =>
      setImgUrl(data.sprites.other.dream_world.front_default)
    );
  }, []);

  useEffect(() => {
    getAllPokemonData(numberList).then((data) => setImgUrlArray(data));
  }, [numberList]);

  useEffect(() => {
    if (imgUrlArray) {
      let data = [];
      for (let i = 0; i < imgUrlArray.length; i++) {
        data.push(imgUrlArray[i].sprites.other.dream_world.front_default);
      }
      setImgDataArray(data);
    }
  }, [imgUrlArray]);

  async function pokemonData() {
    const data = await getPokemonInfo(15);
    return data;
  }

  async function getAllPokemonData(array) {
    let dataArray = [];
    for (let i = 0; i < array.length; i++) {
      let thisData = await getPokemonInfo(array[i]);
      dataArray.push(thisData);
    }

    return dataArray;
  }

  return (
    <div className="mainBox">
      {imgDataArray ? (
        imgDataArray.map((datapoint) => {
          return (
            <d>
              <img style={{ width: "7em" }} src={datapoint}></img>
            </d>
          );
        })
      ) : (
        <p>Loading Image...</p>
      )}
      {imgUrl ? (
        <img style={{ width: "7em" }} src={imgUrl}></img>
      ) : (
        <p>Loading Image...</p>
      )}
    </div>
  );
}
