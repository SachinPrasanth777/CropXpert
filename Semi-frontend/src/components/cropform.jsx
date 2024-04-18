import { useState } from "react";
import './crop.css'
import apiserver from "../api";

function CropForm() {
  const [formData, setFormData] = useState({
    rainfall: "",
    ph: "",
    humidity: "",
    temperature: "",
    K: "",
    P: "",
    N: "",
  });
  const [predictedcrop,setpredictedcrop] = useState("");

  const handleData = (e) => {
    if (e.target.value === 0 && e.target.name === 0) {
      return { err: "empty data!! please fill it!!" };
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await apiserver.post('/features',formData);
    setFormData({
      rainfall: "",
    ph: "",
    humidity: "",
    temperature: "",
    K: "",
    P: "",
    N: "",
    })
    setpredictedcrop(response.data.predicted_crop);
    console.log("Successfully posted the crop details!");
    console.log("Predicted Crop is :", response.data.predicted_crop);
  }; 

  return (

    <div className="form-container">
    <form className="features" onSubmit={handleSubmit}>
      <label htmlFor="rainfall">
        N:
        <input className="inputtext"
          type="text"
          name="N"
          value={formData.N}
          onChange={handleData}
        />
      </label>
      <br />
      <label htmlFor="ph">
        P:
        <input className="inputtext"
          type="text"
          name="P"
          value={formData.P}
          onChange={handleData}
        />
      </label>
      <br />
      <label htmlFor="humidity">
        K:
        <input  className="inputtext"
          type="text"
          name="K"
          value={formData.K}
          onChange={handleData}
        />
      </label>
      <br />
      <label htmlFor="temperature">
        Temperature:
        <input className="inputtext"
          type="text"
          name="temperature"
          value={formData.temperature}
          onChange={handleData}
        />
      </label>
      <br />
      <label htmlFor="N">
        pH:
        <input className="inputtext"
          type="text"
          name="ph"
          value={formData.ph}
          onChange={handleData}
        />
      </label>
      <br />
      <label htmlFor="P">
        Rainfall(mm):
        <input className="inputtext"
          type="text"
          name="rainfall"
          value={formData.rainfall}
          onChange={handleData}
        />
      </label>
      <br />
      <label htmlFor="K">
        Humidity:
        <input className="inputtext"
          type="text"
          name="humidity"
          value={formData.humidity}
          onChange={handleData}
        />
      </label>
      <button className="mysubmit" type="submit" onClick={handleSubmit}>Submit</button>
      <a></a>
    </form>
    {predictedcrop && <div className="predictedcrop">Suitable Crop :  {predictedcrop}</div>}
    </div>
  );
}

export default CropForm;
