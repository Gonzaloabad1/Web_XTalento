import "./Blog.css";
import { cleanPage } from "../../utils/cleanPage";
export const Blog = () => {
const main = document.querySelector("main");
cleanPage(main);
main.innerHTML = `
<div class="blog-section">
<div class="galeria">
        <div class="article" id="article1">
        <ul>
        <li><img src="./img/estudio.jpg"></li></ul><h3>Así es la vuelta al cole en las aulas tecnológicas de Por Talento Digital</h3>
            <p>Llega septiembre y la mayoría de los españoles recuperamos la rutina. Los más pequeños se preparan para la vuelta al cole, mientras los mayores retoman su vida laboral o esas formaciones que les pueden ayudar a conseguir un nuevo trabajo.</p>

            <p>Así sucede también con las aulas de Por Talento Digital, que este mes vuelve a abrir sus puertas. Cientos de personas con discapacidad eligen esta opción para adquirir nuevas capacidades con las que hacerse un hueco en un mercado laboral cada vez más digitalizado.</p>
            <a href="">Ver más</a>
        </div>
        <br></br>
        <div class="article" id="article2">
        <ul>
        <li><img src="./img/arte.png"></li></ul>
            <h3>Una oportunidad de juntar el arte y la tecnología</h3>  
            <p>Desde pequeño siempre he sido una persona altamente creativa y con un interés por la estética elevado. Por desgracia, en la educación obligatoria no se suele potenciar mucho la creatividad, la innovación u otros aspectos similares. Sentía constantemente la necesidad de poder conducir esa creatividad y sacarle realmente partido. Eso llevó a que me inscribiera en un ciclo medio de artes gráficas, de lo que hoy en día es mi verdadera vocación: el diseño gráfico.</p>
            <a href="">Ver más</a>
        </div>
        <br></br>
        <div class="article" id="article3">
        <ul>
        <li><img src="./img/trabajo.jpg"></li></ul>
            <h3>Por Talento Digital te enseña a defenderte de las “amenazas” de ciberseguridad más “habituales”</h3>
            <p>En una sociedad tan globalizada, la ciberseguridad es cada vez más importante. Saber defenderse de amenazas cibernéticas es vital, pero no solo en el ámbito profesional, sino también en el personal.</p>
            <a href="">Ver más</a>
        </div>
    </div>
</section>`;
};