import { createStore } from 'vuex'

export default createStore({
  state: {
    people:[
      {
        id:1,
        name: "Brittany Bowers",
        description: "Meagan is a hard working individual with great work ethics. She is a team player but she also works well on her own. Meagan is always open to learning new programming languages and she takes her time to understand each concept and project given to her. She will be an asset any organization.",
        title: "~ Team Leader",
        image: ``
      },
      {
        id:2,
        name: "Bulelani skhikhi",
        description: "I've had the pleasure to see Meagan do her work, she is very determined and has an intoxicating energy she puts herself in her work and the environment around her. i would highly recommend her.",
        title: "~ Colleague",
        images: `https://i.postimg.cc/FHc17cS8/Bulelani-2-removebg-preview.png`,
        image: `https://i.postimg.cc/yxYGH3G8/Bulelani-2.jpg`
      },
      {
        id:3,
        name: "Michaela Tarryn Ward",
        description: "Meagan is an extremely well skilled, talented and  dedicated person. She has the ability to quickly  adapt to any  new environment. She always faces any challenges with the best of her abilities. Any company would be lucky to have her.",
        title: "~ Colleague",
        images: `https://i.postimg.cc/wxhWcbpj/Micheala-2-removebg-preview.png`,
        image: `https://i.postimg.cc/k5yP8bk7/Micheala-2.jpg`
      },
      {
        id:4,
        name: "Abdus-Samad Charles",
        description: "Meagan is a hard-working individual who accomplishes whatever she puts her mind to. She's very intuitive and loves expanding her knowledge on anything that interests her.",
        title: "~ Colleague",
        images: `https://i.postimg.cc/NfKKvZjg/Charles-5-removebg-preview.png`,
        image: `https://i.postimg.cc/PfvhVPDQ/Charles-5.jpg`
      },
      {
        id:5,
        name: "Daniel James Fredericks",
        description: "Meagan is smart, talented, creative and is a delight to work with. She is an absolute star in the workplace and has an amazing character. I believe that she has a bright future ahead of her and that she would be able to add value to any team that is lucky enough to have her be apart of",
        title: "~ Colleague",
        images: `https://i.postimg.cc/RV2NSGWw/Daniel-3-removebg-preview.png`,
        image:`https://i.postimg.cc/3NFSbSyv/Daniel-3.jpg`
      },
      {
        id:6,
        name: "Ra'ees Benny",
        description: "Meagan is a comfortable person to be around and to work with. We did a project together and while doing the project she always kept the mood alive. It is never boring when she is around. She is a hard-worker, has excellent front-end skills, good communication, and works well in a team. Meagan will be a great value to ant company or group you put her in.",
        title: "~ Colleague",
        images: `https://i.postimg.cc/nrY0FMkD/Raees-2-removebg-preview.png`,
        image:`https://i.postimg.cc/FKdBWwX8/Raees-2.jpg`
      },
      {
        id:7,
        name: "Ricardo Ronan Moses",
        description: "Meagan is a great listener and is always present and focused. Her style of design is unique and she adapts very well. The ability that she has to persevere is one of her stand out qualities and it is something that i really respect about her character",
        title: "~ Colleague",
        images: `https://i.postimg.cc/0jqV17pv/Ricardo-1-removebg-preview.png`,
        image: `https://i.postimg.cc/9Mk4GCX8/Ricardo-2-1-300x300.jpg`
      }
    ],
    resume: {
      resume1:[
        {
          id: 1,
          date: "January 2023 - Current",
          title: "Tenacious Digital",
          description: "Doing a learning journey and doing pair-programming with junior developers"
        },
        {
          id: 2,
          date: "September 2022 - Current",
          title: "LC Studio.",
          description: "Work as an intern where I up-skill my coding abilities"
        },
        {
          id: 3,
          date: "2020 - 2021",
          title: "Oude Molen Academy of Science and Technology.",
          description: "I studied Automotive Engineering for two years in High School."
        },
        {
          id: 4,
          date: "2019 - 2020",
          title: "Oude Molen Academy of Science and Technology.",
          description: "I studied Mechanical Engineering for a year in High School."
        },
        {
          id: 5,
          date: "2009 - 2016",
          title: "Arcadia Primary School.",
          description: "I attended primary school in Bonteheuwel."
        }
       
      ],
      
      resume2:[
        {
          id: 1,
          date: "January 2023 - current",
          title: "Ignite Event Services.",
          description: "I worked as a waiter at a Catering Company"
        },
        {
          id: 2,
          date: "March 2022 - September 2022",
          title: "Life Choices Academy of Coding.",
          description: "Where I started learning coding and Web Development."
        },
        {
          id: 3,
          date: "2019-2021",
          title: "Oude Molen Academy of Science and Technology.",
          description: "I studied Engineering Graphics and Design( EGD ) in High school."
        },
        {  
          id: 4,
          date: "2017 - 2021",
          title: "Oude Molen Academy of Science and Technology.",
          description: "Studied at High School in Pinelands and passed with a Bachalor's pass"
        }
       
      ],
    },
   project:[
    {
      id:1,
      image2: `https://i.postimg.cc/jjTHG39Q/Screenshot-20230212-173137-Chrome.jpg`,
      image:`https://i.postimg.cc/Y93MbTHG/Screenshot-5.png`,
      name:"Anime Boys Website",
      github:"https://github.com/maggi86/PropertyList",
      netlify:"https://property-anime-boys.netlify.app/"
    },
    {
     id:2,
     image2: `https://i.postimg.cc/Kvdr58DW/Screenshot-20230212-173530-Chrome.jpg`,
     image:`https://i.postimg.cc/1X7PZ64y/Screenshot-4.png`,
     name:"BMI Calculator",
     github:"https://github.com/maggi86/BMI-calculator",
     netlify:"https://graceful-crisp-3d45ef.netlify.app/"
    },
    {
      id:3,
      image2: `https://i.postimg.cc/7LN3DMrv/Screenshot-20230212-173156-Chrome.jpg`,
      image:`https://i.postimg.cc/7h692y6x/Screenshot-6.png`,
      name:"M-Rings",
      github:"https://github.com/maggi86/caps-frontend",
      netlify:"https://m-jewels-324ec.web.app/"
    },
    {
      id:4,
      image2: `https://i.postimg.cc/nzcvLjnX/Screenshot-20230212-173516-Chrome.jpg`,
      image:`https://i.postimg.cc/dQ5JdM6g/Screenshot-3.png`,
      name:"Swamp",
      github:"https://github.com/maggi86/nav-example",
      netlify:"https://swamp-stardust-fc706b.netlify.app/"
    },
    {
      id:5,
      image2: `https://i.postimg.cc/bY5QzwWv/Screenshot-20230212-175245-Chrome.jpg`,
      image:`https://i.postimg.cc/XJCdmDHj/Screenshot-2022-07-21-111110.png`,
      name:"Wig Nation",
      github:"https://github.com/maggi86/wigs",
      netlify:"https://wig-nation.netlify.app/"
    },
    {
      id:6,
      image2: `https://i.postimg.cc/T3gjNvk3/Screenshot-20230212-173054-Chrome.jpg`,
      image:`https://i.postimg.cc/wMGV5byD/Screenshot-1.png`,
      name:"Vue Portfolio",
      github:"https://github.com/maggi86/Vue-portfolio",
      netlify:"https://vue-portfolio-c05bf.web.app/"
    },
    {
      id:7,
      image2: `https://i.postimg.cc/fT0YkhQf/Screenshot-20230212-174012-Chrome.jpg`,
      image:`https://i.postimg.cc/44LBTnLn/Screenshot-7.png`,
      name:"Hex to RGB",
      github:"https://github.com/maggi86/hextoRGB",
      netlify:"https://sweet-chaja-308937.netlify.app/"
    },
    {
      id:8,
      image2: `https://i.postimg.cc/RFFHBkTf/Screenshot-20230212-174209-Chrome.jpg`,
      image:`https://i.postimg.cc/tCsDRywk/Screenshot-2.png`,
      name:"RM-hoodies",
      github:"https://github.com/maggi86/rm-hoodies",
      netlify:"https://vue-rm-hoodies.web.app/"
    }
   ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
