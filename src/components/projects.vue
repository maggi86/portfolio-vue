<template>
    <div class="projects">
        <!-- <div class="row" id="landing"> -->
        <!-- </d3iv> -->
            <hr class="mx-auto mt-5"/>
            <h2 class="mx-auto mt-2 mb-2 d-flex justify-content-center">Projects</h2>
            <hr class="mx-auto mt-3"/>
        <div class="container pt-4 mx-auto" id="project">
            <div class="row mx-auto mx-5 w-100">
                <a :href="project.netlify" target="_blank" class="card mx-auto m-4" v-for="project in projects" :key="project">
                    <div class="row mx-auto mx-5">
                        <div class="col p-1">
                            <div class="row" id="row">
                                <img :src="project.image" class="image1" id="image">
                            </div>
                            <div class="row mt-1 ps-1 pt-3 pe-1" id="row2">
                                <h6>{{ project.description }}
                                </h6>
                                <div class="d-flex justify-content-center">
                                    <a target="_blank" v-if="project.github != null" :href="project.github"><i class="bi bi-github p-5"></i>
                                    </a>
                                    <!-- <a target="_blank" :href="project.netlify"><span class="iconify" data-icon="file-icons:netlify"></span>
                                    </a> -->
                                </div>

                            </div>
                        </div>
                        <div class="col mt-1 pb-1 pe-1">
                            <div class="row pt-3" id="row3">
                                <div class="details ps-3">
                                    <h3>{{ project.name }}</h3>
                                </div>
                            </div>
                            <div class="row mt-1" id="row4">
                                <div class="img">
                                    <img :src="project.image2" class="image2" id="image">
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
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
    --color-primary: #346120;
    --color-white: #d3cfcc;
    --color-black: #040303;
    --color-dark: #214a3d;
    --color-gray: #737373;

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
    margin: 0px;
}

a {
    text-decoration: none;
    color: var(--color-white);
    height: 100px;
    width: 100px;
    font-size: 30px;
}

#landing{
    background-image: url('https://i.postimg.cc/kXLsQ0JQ/emerald-green-iso14-wallpaper.jpg');
    background-size: cover;
    height:500px;
    max-width:100%;

}
.card {
    height: 365px;
    width: 370px;
    background: black;
    border-width: 0px;
}

.image1 {
    width: 230px;
    height: 100px;
    border-bottom-right-radius: 10%;
}
.image2 {
    height: 230px;
    width: 140px;
    border-top-left-radius: 10%;

}

.projects {
    background-color: #040303;
    padding-top:50px;
}

span {
    height: 100px;
    width: 100px;
}
hr{
  width:500px;
  height: 3px;
  background-color:var(--color-white);
}
h2{
    color: white;
}
img {
    width: var(--s);
    /* aspect-ratio: 1; */
    /* -webkit-filter:blur(2px); */
    filter: grayscale(100%);
    /* opacity: 100%; */
    cursor: pointer;
    transition: 0.3s;
}

h3 {
    /* padding-top: 10px; */
    width: 100px;
    font-size: 20px;
}

#row3 {
    background: linear-gradient(to top right, rgba(0, 0, 0, 0.655), #3A4E48);
    border-top-right-radius: 40%;
    height: 100px;
    width: 140px;
}

#row2 {
    height: 230px;
    border-bottom-left-radius: 40%;
    background: linear-gradient(to bottom left, rgba(0, 0, 0, 0.655), #3A4E48);
}

h6 {
    padding-top: 20px;
    color: var(--color-white);
    padding-left: 20px;
    font-size: 15px;
    letter-spacing: 1.7px;
}

.details {
    width: 200px;
    height: 180px;
    padding-left: 10px;
    /* padding-top: 30px; */
    color: var(--color-white);

}

#row4 {
    height: 230px;
}

#row {
    height: 100px;
}

.card:hover #image {
    filter: grayscale(0%);
}

@media screen and (max-width:550px){
    hr{
        width:300px;
    }

}
/* @media screen and (max-width:750px){
    .card{
        width:270px;
    }
    .image1{
        width:160px;
        height: 90px;
    }
    .image2{
        width:100px;
        height:190px;
    }
   
} */
</style>