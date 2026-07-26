import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const icon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/3212/3212608.png",
  iconSize: [40,40],
});

function ISSMap({lat,lon}){

return(

<MapContainer
center={[lat,lon]}
zoom={3}
style={{
height:"450px",
width:"100%",
borderRadius:"20px"
}}
>

<TileLayer
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>

<Marker
position={[lat,lon]}
icon={icon}
/>

</MapContainer>

);

}

export default ISSMap;