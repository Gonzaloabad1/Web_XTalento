import "./Navbar.css";

export const Navbar = () => `
<img src="./img/logo.png"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" /><div class="container">
  <div class="social-btns">
    <a class="social-btn facebook" href="https://www.facebook.com/fundaciononce" target="_new">
      <i class="fa fa-facebook"></i>
    </a>
    <a class="social-btn twitter" href="https://twitter.com/Fundacion_ONCE" target="_new">
      <i class="fa fa-twitter"></i>
    </a>
    <a class="social-btn instagram" href="https://www.instagram.com/fundaciononce/"target="_new" >
      <i class="fa fa-instagram"></i>
    </a>
  </div>
</div>
<nav>
  <ul>
    <li>
      <a href="#" id="homelink">Home</a>
    </li>
    <li>
      <a href="#" id="cursoslink">Cursos</a>
    </li>
    <li>
      <a href="#" id="becaslink">Becas</a>
    </li>
    <li>
      <a href="#" id="bloglink">Blog</a>
    </li>
    <li>
      <a href="#" id="alumnilink">Alumni</a>
    </li>
  </ul>
</nav>
`;