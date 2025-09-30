import "./picture.css";
import { randomNumberList } from "../../assets/randomNumbers/random.jsx";

export default function PictureCard() {
  let list = randomNumberList(15);

  return (
    <div className="mainBox">
      <div className="box">1</div>
      <div className="box">2</div>
      <div className="box">3</div>
      <div className="box">4</div>
      <div className="box">5</div>
      <div className="box">6</div>
      <div className="box">7</div>
      <div className="box">8</div>
      <div className="box">9</div>
      {console.log(list)}
      {console.log(`List size: ${list.length}`)}
    </div>
  );
}
