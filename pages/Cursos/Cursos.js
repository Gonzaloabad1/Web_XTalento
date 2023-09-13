import "./Cursos.css";
import { cleanPage } from "../../utils/cleanPage";
export const Cursos = () => {
const main = document.querySelector("main");
cleanPage(main);
main.innerHTML = `
<div class="background-container">
<img class="logo" src="./img/formacion-digital.jpg" alt="Curso" />
</div>
<section class="becas">
<br></br>
<h2>Cursos de formación</h2>
<p>El Programa <strong>Por Talento Digital</strong> de la Fundación ONCE ofrece una amplia variedad  de formaciones digitales y tecnológicas, dotadas de las competencias, destrezas, conocimientos y actitudes necesarios para enfrentarse exitosamente a los retos del mercado laboral actual y futuro</p>
<div class="background-container">
<section class="cursos">
<div class="boxesContainer">
	<div class="cardBox">
		<div class="card">
			<div class="front">
				<h3>Diseño Gráfico nivel avanzado (Paquete Adobe)</h3>
				<strong>&#x21bb;</strong>
			</div>
			<div class="back">
	<p>Lugar: Zona Embajadores</p>
    <p>Fecha inicio: 19 Sept 2023</p>
    <p>Duración: 60h</p>
    <p>Modalidad: Presencial</p>
    </p>
			</div>
			<img class="bgEqual" src="http://josetxu.com/img/transparent-3-4.png" />
		</div>
	</div>
	<div class="cardBox">
		<div class="card">
			<div class="front">
				<h3>MOOC_Accesibilidad en el desarrollo de productos y servicios digitales
				</h3>
				<strong>&#x21bb;</strong>
			</div>
			<div class="back">
    <p>Fecha inicio:10 Oct 2023</p>
    <p>Duración: 30h</p>
    <p>Modalidad: A distancia</p>
			</div>
			<img class="bgEqual" src="http://josetxu.com/img/transparent-3-4.png" />
		</div>
	</div>
	<div class="cardBox">
		<div class="card">
			<div class="front">
				<h3>Atrae clientes del ecosistema digital</h3>
				<strong>&#x21bb;</strong>
			</div>
			<div class="back">
			<p>Lugar: Zona Embajadores</p>
    <p>Fecha inicio: 17 Oct 2023</p>
    <p>Duración: 70h</p>
    <p>Modalidad: Presencial</p>
			</div>
			<img class="bgEqual" src="http://josetxu.com/img/transparent-3-4.png" />
		</div>
	</div>
	</div>
</div>
</section>`;
};