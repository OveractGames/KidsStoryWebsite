import $ from 'jquery';
import './style.css'; // Assuming you have a styles.css file for your styles

export class Main {
  constructor() {
    this.init();
  }

  init() {
    console.log("Main class initialized");

    $('.card-game').on('click', () => {
      console.log('Image clicked via jQuery!');
    });


    $(() => {
      const navbar = `
    <nav class="navbar navbar-expand-md main-navbar px-3 px-md-5">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">
          <img src="./assets/Kidszone logo.png" alt="StoryToys Logo" class="logo" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar"
          aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainNavbar">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a href="index.html" class="nav-link fw-bold text-dark">Home</a></li>
            <li class="nav-item"><a href="about.html" class="nav-link fw-bold text-dark">About</a></li>
            <li class="nav-item"><a href="blog.html" class="nav-link fw-bold text-dark">Blog</a></li>
            <li class="nav-item"><a href="contact.html" class="nav-link fw-bold text-dark">Contact</a></li>
            <li class="nav-item">
              <a href="apps.html" class="nav-link fw-bold text-dark d-flex align-items-center">
                Apps <span class="ms-1">⭐</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;
      const footer = `
    <footer class="text-white py-4 mt-5 bg-dark">
      <div class="container w-75">
        <div class="row align-items-center text-center text-md-start">
          <div class="col-md-4 mb-3 mb-md-0">
            <a href="#" class="text-white me-2">Privacy</a> |
            <a href="#" class="text-white mx-2">Terms</a> |
            <a href="#" class="text-white mx-2">Cookies</a> |
            <a href="#" class="text-white ms-2">Contact</a>
          </div>
          <div class="col-md-4 mb-3 mb-md-0 text-center">
            <a href="#" class="text-white m-2"><i class="fab fa-apple fa-2x"></i></a>
            <a href="#" class="text-white m-2"><i class="fab fa-google-play fa-2x"></i></a>
            <a href="#" class="text-white m-2"><i class="fab fa-amazon fa-2x"></i></a>
            <div class="mt-2 small">© StoryToys<br>Developed by WP Web Design</div>
          </div>
        </div>
      </div>
    </footer>
  `;
      $("#navbar").html(navbar);
      $("#footer").html(footer);
    });

    $("a").on("click", function (e) {
      const href = $(this).attr("href");
      if (!href || href.startsWith("#") || href.startsWith("javascript:")) return;
      $("body").fadeOut(200, () => {
        window.location.href = href!;
      });
      e.preventDefault();
    });
  }
}
export default new Main;
