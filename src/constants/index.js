
//Services Img
import sImg1 from "/assets/services/01.svg"
import sImg2 from "/assets/services/02.svg";
import sImg3 from "/assets/services/03.svg";

// projectss //
//Web Design Images
import webImg1 from '/assets/projects/web/1.svg';
import webImg2 from "/assets/projects/web/2.svg";
import webImg3 from "/assets/projects/web/3.svg";
import webImg4 from "/assets/projects/web/4.svg";

//Video Edits Images
 import vImg1 from "/assets/projects/VedioImg/ishandocumentary.png"
 import vImg2 from "/assets/projects/VedioImg/singhinusavlog.png";
 import vImg3 from "/assets/projects/VedioImg/uabilityedit.png";

//Graphic Design Images
import thumbnail1 from '/assets/projects/Gd/thumbnail1.png';
import thumbnail3 from "/assets/projects/Gd/thumbnail3.png";
import thumbnail4 from "/assets/projects/Gd/thumbnail4.png";

//Testimonials Img
import tImg1 from "/assets/testimonilas/Ritesh_Agrawal.jpg";
import tImg2 from "/assets/testimonilas/kunalSha.webp";
import tImg3 from "/assets/testimonilas/kushal.jpg";
import tImg4 from "/assets/testimonilas/mehulmohan.jpeg";

//About Img
import AboutImg from "/assets/About.svg"

import logo from "/assets/Logo.svg"

export  const logo1 = logo ;

/////////////////////////// ---

export const navbarItems = [ "Home","Services","PortFolio","Testimonials","About us" ];


export const services = [
  {
    title: "Web Design & Development",
    description:
      "We create visually stunning and user-friendly websites that drive results, from landing pages and e-commerce platforms to complex web applications.",
    image: sImg1,
  },
  {
    title: "Graphic Design",
    description:
      "Our multi-talented designers craft impactful and visually captivating graphics that elevate your brand identity across all platforms.",
    image:  sImg3,
  },
  {
    title: "Social Media Management",
    description:
      "We help you build a strong online presence, engage your target audience, and achieve your social media marketing goals.",
    image: sImg2,
  },
 
];


export const webDevelopmentProjects = [
  {
    image: webImg1, // Replace with actual image URL
    Type: "web development",
    Name: "EatsEasy - Restaurant Ordering App",
    Description:
      "A sleek and user-friendly mobile app for ordering food from your favorite restaurants.",
  },
  {
    image: webImg2, // Replace with actual image URL
    Type: "web development",
    Name: "Bloom - Creative Portfolio Website",
    Description:
      "A visually stunning website for showcasing creative work with an interactive portfolio and contact form.",
  },
  {
    image: webImg3, // Replace with actual image URL
    Type: "web development",
    Name: " Gardening E-commerce Platform",
    Description:
      "An e-commerce platform for all your gardening needs, featuring a secure payment gateway and user-friendly navigation.",
  },
  {
    image: webImg4, // Replace with actual image URL
   Type: "web development",
   Name: "TechTrends - Tech News Blog",
   Description:
      "A modern and responsive blog site for the latest tech news and trends, with integrated social media sharing.",
  },
];

export const graphicDesignProjects = [
  {
    image: thumbnail1, // Replace with actual image URL
    Type: "graphic design",
    Name: "Ishan's Dr Strange thumbnail",
    Description:
      "A mystic fusion of creativity and mastery, showcasing the sorcerer of content's enchanting digital realm.",
  },
  {
    image: thumbnail3, 
    Type: "graphic design",
    Name: "Kushal's thumbnail",
    Description:
      "A jaw-dropping visual encapsulating amazement and intrigue, unraveling the astounding financial deception.",
  },
  {
    image: thumbnail4,
    Type: "graphic design",
    Name: "Kushal's thumbnail",
    Description:
      "A regal Shah Rukh Khan documentary thumbnail, adorned with a crown, cascading currency, and luxurious golden ambiance, celebrating the iconic King Khan.",
  },
];

