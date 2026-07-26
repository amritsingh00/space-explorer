import { FaReact, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiAxios, SiVite } from "react-icons/si";

import "../styles/TechStack.css";

function TechStack(){

return(

<section className="tech">

<h1>Technologies Used</h1>

<div className="tech-grid">

<div><FaReact/> React</div>

<div><FaJsSquare/> JavaScript</div>

<div><FaCss3Alt/> CSS3</div>

<div><SiAxios/> Axios</div>

<div><SiVite/> Vite</div>

</div>

</section>

)

}

export default TechStack;