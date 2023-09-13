import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

// Define el componente Home como una función
export const Home = () => {
  // Obtiene una referencia al elemento <main>
  const main = document.querySelector("main");
  
  // Llama a la función cleanPage para limpiar el contenido del elemento <main>
  cleanPage(main);
  
  // Llena el elemento <main> con contenido HTML
  main.innerHTML = `
  <div class="background-container">
<img class="logo" src="./img/fondo.jpg" alt="Fondo" />
<div class="overlay-text"></div>
</div>
      
      <!-- Sección de contenido de texto -->
      <section class="home">
        <h2>¿Qué es el Programa Por Talento Digital?</h2>
        <p><strong>Por Talento Digital es un programa de formación permanente orientado a la mejora de los conocimientos y las competencias digitales y tecnológicas</strong> de las personas con discapacidad, y en consecuencia de su empleabilidad, a través de la formación.</p>
        <p>Este programa se pone en marcha bajo la coordinación y financiación de la Fundación ONCE y de sus asociaciones Inserta Empleo e Inserta Innovación,&nbsp;y el apoyo del Fondo Social Europeo</strong>, con la convicción conjunta de esta apuesta por la formación en contenidos digitales y profesiones tecnológicas altamente demandadas en el mercado de trabajo presente y futuro.</p>
        
        <h2>Otras Convocatorias de becas disponibles en Fundación ONCE accede a la información aquí.</h2>
        <p>Realizamos <strong>formación presencial y virtual</strong> en todo el territorio español y en noviembre de 2021 abrimos nuestro propio centro de formación en Madrid. Situado en la zona de Embajadores, <strong>concretamente en la calle Fray Luis de León, 11,</strong> una de las zonas mejor accesibles y bien comunicadas de la ciudad. El centro está equipado tecnológicamente con todo lo necesario para el <strong>aprendizaje híbrido y colaborativo</strong>.</p>
  `;}