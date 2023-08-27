import axios from "axios";
import { useState, useEffect } from "react";
import loadingBeer from "../assets/loadingBeer.gif";
import { useParams } from "react-router-dom";

function BeerDetailsPage(props) {
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [selectedBeer, setSelectedBeer] = useState(null);
  let { beerId } = useParams();
  //   console.log(props.random);

  if (props.random !== undefined) {
    beerId = props.random;
  }

  //   console.log(beerId);

  useEffect(() => {
    getOneBeersFromApi();
  }, []);

  const getOneBeersFromApi = async () => {
    try {
      const oneBeersInfo = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/" + beerId
      );
      //   console.log(oneBeersInfo.data);
      setSelectedBeer(oneBeersInfo.data);
      //   console.log(oneBeersInfo.data);

      setIsLoadingData(false);
    } catch (error) {
      console.log(error);
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
    <div
      style={{
        width: "605px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "50px",
      }}
    >
      <div key={selectedBeer._id}>
        <img
          src={selectedBeer.image_url}
          style={{ height: "400px", margin: "50px" }}
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h1> {selectedBeer.name}</h1>
        <h1>{selectedBeer.attenuation_level}</h1>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h2> {selectedBeer.tagline}</h2>
        <h2>{selectedBeer.first_brewed}</h2>
      </div>
      <div>
        <h3>{selectedBeer.description}</h3>
        <h4>{selectedBeer.contributed_by}</h4>
      </div>
    </div>
  );
}

export default BeerDetailsPage;
