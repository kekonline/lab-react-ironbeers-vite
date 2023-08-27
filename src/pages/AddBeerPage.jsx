import axios from "axios";
import { cloneElement, useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
  const [formObject, setFormObject] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
  });

  const navigate = useNavigate();

  const handleSubmitToAPI = async () => {
    event.preventDefault();
    try {
      await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        formObject
      );

      console.log("success");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleAnyInput = (event) => {
    const { name, value } = event.target;
    // console.log(event.target.name, event.target.value);
    // console.log(name, value);
    //   setFormObject({ name: value });
    // setFormObject({ ...formObject, [name]: value });
    let formObjectClone = { ...formObject };
    formObjectClone[name] = value;
    setFormObject(formObjectClone);
    // console.log(formObject);
  };

  return (
    <div>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" onChange={handleAnyInput} />
        <br />
        <label htmlFor="tagline">Tagline:</label>
        <input type="text" name="tagline" onChange={handleAnyInput} />
        <br />
        <label htmlFor="description">Description:</label>
        <textarea type="text" name="description" onChange={handleAnyInput} />
        <br />
        <label htmlFor="first_brewed">First Brewed:</label>
        <input type="text" name="first_brewed" onChange={handleAnyInput} />
        <br />
        <label htmlFor="brewers_tips">Brewer's Tips:</label>
        <input type="text" name="brewers_tips" onChange={handleAnyInput} />
        <br />
        <label htmlFor="attenuation_level">Attenuation Level:</label>
        <input
          type="number"
          name="attenuation_level"
          onChange={handleAnyInput}
        />
        <br />
        <label htmlFor="ontributed_by">Contributed By:</label>
        <input type="text" name="ontributed_by" onChange={handleAnyInput} />
        <br />
        <button onClick={handleSubmitToAPI}>Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
