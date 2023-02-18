<template>
<div class="projects">
    <div class="container pt-4 mx-auto" id="project">
        <div class="row mx-auto mx-5 w-100">
            <div class="card mx-auto m-4" v-for="project in projects" :key="project">
        <div class="row mx-auto mx-5">
                <div class="col p-1">
                    <div class="row" id="row">
                        <img :src="project.image" class="image1">
                    </div>
                    <div class="row mt-1 ps-2 pt-3" id="row2">
                        <h6>{{ project.description }}
                        </h6>
                        <div class="content d-flex justify-content-center justify-content-around">
                            <a :href="project.github"><i class="bi bi-github p-5"></i>
                                </a>
                                <a :href="project.netlify"><span class="iconify" data-icon="file-icons:netlify"></span>
                                </a>
                        </div>
                        
                    </div>
                </div>
                <div class="col pb-1 pe-1">
                    <div class="row pt-3" id="row3">
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
    margin: 0px;
}

a {
    text-decoration: none;
    color:var(--color-white);
    height:100px;
    width:100px
}

.card {
    height: 365px;
    width: 373px;
    background: black;
    border-width:0px;
}

.image1 {
    width: 300px;
    height: 120px;
    border-bottom-right-radius: 10%;
}
.projects{
    background-color: #040303;
    
}
span{
    height:100px;
    width:100px;
}


img {
  width: var(--s);
  /* aspect-ratio: 1; */
  /* -webkit-filter:blur(2px); */
    -webkit-filter: grayscale(100%);
  /* opacity: 100%; */
  cursor: pointer;
  transition: 0.3s;
}
img:hover {
    -webkit-filter: blur(0px);
}

h3 {
    /* padding-top: 10px; */
    width: 100px;
    font-size:20px;
}

#row3 {
    background: linear-gradient(to top right, rgba(0, 0, 0, 0.655), #3A4E48);
    border-top-right-radius: 40%;
    height: 100px;
    width: 150px;
}

#row2 {
    height: 230px;
    border-bottom-left-radius: 40%;
    background: linear-gradient(to bottom left, rgba(0, 0, 0, 0.655), #3A4E48);
}
h6{
    padding-top:20px;
    color:var(--color-white);
    padding-left:20px;
}

.details {
    width: 200px;
    height: 180px;
    padding-left: 10px;
    /* padding-top: 30px; */
    color:var(--color-white);
    
}
#row4{
    height:250px;
}

#row{
    height:120px;
}

.image2 {
    height: 250px;
    width: 150px;
    border-top-left-radius: 10%;
    
}
</style>