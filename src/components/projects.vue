<template>
<div class="projects">
    <div class="container" id="project">
        <div class="row mx-auto w-100">
            <div class="card mx-auto m-4" v-for="project in projects" :key="project">
        <div class="row mx-auto">
                <div class="col pe-1 pt-1 pb-1 ps-1">
                    <div class="row" id="row">
                        <img :src="project.image" class="image1">
                    </div>
                    <div class="row mt-1 pb-5 ps-2" id="row2">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae debitis molestias dolorem
                            totam at consequuntur odit eligendi animi amet enim architecto optio, dicta fuga doloremque
                            delectus facere dolorum recusandae rem.
                        </p>
                        <div class="content d-flex justify-content-center justify-content-around">
                            <a :href="project.github"><i class="bi bi-github"></i>
                                </a>
                                <a :href="project.netlify"><span class="iconify" data-icon="file-icons:netlify"></span>
                                </a>
                        </div>
                        
                    </div>
                </div>
                <div class="col pt-1 pb-1">
                    <div class="row" id="row3">
                        <div class="details">
                            <h3>{{ project.name }}</h3>
                        </div>
                    </div>
                    <div class="row mt-1" id="row4">
                        <div class="img">
                            <img :src="project.image2" class="image2">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</div>
</template>


<script>
export default {
    computed: {
        projects() {
            return this.$store.state.project;
        }
    }
}
</script>

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

* {
    padding: 0px;
    margin: auto;
}

a {
    text-decoration: none;
    color: rgb(172, 170, 170);
}

.card {
    height: 370px;
    width: 370px;
    background: linear-gradient(to top right, rgb(0, 0, 0), var(--color-dark), rgb(0, 0, 0) );
    border-width:0px;
}

.image1 {
    width: 300px;
    height: 140px;
    border-bottom-right-radius: 10%;
}
.projects{
    background-color: #040303;
    
}
p {
    width: 200px;
    color: pink;
    font-size:12px;
}

img {
  --s: 150px;   /* the size of the image */
  --b: 14px;     /* the border thickness*/
  --g: 15px;    /* the gap */

  
  width: var(--s);
  aspect-ratio: 1;
  outline: calc(var(--s)/2) solid rgba(0, 0, 0, 0.393);
  outline-offset: calc(var(--s)/-2);
  cursor: pointer;
  transition: 0.3s;
}
img:hover {
  outline: var(--b);
  outline-offset: var(--g);
}

h3 {
    /* padding-top: 10px; */
    width: 100px;
    font-size:18px;
}

#row3 {
    background: linear-gradient(to top right, rgba(0, 0, 0, 0.655), var(--color-dark));
    border-top-right-radius: 40%;
    height: 100px;
    width: 146px;
}

#row2 {
    height: 210px;
    border-bottom-left-radius: 40%;
    background: linear-gradient(to bottom left, rgba(0, 0, 0, 0.655), var(--color-dark));
}


.details {
    width: 200px;
    height: 180px;
    padding-left: 10px;
    padding-top: 30px;
    color: white;
    
}
.row4{
    height:250px;
}

.image2 {
    height: 250px;
    width: 150px;
    border-top-left-radius: 10%;
    
}
</style>