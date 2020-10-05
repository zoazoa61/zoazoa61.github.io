import { Profiler } from "react";

export default
    {
        //(Please Do Not Remove The comma(,) after every variable)
        //Change The Website Template
        name :'JIHOON LEE',
        headerTagline: [//Line 1 For Header
                         "\" The Engineer Thinking Questions That Change The World\"",
                        "",
                        "- JIHOON\'s PORTFOLIO"
                        ],
        //Contact Email
        contactEmail:'zoazoa61@gmail.com',
        // Add Your About Text Here
        abouttext1: "Jan. 2019 ~ : Master's program in Electrical Engineering & Computer Science",
        abouttext2: "Mar. 2017 ~ Aug.2018: Supply Management Engineer in Amorepacific",
        abouttext3: "Mar. 2010 ~ Aug.2017: Bachelor of Mechanical Engineering",
        
        //aboutImage: ,
        //aboutImage:'https://images.unsplash.com/photo-1521587765099-8835e7201186?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
       //Change This To Hide The Image of About Section (True Or False)
       ShowAboutImage:true,//true or false (Change Here)
       // Change Projects Here 
       projects:[
            {
                id: 1,//DO NOT CHANGE THIS (Please)😅
                title:'Project One', //Project Title - Add Your Project Title Here
                service:'Smart Appliance Scheduling', // Add Your Service Type Here
                //Project Image - Add Your Project Image Here
                imageSrc:"https://www.ilovepc.co.kr/news/photo/202007/35501_71329_3619.jpg",
                //Project URL - Add Your Project Url Here
                url:'https://github.com/zoazoa61/Smart-Appliance-Scheduling-for-Energy-Prosumer-/'
            },
            {
                id: 2,//DO NOT CHANGE THIS (Please)😅
                title: 'Project Two',
                service: 'Use District Recommendation',
                imageSrc: "https://static.wixstatic.com/media/4b112c_38af35cc764748f6a2fa261c499305d1~mv2_d_2598_2126_s_2.jpg/v1/fill/w_712,h_583,al_c,q_90,usm_0.66_1.00_0.01/4b112c_38af35cc764748f6a2fa261c499305d1~mv2_d_2598_2126_s_2.webp",
                url: 'https://github.com/zoazoa61/Use-District-Recommendation/'
            },
            { 
                id: 3,//DO NOT CHANGE THIS (Please)😅
                title: 'Project Three',
                service: 'SRAM PUF Authentication',
                imageSrc: "http://www.ictk.co.kr/assets/img/fingerprint1.png",
                url: 'https://github.com/zoazoa61/SRAM-PUF-Authentication/'
            },
            {
                id: 4,//DO NOT CHANGE THIS (Please)😅
                title: 'Project Four',
                service: 'Real-Time Monitoring',
                imageSrc: "http://eskor.co.kr/wp-content/themes/one-paze/images/solution_2_05.png",
                url: 'https://github.com/zoazoa61/Real-Time-Monitoring/'
           }

                    /*

                    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
                ,{
                id: 5,
                title: 'Project Five',
                service: 'Something Amazing',
                imageSrc: "",
                url: ''
            }
                */
        ],
        social: [
            // Add Or Remove The Link Accordingly
            {   name:'Github',
                url:'https://github.com/zoazoa61'},
            {
                name: 'Facebook',
                url: 'https://www.facebook.com/zoazoa61'
            },
            {
                name: 'Instagram',
                url: 'https://www.instagram.com/alwaysforjay'
            }

        ]
    }