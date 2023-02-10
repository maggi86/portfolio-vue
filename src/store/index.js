import { createStore } from 'vuex'

export default createStore({
  state: {
    people:[
      {
        id:1,
        name: "Joel Mukanya",
        description: "It is a pleasure to work with Meagan. She is confident and open to suggestions. Meagan has the potential to become a great programmer.",
        title: "~ Coding Lecturer",
        image: `https://i.postimg.cc/1Xqq4J2C/joel2.jpg`
      },
      {
        id:2,
        name: "Bulelani skhikhi",
        description: "I've had the pleasure to see Meagan do her work, she is very determined and has an intoxicating energy she puts herself in her work and the environment around her. i would highly recommend her.",
        title: "~ Colleague",
        image: `https://i.postimg.cc/yxYGH3G8/Bulelani-2.jpg`
      },
      {
        id:3,
        name: "Michaela Tarryn Ward",
        description: "Meagan is a very well-mannered , smart young lady . Who always give her best and has the potential to be great.",
        title: "~ Colleague",
        image: `https://i.postimg.cc/k5yP8bk7/Micheala-2.jpg`
      },
      {
        id:4,
        name: "Abdus-Samad Charles",
        description: "Meagan is a reliable woman who is competent in all aspects of her work, she is always full of energy and is very hardworking.",
        title: "~ Colleague",
        image: `https://i.postimg.cc/PfvhVPDQ/Charles-5.jpg`
      },
      {
        id:5,
        name: "Liam Engel",
        description: "Meagan is someone who lights up the room with her personality and charisma. She is always willing to assist and always bring positivity to the mood, to have her in a company will be a win",
        title: "~~ Colleague",
        image:`https://i.postimg.cc/ZYvTvX57/Liam.png`
      },
      {
        id:6,
        name: "Ra'ees Benny",
        description: "Meagan is a great person to work with and be around with. When we were in a 4 person group she always brought the best out of all of us and that helped us finished the project. She is a great asset to have on a team and as a friend.",
        title: "~~ Colleague",
        image:`https://i.postimg.cc/FKdBWwX8/Raees-2.jpg`
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
      image:`https://i.postimg.cc/C1Xn4HS3/Screenshot-2022-05-11-115811.png`,
      name:"Swamp",
      github:"https://github.com/maggi86/nav-example",
      netlify:"https://swamp-stardust-fc706b.netlify.app/"
    },
    {
      id:2,
      image:`https://i.postimg.cc/cJKscqCJ/Screenshot-2022-07-21-101213.png`,
      name:"BMI Calculator",
      github:"https://github.com/maggi86/BMI-calculator",
      netlify:"https://graceful-crisp-3d45ef.netlify.app/"
    },
    {
      id:3,
      image:`https://i.postimg.cc/8z782RSK/Screenshot-2022-07-21-110835.png`,
      name:"Anime Boys Website",
      github:"https://github.com/maggi86/PropertyList",
      netlify:"https://property-anime-boys.netlify.app/"
    },
    {
      id:4,
      image:`https://i.postimg.cc/rmtgdMyk/Screenshot-2022-09-14-101905.png`,
      name:"M-Rings",
      github:"https://github.com/maggi86/caps-frontend",
      netlify:"https://m-jewels-324ec.web.app/"
    },
    {
      id:5,
      image:`https://i.postimg.cc/XJCdmDHj/Screenshot-2022-07-21-111110.png`,
      name:"Wig Nation",
      github:"https://github.com/maggi86/wigs",
      netlify:"https://wig-nation.netlify.app/"
    },
    {
      id:6,
      image:`https://i.postimg.cc/yxHngwYk/Screenshot-2022-07-21-161915.png`,
      name:"Hex to RGB",
      github:"https://github.com/maggi86/hextoRGB",
      netlify:"https://sweet-chaja-308937.netlify.app/"
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
