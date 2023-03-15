<template>
    <div class="resume pt-4">
        <hr class="mx-auto"/>
            <h2 class="mx-auto mt-2 mb-2 d-flex justify-content-center">Resume</h2>
            <hr class="mx-auto mt-3"/>
        <div class="container">
            <div class="row ms-5 d-flex justify-content-center">
                <div class="card m-3" v-for="resume in resumes">
                    <div class="content">
                        <div class="row">
                            <div class="col-4">
                                <h3>{{resume.date}}</h3>
                            </div>
                            <div class="col">
                                <h4>
                                  {{resume.title}}
                                </h4>   
                                <p>{{resume.description}}</p>   
                            </div>
                        </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    computed:{
        resumes(){
            return this.$store.state.resume
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
.resume{
    background-color: var(--color-black)
}
.container{
    padding:0px;
    padding-top:50px;
    padding-bottom:50px;
    margin:0px;
    width:100%
}
.col{
    padding-top:20px;
}
p{
    font-size:13px;
    letter-spacing:.7px;
margin-top:5px;
    color:var(--color-white);

}
hr{
  width:500px;
  height: 3px;
  background-color:var(--color-white);
}
h2{
    color: white;
}
h4{
    font-size:22px;
    font-weight:bold;
    color:var(--color-white);
}
.row{
    margin:0px;
    width:100%;
}
/* .left .right h3{
writing-mode: vertical-lr;
text-orientation: upright;
line-height:17px;
letter-spacing: 1px;
height:150px;
font-size: 18px;
padding-top:5px;
color:var(--color-white);
} */
 h3{
    writing-mode: vertical-rl;
/* text-combine-upright: all; */
/* text-combine-upright: none; */
font-size: 23px;
height:180px;
padding-top:20px;
color:var(--color-white);
padding-bottom:20px;

}
.container .card:hover {
  box-shadow: 1px 3px 15px 4px #8b9d837c;
  /* border: 1px solid rgba(255, 255, 255, 0.263); */
}
.card{
    height:200px;
    width: 340px;
    /* margin-bottom:5px; */
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    background-color: rgba(220, 245, 231, 0.08);
    /* margin-left:5px; */
    border-bottom-width: 1px;
    border-right: 1px;
    border-top:1px;
border-radius: 2px;
border-color:var(--color-gray);
}
</style>