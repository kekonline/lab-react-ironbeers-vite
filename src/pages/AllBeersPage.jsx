import axios from "axios";
import { useState, useEffect } from "react";
import loadingBeer from "../assets/loadingBeer.gif";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [allBeerList, setAllBeerList] = useState(null);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const handelSearch = (event) => {
    // setIsLoadingData(true);
    // setTimeout(() => console.log("hello"), 1000);
    setSearchValue(event.target.value);

    //! no entiendo por que no funciona si lo hago asi no funciona
    //! agradeceria una explicacion

    //! ▓▓                ░░
    // !▓▓                ████              ██████▒▒      ████░░    ██    ██░░██████████░░██    ▒▒██████░░    ██▒▒    ██
    // !▓▓              ▒▒    ░░          ██▒▒    ██░░  ████████    ██    ██░░    ██    ░░██  ▓▓██░░  ▒▒██░░  ████░░  ██
    // !▓▓              ██  ░░██        ░░██            ████  ██    ██    ██░░    ██    ░░██  ██▓▓      ██▓▓  ██▓▓██  ██
    // !▓▓            ▒▒██  ░░██        ░░██          ▒▒██░░  ██░░  ██    ██▒▒    ██    ░░██░░██▓▓      ████  ██  ██░░██
    // !▓▓            ████    ██▓▓        ██      ██░░████████████  ██    ██░░    ██    ░░██  ████      ██▒▒  ██    ████
    // !▓▓          ▒▒████▒▒▓▓████        ▓▓██▓▓████  ██      ░░██░░██▓▓▓▓██      ██    ░░██  ░░████▒▒████    ██    ▓▓██
    // !▓▓          ██████  ▒▒██████        ░░░░                ░░                ░░      ░░        ▓▓        ░░      ░░
    // !▓▓          ░░░░░░░░░░░░░░░░

    // console.log(event.target.value);

    event.target.value.length === 0 ? getAllBeersFromApi() : null;

    setTimeout(() => {
      // getQuery();
    }, 100);
  };

  useEffect(() => {
    getQuery();
  }, [searchValue]);

  const getQuery = async (event) => {
    try {
      const searchingForYouMyBeer = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/search?q=" + searchValue
      );
      console.log(searchingForYouMyBeer.data);
      setAllBeerList(searchingForYouMyBeer.data);
      // setIsLoadingData(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBeersFromApi();
  }, []);

  const getAllBeersFromApi = async () => {
    try {
      const allBeersList = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      console.log(allBeersList.data);
      setAllBeerList(allBeersList.data);
      setIsLoadingData(false);
    } catch (error) {
      //   console.log(error);
    }
  };

  if (isLoadingData) {
    return (
      <div
        style={{
          width: "705px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={loadingBeer}
          style={{ borderRadius: "50px", margin: "40px" }}
        />
      </div>
    );
  }

  return (
    <div>
      <form>
        <label htmlFor="search">Search: </label>
        <input
          type="text"
          name="search"
          onChange={handelSearch}
          value={searchValue}
        />
      </form>

      {allBeerList.map((eachBeer) => {
        return (
          <Link key={eachBeer._id} to={`/beers/${eachBeer._id}`}>
            <div
              style={{
                display: "flex",
                borderBottom: "1px solid lightgrey",
                width: "705px",
              }}
            >
              <div
                style={{
                  width: "200px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={eachBeer.image_url}
                  style={{ height: "200px", margin: "20px" }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h1>{eachBeer.name}</h1>
                <h2>{eachBeer.tagline}</h2>
                <p>{eachBeer.contributed_by}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default AllBeersPage;
