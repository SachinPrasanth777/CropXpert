import { useState } from "react";


function cropform(){
    const [formData,setformData] = useState({
        rainfall:'',
        ph:'',
        humidity:'',
        temperature:'',
        K:'',
        P:'',
        N:''
    });

    const handledata = (e)=>{
        if(e.target.value===0 &&e.target.name===0 ){
            return{err:"empty data!! please fill it!!"}
        }
        else{
        setformData({...formData,[e.target.name]:e.target.value})}
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    return(
        <form onSubmit={handleSubmit}>
            <label for='rainfall'>
                Rainfall (mm):
                <input 
                type="number"
                name="rainfall"
                value={formData.rainfall}
                onChange={handledata}
                />
            </label>
            <br/>
            <label for='ph'>
                pH:
                <input
                type="number"
                name="ph"
                value={formData.ph}
                onChange={handledata}
                />
            </label>
            <br/>
            <label for='humidity'>
            Humidity:
            <input
            type='number'
            name="humidity"
            value={formData.humidity}
            onChange={handledata}
            />
            </label>
            <br/>
            <label for='temperature'>
                Temperature:
                <input
                type="number"
                name="temperature"
                value={formData.temperature}
                onChange={handledata}
                />
            </label>
            <br/>
            <label for='N'>
                N:
                <input
                type="number"
                name="N"
                value={formData.N}
                onChange={handledata}
                />
            </label>
            <br/>
            <label for='P'>
                P:
                <input
                type="number"
                name="P"
                value={formData.P}
                onChange={handledata}/>
            </label>
            <br/>
            <label for='K'>
                K:
                <input
                type="number"
                name="K"
                value={formData.K}
                onChange={handledata}/>
            </label>
        </form>
    )

}


export default cropform;