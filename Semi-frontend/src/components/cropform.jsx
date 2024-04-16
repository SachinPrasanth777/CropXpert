import { useState } from "react";

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
    <form id="cropform" onSubmit={handleSubmit}>
      <label htmlFor="rainfall">
        Rainfall (mm):
        <input
          type="number"
          name="rainfall"
          value={formData.rainfall}
          onChange={handleData}
        />
      </label>
      <br />
      <label htmlFor="ph">
        pH:
        <input
          type="number"
          name="ph"
          value={formData.ph}
          onChange={handleData}
        />
      </label>
      <br />
      <label htmlFor="humidity">
        Humidity:
        <input
          type="number"
          name="humidity"
          value={formData.humidity}
          onChange={handleData}
        />
      </label>
      <br />
      <label htmlFor="temperature">
        Temperature:
        <input
          type="number"
          name="temperature"
          value={formData.temperature}
          onChange={handleData}
        />
      </label>
      <br />
      <label htmlFor="N">
        N:
        <input
          type="number"
          name="N"
          value={formData.N}
          onChange={handleData}
        />
      </label>
      <br />
      <label htmlFor="P">
        P:
        <input
          type="number"
          name="P"
          value={formData.P}
          onChange={handleData}
        />
      </label>
      <br />
      <label htmlFor="K">
        K:
        <input
          type="number"
          name="K"
          value={formData.K}
          onChange={handleData}
        />
      </label>
    </form>
  );
}

export default CropForm;