export const videoEditingProjects = [
  {
    image: vImg1,
    Type: "video edit",
    Name: "Ishan's Documentary",
    Description:
      "Ishan's documentary where he shares the truth about Kota coaching industry. This edit includes cinematic cuts, dramatic music, well organized b-rolls and other assets.",
  },
  {
    image: vImg2,
    Type: "video edit",
    Name: "Harnoor's Vlog",
    Description:
      "Harnoor's vlog of exploring the 5 biggest amusement parks of Disney World. Edited with engaging sound design and bold typography.",
  },
  {
    image:  vImg3,
    Type: "video edit",
    Name: "UAbility's Video",
    Description:
      "UAbility’s video guides viewers through the process of starting an online business. Edited with clear and concise visually appealing graphics",
  },
];


export const testimonials = [
  {
    feedback:
      "This platform has revolutionized the way we manage our s. The user interface is incredibly intuitive and efficient.",
    name: "Ritesh Agarwal",
    title: "Founder of OYO Rooms",
    image: tImg1,
  },
  {
    feedback:
      "We've seen a significant increase in productivity since we started using this tool. Highly recommended for any startup.",
    name: "Kunal Kushva",
    title: "Founder of CRED",
    image: tImg2,
  },
  {
    feedback:
      "An indispensable tool for our business. The customer support is top-notch and always ready to help.",
    name: "Mehul Mohan",
    title: "Founder of Codemn",
    image: tImg4,
  },
  {
    feedback:
      "The features offered are exactly what we needed to streamline our operations. It's a game changer for us.",
    name: "Kushal Lodha",
    title: "Founder of KAGR | LinkedIn Top Voice",
    image: tImg3,
  },
];


