import React from "react";
import"./components.css";
import eu from "./img/eu.png";

function Home() {

    return (
    <header id="secomp">

    
<section >    
    
    <div>  
      
    <h1>    Olá mundo! Me chamo Nicolas Rufino e sou um Desenvolvedor Front End.</h1>
<p>Mesmo se eu me tornasse o mais sábio em todas as linguagens de programação, ainda teria muito a aprender.</p>

      </div>
      <div>
           <img id="imagemg" src={eu} alt="" />
</div>
      </section>
      </header>
  );
}
export default Home;
