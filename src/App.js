import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { useEffect, useRef, useState } from 'react';
import toast from "react-hot-toast";
import emailjs from '@emailjs/browser';
import Typed from 'typed.js';
import webImage from './assets/developer.jpg';
import aboutImg from './assets/dev.svg';
import shop from './assets/shop.jpg';
import job from './assets/job.jpg';
import utube from './assets/utube.jpg';
import './App.css';

const Mail = `GTvVlcSHwsJSnqhqBDnFvscjmpqvfgXXKzxlcNCbtvwtdXpDnJqbZHxcKCnrDRJBbzhWlBHxVnvrV`
const mailId = `https://mail.google.com/mail/u/0/?tab=rm#inbox?compose=${Mail}`
function App() {
  const menuIconRef = useRef(null);
  const navbarRef = useRef(null);
  const form = useRef();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  // Toggle Navbar
  useEffect(() => {
    const handleMenuClick = () => {
      menuIconRef.current.classList.toggle('bx-x');
      navbarRef.current.classList.toggle('active');
    };

    const menuIcon = menuIconRef.current;
    menuIcon.addEventListener('click', handleMenuClick);

    return () => {
      menuIcon.removeEventListener('click', handleMenuClick);
    };
  }, []);

  // Section Scroll & Active Navbar Link
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('header nav a');

      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => link.classList.remove('active'));
          document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
          sec.classList.add('show-animate');
        } else {
          sec.classList.remove('show-animate');
        }
      });

      // Sticky header
      const header = document.querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 100);

      // Remove toggle icon and navbar on scroll
      if (menuIconRef.current) menuIconRef.current.classList.remove('bx-x');
      if (navbarRef.current) navbarRef.current.classList.remove('active');
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Typed.js Effect
  useEffect(() => {
    const typed = new Typed('#element', {
      strings: ['Full-Stack Developer', 'Video Editor', 'Web Designer'],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  // User sending a email
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm('service_88l1cbf', 'template_nlwk6u8', form.current, {
        publicKey: 'GqiYawPEL-eYxqHN7',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      setName('');
      setEmail('');
      setMessage('');
      toast.success("Message Sent Successfully");
      document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="header">
        <a href="#home" className="logo">Uzair.<span className="animate"></span></a>

        <div className="bx bx-menu" id="menu-icon" ref={menuIconRef}>
          <span className="animate"></span>
        </div>
        
        <nav className="navbar" ref={navbarRef}>
          <a href='#home' className="active">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <span className="active-nav"></span>
          <span className="animate"></span>
        </nav>
      </header>

      {/* <!-- Home Section --> */}
      <section className="home show-animate" id="home">
        <div className="home-content">
          <h1>Hi, I'm <span className="name-color"> Uzair
            </span> and I am a Passionate <span id="element"></span>
          </h1>
          <p>
            Full Stack Developer with hands-on experience in building and maintaining strong web applications...
          </p>

          <div className="btn-box">
            {/* <a href={mailId} target="_blank" className="btn" rel="noreferrer">Hire Me</a> */}
            <a href={mailId} target="_blank" className="btn" rel="noreferrer">Let's Talk</a>
          </div>
          <div className="home-social">
            <a href="https://www.linkedin.com/in/mohammed-uzair-mu/" target="_blank" rel="noreferrer" ><FaLinkedin className="bx bxl-linkedin-square" /></a>
            <a href="https://github.com/UzairMohammed7" target="_blank" rel="noreferrer"> <FaGithub className="bx bxl-github" /> </a>
            <a href="https://x.com/uzairmohammed71" target="_blank" rel="noreferrer"><FaTwitter className="bx bxl-twitter" /></a>
            <a href="https://www.instagram.com/uzair_mohammed_0_0/" target="_blank" rel="noreferrer"><FaInstagram className="bx bxl-instagram" /></a>
          </div>
        </div>
        <img className="home-imgHover" src={webImage} alt="dev-image" />
      </section>

      {/* Other Sections (About, Skills, Projects, Contact) */}
      <section class="about" id="about">
           <h2 class="heading">About <span>Me</span>
           </h2>

          <div class="about-img">
               <img src={aboutImg} alt="dev-image" className="aboutImg "/><span class="circle-spin"></span>
           </div>

           <div class="about-content">
               <h3>Frontend Developer</h3>
               <p>I'm a passionate Full Stack Developer with a deep interest in building efficient, user-friendly applications
                 that solve real-world problems. With a strong foundation in both frontend and backend development, 
                 Proficient in technologies like JavaScript, React, Node.js, and various databases, 
                 I’m dedicated to writing clean, maintainable code and continuously refining my skills. 
                 I do well while working in collaborative environments and am always excited to explore new tools and technologies
                 to enhance my development process and deliver impactful solutions.
               </p>
               <div class="project-info">
                 <a href="https://portfolio-vite-nine-pi.vercel.app" target="_blank" class="btn" rel="noreferrer">View More</a>
              </div>
           </div>
      </section>


      {/* <!-- Skills Section Design  --> */}
      <section class="skills" id="skills">
           <h2 class="heading">My <span>Skills</span></h2>

           <div class="skills-row">
               <div class="skills-column">
                   <h3 class="title">Coding Skills</h3>
                   <div class="skills-box">
                       <div class="skills-content">
                           <div class="progress">
                               <h3>HTML and CSS <span>90%</span></h3>
                               <div class="bar"><span></span></div>
                           </div>
                           <div class="progress">
                               <h3>JavaScript <span>80%</span></h3>
                               <div class="bar"><span></span></div>
                           </div>
                           <div class="progress">
                               <h3>MySQL <span>70%</span></h3>
                               <div class="bar"><span></span></div>
                           </div>
                           <div class="progress">
                               <h3>Python <span>70%</span></h3>
                               <div class="bar"><span></span></div>
                           </div>
                           <div class="progress">
                               <h3>MERN Stack (MongoDB, Express, React, Node) <span>80%</span></h3>
                               <div class="bar"><span></span></div>
                           </div>
                       </div>
                   </div>
               </div>

               <div class="skills-column">
                   <h3 class="title">Other Skills</h3>
                   <div class="skills-box">
                       <div class="skills-content">
                           <div class="progress">
                               <h3>Word Press<span>90%</span></h3>
                               <div class="bar"><span></span></div>
                           </div>
                           <div class="progress">
                               <h3>Graphic Design<span>80%</span></h3>
                               <div class="bar"><span></span></div>
                           </div>
                           <div class="progress">
                               <h3>MS Word, PowerPoint, and Excel<span>80%</span></h3>
                               <div class="bar"><span></span></div>
                           </div>
                           <div class="progress">
                               <h3>AutoCADD<span>90%</span></h3>
                               <div class="bar"><span></span></div>
                           </div>
                           <div class="progress">
                               <h3>Revit Architecture<span>70%</span></h3>
                               <div class="bar"><span></span></div>
                           </div>
                       </div>
                   </div>
               </div>
         </div>
      </section>


      {/* <!-- Projects Section Design  --> */}
      <section class="projects" id="projects">
         <div>
           <h1 class="section-heading">Projects</h1>
           <div class="projects-container">
               <div class="project-card">
                   <img src={shop} alt="Project-2"/> 
                   <div class="project-info">
                       <h3>E-Commerce</h3>
                       <p>"This e-commerce platform, built with Vite + React JS, allows users to browse and shop from a range of products with ease. 
                        It includes a secure sign-up process with email verification, ensuring a safe and reliable user experience. 
                        Users can explore categories, view product details, and manage their carts efficiently." <br /> <span>Note:- SignUp using your email</span></p>
                        <div className="technologies">
                          <h3>Technologies</h3>
                          <div>
                            <p>React.js</p>
                            <p>TailwindCSS</p>
                            <p>MongoDB</p>
                            <p>Node</p>
                            <p>Express</p>
                          </div>
                        </div>
                       <a href="https://e-commerce-gray-one-22.vercel.app" target="_blank" class="btn" rel="noreferrer">View Project</a>
                   </div>
               </div>
               <div class="project-card">
                   <img src={job} alt="Project-1"/> 
                   <div class="project-info">
                       <h3>Your Dream job</h3>
                       <p>"This is a job search application built with React JS, allowing users to explore and search for job opportunities. 
                        It provides an easy-to-navigate interface to filter job listings based on keywords, locations, and other relevant criteria, 
                        helping users find jobs that match their skills and preferences efficiently." <br /> <span>Note:- Username: rahul, Password: rahul@2021</span></p>
                        <div className="technologies">
                          <h3>Technologies</h3>
                          <div>
                            <p>React.js</p>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>MongoDB</p>
                            <p>NodeJS</p>
                            <p>ExpressJS</p>
                          </div>
                        </div>
                       <a href="https://find-your-dream-job.vercel.app" target="_blank" class="btn" rel="noreferrer">View Project</a>
                   </div>
               </div>          
               <div class="project-card">
                   <img src={utube} alt="Project-5"/>
                   <div class="project-info">
                       <h3>UTube</h3>
                       <p>"This video platform, inspired by YouTube, offers curated content across IPL insides, motivational videos, and games. 
                        Users can browse categories, watch videos, and enjoy content tailored to these specific interests, providing a focused and enjoyable viewing experience."
                        <br /> <span>Note:- Username: rahul, Password: rahul@2021</span></p>
                        <div className="technologies">
                          <h3>Technologies</h3>
                          <div>
                            <p>React.js</p>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>MongoDB</p>
                            <p>NodeJS</p>
                            <p>ExpressJS</p>
                          </div>
                        </div>
                       <a href="https://utube-ibhub.vercel.app" target="_blank" class="btn" rel="noreferrer">View Project</a>
                   </div>
               </div>            
           </div>
           <div class="project-info">
              <a href="https://portfolio-vite-nine-pi.vercel.app" target="_blank" class="btn" rel="noreferrer">More Projects</a>
           </div>
           </div>
      </section>



      {/* <!-- Contact Section Design  --> */}
      <section class="contact" id="contact">
           <h2 class="heading">Contact <span>Me!</span></h2>
           <form ref={form} onSubmit={sendEmail}>
               <div class="input-box">
                   <div class="input-field">
                       <input type="text" name='from_name' placeholder="Enter Your Name"
                        value={name} onChange={(e) => setName(e.target.value)} required/>
                       <span class="focus"></span>
                   </div>
                   <div class="input-field">
                       <input type="text" name='from_email' placeholder="Enter Your Email"
                        value={email} onChange={(e) => setEmail(e.target.value)} 
                        required/>
                       <span class="focus"></span>
                   </div>
               </div>

               <div class="textarea-field">
                   <textarea name="message" id="" cols="30" rows="10"  placeholder="I’d love to hear from you! Send Your thoughts..."
                   value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                   <span class="focus"></span>
               </div>
               <div class="btn-box btns">
                   <button class="btn" type="submit" value="Send">
                       Send
                   </button>
               </div>
           </form>
      </section>


      <footer className="footer-sec">
        <div className="footer-text">
          <p>Copyright &copy; 2024 by Uzair | All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