export const aboutUs = [
  {
    image: AboutImg,
    name: "Nanda Kumar M ",
    skills: "Web Developer, Graphic Designer",
    order: " order-none lg:order-2 ",
    socials: [
      {
        platform: "Instagram",
        url: "https://www.instagram.com/neo",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
      }, // Replace with actual Instagram URL and logo URL
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/neo",
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg",
      }, // Replace with actual LinkedIn URL and logo URL
      {
        platform: "X",
        url: "https://www.x.com/neo",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAAAAABXZoBIAAAA/0lEQVR4AbXPIazCMACE4d+L2qoZFEGSIGcRc/gJJB5XMzGJmK9EN0HMi+qaibkKVF1txdQe4g0YzPK5yyWXHL9TaPNQ89LojH87N1rbJcXkMF4Fk31UMrf34hm14KUeoQxGArALHTMuQD2cAWQfJXOpgTbksGr9ng8qluShJTPhyCdx63POg7rEim95ZyR68I1ggQpnCEGwyPicw6hZtPEGmnhkycqOio1zm6XuFtyw5XDXfGvuau0dXHzJp8pfBPuhIXO9ZK5ILUCdSvLYMpc6ASBtl3EaC97I4KaFaOCaBE9Zn5jUsVqR2vcTJZO1DdbGoZryVp94Ka/mQfE7f2T3df0WBhLDAAAAAElFTkSuQmCC",
      }, // Replace with actual X (formerly Twitter) URL and logo URL
      {
        platform: "GitHub",
        url: "https://www.github.com/neo",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
      }, // Replace with actual GitHub URL and logo URL
    ],
  },
  {
    image: AboutImg,
    name: "Prathik H K",
    skills: "Web Developer, Video Editor",
    order: " order-none lg:order-1 ",
    socials: [
      {
        platform: "Instagram",
        url: "https://www.instagram.com/leo",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
      }, // Replace with actual Instagram URL and logo URL
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/leo",
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg",
      }, // Replace with actual LinkedIn URL and logo URL
      {
        platform: "X",
        url: "https://www.x.com/leo",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAAAAABXZoBIAAAA/0lEQVR4AbXPIazCMACE4d+L2qoZFEGSIGcRc/gJJB5XMzGJmK9EN0HMi+qaibkKVF1txdQe4g0YzPK5yyWXHL9TaPNQ89LojH87N1rbJcXkMF4Fk31UMrf34hm14KUeoQxGArALHTMuQD2cAWQfJXOpgTbksGr9ng8qluShJTPhyCdx63POg7rEim95ZyR68I1ggQpnCEGwyPicw6hZtPEGmnhkycqOio1zm6XuFtyw5XDXfGvuau0dXHzJp8pfBPuhIXO9ZK5ILUCdSvLYMpc6ASBtl3EaC97I4KaFaOCaBE9Zn5jUsVqR2vcTJZO1DdbGoZryVp94Ka/mQfE7f2T3df0WBhLDAAAAAElFTkSuQmCC",
      }, // Replace with actual X (formerly Twitter) URL and logo URL
      {
        platform: "GitHub",
        url: "https://www.github.com/leo",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
      }, // Replace with actual GitHub URL and logo URL
    ],
  },
  {
    image: AboutImg,
    name: "Tharun S",
    skills: "Web Developer, Content Writer",
    order: " order-none lg:order-3 ",
    socials: [
      {
        platform: "Instagram",
        url: "https://www.instagram.com/tio",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
      }, // Replace with actual Instagram URL and logo URL
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/tio",
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg",
      }, // Replace with actual LinkedIn URL and logo URL
      {
        platform: "X",
        url: "https://www.x.com/tio",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAAAAABXZoBIAAAA/0lEQVR4AbXPIazCMACE4d+L2qoZFEGSIGcRc/gJJB5XMzGJmK9EN0HMi+qaibkKVF1txdQe4g0YzPK5yyWXHL9TaPNQ89LojH87N1rbJcXkMF4Fk31UMrf34hm14KUeoQxGArALHTMuQD2cAWQfJXOpgTbksGr9ng8qluShJTPhyCdx63POg7rEim95ZyR68I1ggQpnCEGwyPicw6hZtPEGmnhkycqOio1zm6XuFtyw5XDXfGvuau0dXHzJp8pfBPuhIXO9ZK5ILUCdSvLYMpc6ASBtl3EaC97I4KaFaOCaBE9Zn5jUsVqR2vcTJZO1DdbGoZryVp94Ka/mQfE7f2T3df0WBhLDAAAAAElFTkSuQmCC",
      }, // Replace with actual X (formerly Twitter) URL and logo URL
      {
        platform: "GitHub",
        url: "https://www.github.com/tio",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
      },
    ],
  },
  {
    image: AboutImg,
    name: "Darshan P",
    skills: "VideoEditor, Content Writer",
    order: " order-none lg:order-4 ",
    socials: [
      {
        platform: "Instagram",
        url: "https://www.instagram.com/tio",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
      }, // Replace with actual Instagram URL and logo URL
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/tio",
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg",
      }, // Replace with actual LinkedIn URL and logo URL
      {
        platform: "X",
        url: "https://www.x.com/tio",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAAAAABXZoBIAAAA/0lEQVR4AbXPIazCMACE4d+L2qoZFEGSIGcRc/gJJB5XMzGJmK9EN0HMi+qaibkKVF1txdQe4g0YzPK5yyWXHL9TaPNQ89LojH87N1rbJcXkMF4Fk31UMrf34hm14KUeoQxGArALHTMuQD2cAWQfJXOpgTbksGr9ng8qluShJTPhyCdx63POg7rEim95ZyR68I1ggQpnCEGwyPicw6hZtPEGmnhkycqOio1zm6XuFtyw5XDXfGvuau0dXHzJp8pfBPuhIXO9ZK5ILUCdSvLYMpc6ASBtl3EaC97I4KaFaOCaBE9Zn5jUsVqR2vcTJZO1DdbGoZryVp94Ka/mQfE7f2T3df0WBhLDAAAAAElFTkSuQmCC",
      }, // Replace with actual X (formerly Twitter) URL and logo URL
      {
        platform: "GitHub",
        url: "https://www.github.com/tio",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
      },
    ],
  },
];
