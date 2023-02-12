<template>
        <div class="container" id="project" >
            <div class="row mx-auto" v-for="project in projects" :key="project">
            <div class="col">
                <div class="row" id="row">
                    <img :src="project.image" class="image1">
                </div>
                <div class="row" id="row2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae debitis molestias dolorem totam at consequuntur odit eligendi animi amet enim architecto optio, dicta fuga doloremque delectus facere dolorum recusandae rem.
                    </p>
                </div>
            </div>
            <div class="col">
                <div class="row" id="row3">
                    <div class="details">
                        <div class="content">
                            <h3>{{project.name}}</h3>
                    <a :href="project.github"><i class="bi bi-github"></i>
                    </a>
                    <a :href="project.netlify"><span class="iconify" data-icon="file-icons:netlify"></span>
                    </a>
                        </div>
                        </div>
                </div>
                <div class="row" id="row4">
                    <div class="img">
                        <img :src="project.image2" class="image2">
                    </div>
                </div>
            </div>
        </div>
        </div>
</template>


<script>
export default{
    computed:{
        projects(){
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
*{
    padding:0px;
    margin:0px;
}
a{
    text-decoration:none;
    color:black;
}
.image1{
    width:350px;
    height:200px;

}
.row{
    background-color: rgb(193, 207, 202);
}
p{
    padding-left:30px;
    padding-top:15px;
    width:300px;
}
h3{
    padding-top:10px;
    width:200px;
}
.container{
    height:700px;
    width:600px;
}
#row3{
    background-color: #3A4E48;
    border-top-right-radius: 40%;
    height:150px;
    width:250px;
}
#row2{
    height:250px;
    border-bottom-left-radius: 40%;
}
.col{
    background-color:#BEB0A7;
}
.details{
width:330px;
height: 180px;
}
.image2{
    height:280px;
    width:150px;
}
</style>