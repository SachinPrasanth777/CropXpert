import { useState , useEffect } from "react";
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

  // const newform = {
  //   "N":formData.N,
  //   "P":formData.P,
  //   "K":formData.K,
  //   "temperature": formData.temperature,
  //   "ph":formData.ph,
  //   "rainfall":formData.rainfall,
  //   "humidity":formData.humidity
  // }

  const handleData = (e) => {
    if (e.target.value === 0 && e.target.name === 0) {
      return { err: "empty data!! please fill it!!" };
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  // const fetch = async() =>{
  //   const response = await apiserver.post('/features');
  //   formData(response.data)
  // }
  // useEffect(()=>{
  //   fetch();
  // },[]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    await apiserver.post('/features',formData);
    setFormData({
      rainfall: "",
    ph: "",
    humidity: "",
    temperature: "",
    K: "",
    P: "",
    N: "",
    })
    console.log("Successfully posted the crop details!")
    
    // try{
    //   fetch('http://localhost:8000/features',{
    //     method: "POST",
    //     headers:{"Content-Type":"application/json"},
    //     body: JSON.stringify(newform)
    //   })
    // } catch(error){
    //   console.error("Error:",error);
    // }
   
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
    </form>
    </div>
  );
}

export default CropForm;
