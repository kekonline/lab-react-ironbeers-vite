import { Link } from "react-router-dom";
import allBeersPic from "../assets/beers.png";
import randomBeersPic from "../assets/random-beer.png";
import newBeerPic from "../assets/new-beer.png";

function HomePage() {
  return (
    <div>
      <img src={allBeersPic} />
      <br />
      <Link to="/beers">
        <h1>All Beers</h1>
      </Link>
      <br />
      <img src={randomBeersPic} />
      <br />
      <Link to="/random-beer">
        <h1>Random Beer</h1>
      </Link>
      <br />
      <img src={newBeerPic} />
      <br />
      <Link to="/new-beer">
        <h1>New Beer</h1>
      </Link>
    </div>
  );
}

export default HomePage;
