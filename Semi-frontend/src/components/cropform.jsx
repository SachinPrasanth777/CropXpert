import { useState } from "react";
import './crop.css'

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

  const handleData = (e) => {
    if (e.target.value === 0 && e.target.name === 0) {
      return { err: "empty data!! please fill it!!" };
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (

    <div className="form-container">
    <form className="features" onSubmit={handleSubmit}>
      <label htmlFor="rainfall">
        Rainfall (mm):
        <input className="inputtext"
          type="text"
          name="rainfall"
          value={formData.rainfall}
          onChange={handleData}
        />
      </label>
      <br />
      <label htmlFor="ph">
        pH:
        <input className="inputtext"
          type="text"
          name="ph"
          value={formData.ph}
          onChange={handleData}
        />
      </label>
      <br />
      <label htmlFor="humidity">
        Humidity:
        <input  className="inputtext"
          type="text"
          name="humidity"
          value={formData.humidity}
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
        N:
        <input className="inputtext"
          type="text"
          name="N"
          value={formData.N}
          onChange={handleData}
        />
      </label>
      <br />
      <label htmlFor="P">
        P:
        <input className="inputtext"
          type="text"
          name="P"
          value={formData.P}
          onChange={handleData}
        />
      </label>
      <br />
      <label htmlFor="K">
        K:
        <input className="inputtext"
          type="text"
          name="K"
          value={formData.K}
          onChange={handleData}
        />
      </label>
      <button className="mysubmit" type="submit">Submit</button>
    </form>
    </div>
  );
}

export default CropForm;
