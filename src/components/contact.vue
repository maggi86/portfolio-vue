<template>
    <div id="contact" class="contact">
        <div class="card mx-auto">
            <hr class="mx-auto"/>
            <h2 class="mx-auto mt-2 mb-2 d-flex justify-content-center">Contact Details</h2>
            <hr class="mx-auto mt-3"/>
            <div class="container">
                <div class="row">
                    <div class="col mt-3" id="info">
                        <div class="row mt-4">
                            <h4>
                                Phone:
                            </h4>
                            <h5 class="ms-3">
                                + 27 81 496 3622
                            </h5>
                        </div>
                        <div class="row mt-3">
                            <h4>
                                CV:
                            </h4>
                            <a class="ms-3"
                            href="https://www.canva.com/design/DAFfJPLXQ2k/zl0sCvcWJ-OANRSRVWy1_A/edit?utm_content=DAFfJPLXQ2k&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" 
                            height="50px" 
                            with="60px" 
                            download>Download CV
                        </a>
                        </div>
                        <div class="row mt-3">
                            <h4>
                                Email:
                            </h4>
                            <h5 class="ms-3">
                                meaganwilliams407@gmail.com
                            </h5>
                        </div>
                        <div class="row mt-3">
                            <h4>
                                Socials:
                            </h4>
                            <div class="col mx-auto mx-2" id="socials">
                                <a class="mx-2" href="https://github.com/maggi86">
                                    <img src="https://i.postimg.cc/MGfVx0BP/211904-social-github-icon.png">
                                </a>
                                <a class="mx-2" href="https://www.linkedin.com/in/meagan-williams-087920238/">
                                    <img src="https://i.postimg.cc/FH7JgbTr/5282542-linkedin-network-social-network-linkedin-logo-icon.png">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="vr me-5 mt-5"></div>
                    <div class="col">
                        <form action="https://formspree.io/f/xoqzeokl"
                        method="POST">
                            <div class="row">
                                <label class="pt-3">
                                    Fullname:<span>Required</span>
                                </label>
                                <input type="text" name="name" placeholder="eg: Jane Doe" required/>
                            </div>
                            <div class="row">
                                <label class="pt-3">
                                    Email:<span>Required</span>
                                </label>
                                <input type="email" name="email" placeholder="eg: janedoe@gmail.com" required/>
                            </div>
                            <div class="row">
                                <label class="pt-3">
                                    Message:
                                </label>
                                <textarea type="text" name="message" placeholder="Oh My Word your portfolio is amazing"></textarea>
                            </div>
                            <div class="row mt-5 mx-auto d-flex justify-content-center">
                                <button type="submit">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
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

.contact{
   position:relative;
    bottom:0;
    background-color:black;
}
.vr{
    width:2px;
    height:300px;
    padding:0px;
    color:var(--color-gray)
}
hr{
  width:500px;
  height: 3px;
  background-color:var(--color-white);
}
.card{
    height:550px;
    width:100%;
    background-color: var(--color-black);
}
#col{
    background-color:var(--color-primary)
}
label{
    color:var(--color-white)
}
span{
    color:var(--color-gray);
    padding-left: 5px;
    font-size:14px;
    font-style: italic;
    /* padding-bottom:50px; */
}
h4{
    color: var(--color-white);
}
input{
    height:40px;
    width:100%;
    border-radius: 10px;
    border-color:black;
}
textarea{
    border-radius:10px;
    border-color:black;
}
#socials{
    width:200px;
}
button{
width:200px;
height:40px;
border-radius:50px;
font-size:20px;
font-weight:bold;
}
button:hover{
    -webkit-filter: invert(100%);
}
h2{
    color: white;
}
h5{
    font-weight:400;
    font-size:16px;
    color:var(--color-white)
}
a{
    color:var(--color-white)
}
img{
    height:40px;
    width:45px;
    filter:invert(70%)
}

@media screen and (max-width:550px){
    hr{
        width: 300px;
    }
}
@media screen and (max-width:770px){
    #info{
        margin-left:30px;
    }
    .vr{
        display:none
    }
    .card{
        height:900px;
    }
    input, textarea{
        width: 400px;
        margin:auto;
    }
    label{
        margin-left:30px;
    }
}
@media screen and (max-width:400px){
    input, textarea{
        width: 250px;
    }
}
</style>