<template>
    <div id="about">
        <div class="container pt-5 pb-5">
            <div class="card mt-5">
                <div class="row ms-5">
                    <div class="col ms-5 mt-4 pe-5 pb-5">
                        <h1>About Me</h1>
                        <p class="mt-4">
                            Dedicated, present, focused and intuitive, is how people would 
                            describe my personality.I am passionate and goal-driven about 
                            anything I set my mind to. My aspirations are to become an striving
                             frontend developer where my ideas and talent is recognized and seen.
                        </p>
                        <p class="pt-3">
                            Often I find myself baking and cooking as a break from reality. I 
                            enjoy doing practical work with my hands and listening to music as
                             an escape. Personally I see myself as a curious person so adventures
                            call my name, but I also believe that whatever is meant for me will 
                            find me.
                        </p>
                        
                    </div>
                    <div class="col" id="bg">
                        <!-- <img src="https://i.postimg.cc/3NBfKTF2/Meagan-2.jpg"> -->
                    </div>
                </div>
            </div>
            <div class="card mt-5">
                <div class="row">
                    <div class="col mx-auto p-5 s-5" id="img">
                        <!-- <img id="img" src="https://i.postimg.cc/gjCSNjFW/Fantasy-landscape-Landscape-Nature.jpg"> -->
                        <!-- <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ad ex quaerat eos sequi culpa, aliquid facere dicta dignissimos reprehenderit in. Explicabo ex, mollitia nam esse nostrum harum distinctio accusantium nulla iusto eveniet tenetur nisi. Pariatur nisi earum voluptatem optio cumque. Aliquam, ullam? Repudiandae, soluta? Accusantium officiis porro sit! Saepe temporibus praesentium tempore unde! Nam autem placeat architecto quae, quos perferendis nulla. Veritatis exercitationem ea debitis beatae itaque ad doloribus, maxime facere quis optio assumenda quibusdam aliquid voluptatum, sapiente libero ipsa sed deserunt dolorum? Dolorem incidunt deleniti quia placeat nisi consequuntur ut similique animi accusamus optio! Assumenda eaque quae natus?</p> -->
                    </div>
                    <div class="col mt-4">
                        <h1>Skill Section</h1>
                        <div class="row p-2">
                            <img class="m-2" src="https://i.postimg.cc/76v7LCMx/211925-social-wordpress-icon.png">
                            <img class="m-2" src="https://i.postimg.cc/Y91FLpbQ/367627-html-html5-icon.png">
                            <img class="m-2" src="https://i.postimg.cc/bNYndfb2/4691303-mysql-icon.png">
                        </div>
                        <div class="row p-2">
                            <img class="m-2" src="https://i.postimg.cc/GtdykZ5V/8546986-node-icon.png">
                            <img class="m-2" src="https://i.postimg.cc/7h9TXKv6/8666135-bootstrap-icon.png">
                            <img class="m-2" src="https://i.postimg.cc/4N8992b2/7422531-css3-css-file-development-icon.png">
                        </div>
                        <div class="row p-2">
                            <img class="m-2" src="https://i.postimg.cc/6QZ2FWsF/9035136-logo-vue-icon.png">
                            <img class="m-2" src="https://i.postimg.cc/fRpSH3Px/9035061-logo-javascript-icon.png">
                            <img class="m-2" src="https://i.postimg.cc/1ty1GBy4/8666252-elementor-icon.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


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

#about{
    /* margin-top:100px; */
    padding-bottom: 50px;
    background-color: var(--color-black);
}

#bg{
    background-image:
    linear-gradient(to left,  var(--color-black), rgba(128, 128, 128, 0),  var(--color-black)),
    url('https://i.postimg.cc/3NBfKTF2/Meagan-2.jpg');
    width: 80%;
    background-position: center;
    background-size: cover;
}
p{
    width:400px;
    color: var(--color-white);
}
h1{
    color:var(--color-dark);
    font-size: 50px;
}
/* .vl{
    margin-top: 60%;
    margin-left:7%;
    height:300px;
    width:3px;
    background-color: rgba(157, 157, 157, 0.559);
} */
p{
    font-size:17px;
}
/* hr{
    margin-left:20%;
    margin-top: 30%;;
    width:300px;
    padding-top:3px;
    background-color: aliceblue;
} */
#col{
    background-image:linear-gradient(to right,   var(--color-dark),  var(--color-dark),  var(--color-dark), var(--color-black));
    
}
.col{
    padding-left:50px;
    /* padding-right:10px; */
}
.card{
    background-color: rgba(237, 222, 222, 0);
    border-width:4px;
    border-color:grey;
    overflow: hidden;
    height:500px;
    /* margin-bottom:50px; */
}
#img{
    background-image:
    linear-gradient(to left,  var(--color-black), rgba(128, 128, 128, 0),  var(--color-black)),
    url('https://i.postimg.cc/gjCSNjFW/Fantasy-landscape-Landscape-Nature.jpg');
    height:550px;
    width:100%;
    -webkit-filter: invert(0%);
}
img{
    height:80px;
    width:110px;
    -webkit-filter: invert();
}
@media screen and (max-width: 1200px) {

    .card{
        width:auto;
        height:500px;
    }
}

@media screen and (max-width:992px){
    p{
        width:500px;
    }
}
</style>