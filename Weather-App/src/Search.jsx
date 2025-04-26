import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Search({Upd}) {

    const API_ID="7c5a7230081188462db4e23a12012f0007"//sample api key
    const [city, setCity]=useState("")
    // const [rep, setRep] = useState({
    //     city:"",
    //     humidity:"",
    //     pressure:"",
    //     sea_level:"",
    //     temp:"",
    //     temp_max:"",
    //     temp_min:"",
    // Discription:""});
    // const [rep,setRep]=useState({})


    const update = (e) => {
        const value = e.target.value;
        setCity(value);
        
    };

    async function response(city){

        let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_ID}&units=metric`)
        let result=await res.json()
        let Weather={
            temp:result.main.temp,
            humidity:result.main.humidity,
            city:result.name,
            temp_max:result.main.temp_max,
            temp_min:result.main.temp_min,
            discription:result.weather[0].description
        }
        console.log(result)
        Upd(Weather)

    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Searching for city:", city);
        response(city)
        
        setCity("")
        // Add your search logic here
    };

    

    return (
        <form onSubmit={handleSubmit}>
            <TextField 
                id="outlined-basic" 
                label="City" 
                variant="outlined" 
                onChange={update} 
                value={city} 
            />
            <br /><br />
            <Button variant="contained" type="submit">Search</Button>
        </form>
    );
}
