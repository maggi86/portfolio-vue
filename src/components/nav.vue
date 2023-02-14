<template>
  <!-- <nav class="navbar sticky-top">
    <div class="container">
      <div class="header">
        <a class="brand" href="/">Transparent to Solid Nav</a>
      </div>
      <div class="navbar-collapse d-flex justify-content-end">
        <ul class="nav">
          <router-link class="mx-2" id="home" to="/">Home</router-link>
          <router-link class="mx-2" id="about" to="/about">About</router-link>
          <router-link class="mx-2" id="project" to="/projects">Projects</router-link>
          <router-link class="mx-2" id="resume" to="/resume">Resume</router-link>
          <router-link class="mx-2" id="testimonial" to="/testimonial">Testimonial</router-link>
          <router-link class="mx-2" id="contact" to="/">Contact</router-link>
          <div class="ripple-wrap">
            <div class="ripple"></div>
          </div>
        </ul>
      </div>
    </div>
  </nav> -->

  <!--  -->
  <nav class="navbar navbar-expand-lg sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="mx-2" id="home" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="mx-2" id="about" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="mx-2" id="project" to="/projects">Projects</router-link>
        </li>
        <li class="nav-item">
          <router-link class="mx-2" id="resume" to="/resume">Resume</router-link>
        </li>
        <li class="nav-item">
          <router-link class="mx-2" id="testimonial" to="/testimonial">Testimonial</router-link>
        </li>
        <li class="nav-item">
          <router-link class="mx-2" id="contact" to="/">Contact</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <!--  -->
</template>


<style scoped>
:root {
  --color-primary: #8B9D83;
  --color-white: #BEB0A7;
  --color-black: #040303;
  --color-dark: #3A4E48;
  --color-gray: #6A7B76;

  --font-lg: 64px;
  --font-xm: 45px;
  --font-md: 26px;
  --font-sm: 15px;
  --font-xs: 9px;

  --size-lg: 1280px;
  --size-md: 976px;
  --size-sm: 768px;
  --size-xs: 500px;
}

.navbar {
  height: 60px;
  background-color: transparent;
  border: none;
  color: rgb(24, 0, 0);
  z-index: 1;
  transition: background-color 1s ease 0s;
}

a {
  text-decoration: none;
  color: var(--color-black);
}

.navbar-brand {
  /* margin-top: 10px; */
  color: rgb(255, 0, 0);
}

.navbar-brand :hover {
  color: #b119cf;
  border: 1px solid #C57ED3;
}

.navbar a:hover {
  color: var(--color-black);
}

.navbar a:visited {
  color: var(--color-grey);
  text-decoration: none;
}

.navbar.solid {
  background-color: #490D40;
  transition: background-color 1s ease 0s;
  box-shadow: 0 0 4px grey;
}

.navbar-brand {
  color: #C57ED3;
  transition: color 1s ease 0s;
}

.navbar a {
  color: #C57ED3;
  transition: color 1s ease 0s;
}
</style>

<script>
export default {
  mounted() {
    $(document).ready(function () {
      // Transition effect for navbar 
      $(window).scroll(function () {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 1) {
          $('.navbar').addClass('solid');
        } else {
          $('.navbar').removeClass('solid');
        }
      });
    });

  }
}
</script>