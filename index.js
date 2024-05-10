//Create your own resume data in JSON format

let resume ={
    
    name: "ABITH AHMED",
    contact: {
    email: "abith2022@gmail.com",
    phone: "0505630322"
  },
  summary: "Manage accounts and perform bookkeeping.",
  experience: [
    {
      company: "GULF BAGEL FACTORY",
      position: "DATA ADMIN",
      startDate: "27-05-2022",
      endDate: "12-08-2024",
      achievements: [
        "Proven office and personnel management skills, with equual ability in lead and support roles"
      ]
    },
    
  ],
  education: [
    {
      school: "Prema mat hr sec school",
      degree: "B.COM.I.T",
      startDate: "09-01-2017",
      endDate: "05-11-2020"
    }
    
    
  ],
  skills: [
    "MS Office",
    "tally",
    "Javas cript",
    "HTML",
    "CSS",
    "React Native"
  ]
  

  }

for (let i in resume)
  {
      if(typeof(resume[i])==="string" || typeof(resume[i]==="number"))
          {
              console.log(i,resume[i])
          }
  }

for (let i = 0; i < resume.experience.length;i++) {
  console.log(`Company: ${resume.experience[i].company}`);
  console.log(`Position: ${resume.experience[i].position}`);
  console.log(`Start Date: ${resume.experience[i].startDate}`);
  console.log(`End Date: ${resume.experience[i].endDate}`);
  console.log(`Achievements:`);
}


//For above JSON,iterate over all for loops (for,for in,for of,for each)

let resumee ={
    name: "ABITH AHMED",
    contact: {
    email: "abith2022@gmail.com",
    phone: "0505630322"
  },
  summary: "Manage accounts and perform bookkeeping.",
  experience: [
    {
      company: "GULF BAGEL FACTORY",
      position: "DATA ADMIN",
      startDate: "27-05-2022",
      endDate: "12-08-2024",
      achievements: [
        "Proven office and personnel management skills, with equual ability in lead and support roles."
      ]
    },
    ]
    }

  education: [
    {
      school: "Prema mat hr sec schooll",
      degree: "B.com.I.T",
      startDate: "09-01-2017",
      endDate: "05-11-2020"
    }
  ],
  skills;[
    "MS Office",
    "tally",
    "JavaScript",
    "HTML",
    "CSS",
    
  ]


//for loop
for (let i = 0; i < resume.experience.length;i++) {
  console.log(`Company: ${resume.experience[i].company}`);
  console.log(`Position: ${resume.experience[i].position}`);
  console.log(`Start Date: ${resume.experience[i].startDate}`);
  console.log(`End Date: ${resume.experience[i].endDate}`);
  console.log(`Achievements:`);
} 
 
//forEach
Object.keys(resume).forEach((prop) => {
if (prop === "experience") {
  resume[prop].forEach((experience) => {
    console.log(`Name: ${resume.name}`);
    console.log(`Company: ${experience.company}`);
    console.log(`Position: ${experience.position}`);
    console.log(`Start Date: ${experience.startDate}`);
    console.log(`End Date: ${experience.endDate}`);
    console.log(`Achievements:`);
    experience.achievements.forEach((achievement) => {
      console.log(`  - ${achievement}`);
    });
  });
} else {
  console.log(`${prop}: ${JSON.stringify(resume[prop])}`);
}
});
  
//for in
for (let i in resume)
  {
      if(typeof(resume[i])==="string" || typeof(resume[i]==="number"))
          {
              console.log(i,resume[i])
          }
  }

  //for of
for (let prop of Object.keys(resume)) {
    if (prop === "experience") {
      for (let i = 0; i < resume[prop].length; i++) {
        console.log(`Name: ${resume.name}`);
        console.log(`Company: ${resume[prop][i].company}`);
        console.log(`Position: ${resume[prop][i].position}`);
        console.log(`Start Date: ${resume[prop][i].startDate}`);
        console.log(`End Date: ${resume[prop][i].endDate}`);
        console.log(`Achievements:`);
        for (let j = 0; j < resume[prop][i].achievements.length; j++) {
          console.log(`  - ${resume[prop][i].achievements[j]}`);
        }
      }
    } else {
      console.log(`${prop}: ${JSON.stringify(resume[prop])}`);
    }
    }