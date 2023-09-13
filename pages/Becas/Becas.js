import "./Becas.css";
import { cleanPage } from "../../utils/cleanPage";
export const Becas = () => {
const main = document.querySelector("main");
cleanPage(main);
main.innerHTML = `
<div class="background-container">
<img class="logo" src="./img/becas.jpg" alt="Becas" />
<div class="overlay-text"></div>
</div>
<section class="becas">
<br></br>
<h2>Becas</h2>
<p>La <strong>Fundación ONCE </strong>concederá becas a la totalidad del alumnado con objeto de apoyarles económicamente en los gastos que puedan derivarse de su participación en los cursos que se suscriben directamente al <strong>Programa Por Talento Digital</strong> y que se recogen en esta web <strong>(Ver Becas de asistencia a la formación)</strong>.</p>
<p>También se contempla una segunda modalidad de ayuda en aquellos participantes de otras acciones formativas de índole digital y tecnológico que puedan ser impartidos por otras entidades formativas (Ver Becas de formación individual Por Talento Digital).</p>
<div class="background-container">
<section class="cursos">
<div class="boxesContainer">
	<div class="cardBox">
		<div class="card">
			<div class="front">
				<h3>Becas para la asistencia a la formación presencial</h3>
				<strong>&#x21bb;</strong>
			</div>
			<div class="back">
    <p>1.Participante residente en una provincia distinta al de la formación. 35 euros/día, siendo el máximo a pagar, 700€ al mes</p>
    <p>2.Participante con movilidad reducida. 35 euros/día, siendo el máximo a pagar, 700€ al mes.</p>
    <p>3.Beca de conciliación familiar. 13,45 euros/día, para facilitar al participante la conciliación de su asistencia a la formación con el cuidado de hijos menores de 6 años. Esta podrá darse adicional a la estándar de 10€, o adicional a la excepcional de 35€ cuando concurra el punto 1 o el punto 2.</p>
    </p>
			</div>
			<img class="bgEqual" src="http://josetxu.com/img/transparent-3-4.png" />
		</div>
	</div>
	<div class="cardBox">
		<div class="card">
			<div class="front">
				<h3>Convocatoria de becas de formación Por Talento Digital
				</h3>
				<strong>&#x21bb;</strong>
			</div>
			<div class="back">
            <p>La Convocatoria de becas cuenta con colaboraciones especiales con centros educativos como Ironhack, La tecnocreativa,MIOTI y ADALAB</p>
    <p>La beca concedida ascenderá al 80% del total de la formación y hasta un máximo de 10.000€.</p>
			</div>
			<img class="bgEqual" src="http://josetxu.com/img/transparent-3-4.png" />
		</div>
	</div>
	<div class="cardBox">
		<div class="card">
			<div class="front">
				<h3>Oportunidad al Talento</h3>
				<p>Hover to flip</p>
				<strong>&#x21bb;</strong>
			</div>
			<div class="back">
			<p>Las becas de máster, movilidad internacional, formación profesional, estudios, deporte, doctorado e investigación serán dirigidas a la Fundación ONCE. </p><p><strong>Convocatoria abierta del 17 de julio de 2023 al 10 de octubre de 2023</strong></p>
			</div>
			<img class="bgEqual" src="http://josetxu.com/img/transparent-3-4.png" />
		</div>
	</div>
    </div>
</div>

</div>
<img class="logo" src="./img/becas-logo.png" alt="Becas" />
</section>`;
};