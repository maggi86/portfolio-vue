<template>
    <div class="contact">
        <div class="card mx-auto">
        <div class="container">
            <div class="row">
                    <div class="col mt-3">
                        <h2>Contact Details</h2>
                        <div class="row mt-4">
                            <h3>
                                Phone:
                            </h3>
                            <h5 class="ms-3">
                                + 27 81 496 3622
                            </h5>
                        </div>
                        <div class="row mt-3">
                            <h3>
                                CV:
                            </h3>
                            <a class="ms-3"
                            href="https://drive.google.com/uc?export=download&id=1fyfdg9sg9hOnubwN9wKrxpiGA3ZgH4Er" 
                            height="50px" 
                            with="60px" 
                            download>Download CV
                        </a>
                        </div>
                        <div class="row mt-3">
                            <h3>
                                Email:
                            </h3>
                            <h5 class="ms-3">
                                meaganwilliams407@gmail.com
                            </h5>
                        </div>
                        <div class="row mt-3">
                            <h3>
                                Socials:
                            </h3>
                            <div class="row mx-auto" id="socials">
                                <a href="https://github.com/maggi86">
                                    <img src="https://i.postimg.cc/MGfVx0BP/211904-social-github-icon.png">
                                </a>
                                <a href="https://www.linkedin.com/in/meagan-williams-087920238/">
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
                                Fullname:
                            </label>
                            <input type="text" name="name" placeholder="eg: Jane Doe" required/>
                        </div>
                        <div class="row">
                            <label class="pt-3">
                                Email:
                            </label>
                            <input type="email" name="email" placeholder="eg: janedoe@gmail.com" required/>
                        </div>
                        <div class="row">
                            <label class="pt-3">
                                Message:
                            </label>
                            <textarea type="text" name="message" placeholder="Oh My Word your portfolio is amazing"></textarea>
                        </div>
                        <div class="row m-5">
                            <button type="submit">send</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.contact{
   position:relative;
    bottom:0
}
.vr{
    width:2px;
    height:300px;
    padding:0px;
}
.card{
    height:700px;
    width:100%;
}
#socials{
    width:200px;
}
img{
    height:50px;
    width:50px;
}
</style>