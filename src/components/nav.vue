<template>
    <nav class="navbar align-self-center">
      <div class="container">
        <div class="header">
          <a class="brand" href="/">Transparent to Solid Nav</a>
        </div>
        <div class="navbar-collapse d-flex justify-content-end">
          <ul class="nav">
            <router-link class="mx-2" to="/">Home</router-link>
            <router-link class="mx-2" to="/about">About</router-link>
            <router-link class="mx-2" to="/projects">Projects</router-link>
            <router-link class="mx-2" to="/resume">Resume</router-link>
            <router-link class="mx-2" to="/testimonial">Testimonial</router-link>
            <router-link class="mx-2" to="/">Contact</router-link>
          </ul>
        </div>
      </div>
    </nav>
</template>
<!-- bra what did you doooo -->
u did this last night
<!-- push this changes ill clone it and try to fix it on my end 
 -->
 git what did u do my terminal doesnt wanna open im whole time preessing ctrl ¬

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
  z-index: 0;
  transition: background-color 1s ease 0s;
}
a{
  text-decoration:none;
  color:var(--color-black);
}
.brand {
 margin-top: 10px;
 color: rgb(255, 0, 0);
}
.brand :hover {
     color: #b119cf;
     border: 1px solid #C57ED3;
  } 
.nav a:hover{
      color: var(--color-black);
    }
.nav a:visited {
      color: var(--color-grey);
      text-decoration: none;
    }

    .navbar.solid {
  background-color: #490D40;
  transition: background-color 1s ease 0s;
  box-shadow: 0 0 4px grey;
    }

.brand {
  color: #C57ED3;
  transition: color 1s ease 0s;
}
.nav a {
        color: #C57ED3;
        transition: color 1s ease 0s;
      }
</style>

<script>
// $(document).ready(function() {
//         // Transition effect for navbar 
//         $(window).scroll(function() {
//           // checks if window is scrolled more than 500px, adds/removes solid class
//           if($(this).scrollTop() > 500) { 
//               $('.navbar').addClass('solid');
//           } else {
//               $('.navbar').removeClass('solid');
//           }
//         });
// });
</script>