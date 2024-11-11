import { FaGithub, FaLinkedin, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { useEffect, useRef, useState } from 'react';
import toast from "react-hot-toast";
import emailjs from '@emailjs/browser';
import Typed from 'typed.js';
import webImage from './assets/webDeveloper.png';

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
            Full Stack Developer with hands-on experience in building and maintaining robust web applications...
          </p>

          <div className="btn-box">
            <a href={mailId} target="_blank" className="btn" rel="noreferrer">Hire Me</a>
            <a href={mailId} target="_blank" className="btn" rel="noreferrer">Let's Talk</a>
          </div>
          <div className="home-social">
            <a href="#github"><FaGithub className="bx bxl-github" /></a>
            <a href="#linkedin"><FaLinkedin className="bx bxl-linkedin-square" /></a>
            <a href="#twitter"><FaTwitter className="bx bxl-twitter" /></a>
            <a href="#facebook"><FaFacebookF className="bx bxl-facebook" /></a>
            <a href="#instagram"><FaInstagram className="bx bxl-instagram" /></a>
          </div>
        </div>
        <img className="home-imgHover" src={webImage} alt="dev-image" />
      </section>

      {/* Other Sections (About, Skills, Projects, Contact) */}
      <section class="about" id="about">
           <h2 class="heading">About <span>Me</span>
           </h2>

          <div class="about-img">
               <img src={webImage} alt="dev-image"/><span class="circle-spin"></span>
           </div>

           <div class="about-content">
               <h3>Frontend Developer</h3>
               <p>I'm a passionate Full Stack Developer with a deep interest in building efficient, user-friendly applications
                 that solve real-world problems. With a strong foundation in both frontend and backend development, 
                 I enjoy creating seamless experiences by bridging the gap between design and functionality. 
                 Proficient in technologies like JavaScript, React, Node.js, and various databases, 
                 I’m dedicated to writing clean, maintainable code and continuously refining my skills. 
                 I thrive in collaborative environments and am always excited to explore new tools and technologies
                 to enhance my development process and deliver impactful solutions.
               </p>
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
                               <h3>MERN Stack <span>80%</span></h3>
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
                               <h3>Web Design and Development<span>90%</span></h3>
                               <div class="bar"><span></span></div>
                           </div>
                           <div class="progress">
                               <h3>Graphic Design <span>80%</span></h3>
                               <div class="bar"><span></span></div>
                           </div>
                           <div class="progress">
                               <h3>MS Word, MS PP, and MS Excel <span>80%</span></h3>
                               <div class="bar"><span></span></div>
                           </div>
                           <div class="progress">
                               <h3>AutoCADD <span>90%</span></h3>
                               <div class="bar"><span></span></div>
                           </div>
                           <div class="progress">
                               <h3>Revit Architecture <span>70%</span></h3>
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
                   <img src={webImage} alt="Project-1"/> 
                   <div class="project-info">
                       <h3>Your Dream job</h3>
                       <p>Search For a Job.</p>
                       <a href="https://find-your-dream-job.vercel.app" target="_blank" class="btn" rel="noreferrer">View Project</a>
                   </div>
               </div>
               <div class="project-card">
                   <img src={webImage} alt="Project-2"/> 
                   <div class="project-info">
                       <h3>E-Commerce</h3>
                       <p>Shopping Made you.</p>
                       <a href="https://e-commerce-gray-one-22.vercel.app" target="_blank" class="btn" rel="noreferrer">View Project</a>
                   </div>
               </div>
               <div class="project-card">
                   <img src={webImage} alt="Project-3"/>
                   <div class="project-info">
                       <h3>Food Munch</h3>
                       <p>Explore the menu and order the food.</p>
                       <a href="https://food-munch-restaurant.vercel.app" target="_blank" class="btn" rel="noreferrer">View Project</a>
                   </div>
               </div>
               <div class="project-card">
                   <img src={webImage} alt="Project-4"/>
                   <div class="project-info">
                       <h3>IPL Statistics</h3>
                       <p>Check the Team Statistics.</p>
                       <a href="https://ipl-statistics-three.vercel.app" target="_blank" class="btn" rel="noreferrer">View Project</a>
                   </div>
               </div>
               <div class="project-card">
                   <img src={webImage} alt="Project-5"/>
                   <div class="project-info">
                       <h3>IPLTube</h3>
                       <p>This Wesite is similar to the YouTube but it is made for IPL.</p>
                       <a href="https://ipl-tube-ibhub.vercel.app" target="_blank" class="btn" rel="noreferrer">View Project</a>
                   </div>
               </div>
               <div class="project-card">
                   <img src={webImage} alt="Project-6"/>
                   <div class="project-info">
                       <h3>Files Manager</h3>
                       <p>Save Your Files like Password, Contacts, Notes, and Todos.</p>
                       <a href="https://my-files-manager.vercel.app" target="_blank" class="btn" rel="noreferrer">View Project</a>
                   </div>
               </div>
           </div>
           </div>
      </section>


  

      {/* <!-- Contact Section Design  --> */}
      <section class="contact" id="contact">
           <h2 class="heading">Contact <span>Me!</span></h2>
           <form ref={form} onSubmit={sendEmail}>
               <div class="input-box">
                   <div class="input-field">
                       <input type="text" name='from_name' placeholder="Your Name"
                        value={name} onChange={(e) => setName(e.target.value)} required/>
                       <span class="focus"></span>
                   </div>
                   <div class="input-field">
                       <input type="text" name='from_email' placeholder="Your Email"
                        value={email} onChange={(e) => setEmail(e.target.value)} 
                        required/>
                       <span class="focus"></span>
                   </div>
               </div>

               <div class="textarea-field">
                   <textarea name="message" id="" cols="30" rows="10"  placeholder="Your Message"
                   value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                   <span class="focus"></span>
               </div>
               <div class="btn-box btns">
                   <button class="btn" type="submit" value="Send">
                       Send Message
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
