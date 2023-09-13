import "./Alumni.css";
import { cleanPage } from "../../utils/cleanPage";
export const Alumni = () => {
const main = document.querySelector("main");
cleanPage(main);
main.innerHTML = `
<div class="background-container">
<div class="overlay-text"></div>
</div>
<section class="becas">
<h2>Alumni</h2>
<br />
<p>Desde Fundación ONCE venimos trabajado por la inclusión social de las personas con discapacidad. Hoy sabemos que esa inserción pasa por promover su talento, atendiendo simultáneamente las necesidades de competencias digitales del mundo laboral y favoreciendo la incorporación de perfiles tecnológicos con alta demanda.</p>
<p>
<div class="videopresent video-container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/KPsFvVPNQsA?si=7xe2GAOmFBaZ_GzI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p>
</div>
<p>Estos son algunos/as de los/s alumnos/as que han participado en diferentes acciones formativas del Programa Por Talento Digital.</p>

<div class="seccion">
<div class="galeria">
  <ul>
    <li><img src="./img/agonzalo.jpg"></li>
    <li><img src="./img/asara_2.png"></li>
    <li><img src="./img/aAntonio.jpg"></li>
    <li><img src="./img/asilvia_2_0.png"></li>
    <li><img src="./img/amoises_1.png"></li>
    <li><img src="./img/avalentina_1.png"></li>
    <li><img src="./img/ajose_luis.png"></li>
  </ul>
</div>
</section>`;
};