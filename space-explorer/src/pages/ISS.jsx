import { useEffect,useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import ISSMap from "../components/ISSMap";
import { FaSatellite } from "react-icons/fa";
import "../styles/ISS.css";

function ISS(){

const[data,setData]=useState(null);

const[loading,setLoading]=useState(true);

const fetchISS=async()=>{

const res=await fetch("https://api.wheretheiss.at/v1/satellites/25544");

const json=await res.json();

setData(json);

setLoading(false);

};

useEffect(()=>{

fetchISS();

const interval=setInterval(fetchISS,5000);

return()=>clearInterval(interval);

},[]);

if(loading){

return(
<>
<Navbar/>
<Loader/>
</>
)

}

return(

<>

<Navbar/>

<div className="iss-page">

<h1>

<FaSatellite/>

Live ISS Tracker

</h1>

<ISSMap
lat={data.latitude}
lon={data.longitude}
/>

<div className="iss-grid">

<div className="card">

<h2>Latitude</h2>

<p>{data.latitude.toFixed(2)}°</p>

</div>

<div className="card">

<h2>Longitude</h2>

<p>{data.longitude.toFixed(2)}°</p>

</div>

<div className="card">

<h2>Altitude</h2>

<p>{data.altitude.toFixed(0)} km</p>

</div>

<div className="card">

<h2>Velocity</h2>

<p>{data.velocity.toFixed(0)} km/h</p>

</div>

</div>

</div>

<Footer/>

</>

)

}

export default ISS;