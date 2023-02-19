import React from 'react';
import { Link } from 'react-router-dom';
import './css/About.css';
import Theater from './subcomponents/Theater';
import Card from './subcomponents/Card';

class About extends React.Component {
  /**
   * About - About page
   * This component doesn't require any props to be passed down.
   * Using different components, about is a page that displays about information.
   */
  componentDidMount () {
    document.title = "About";
  }

  render() {
    return (
      <div className="About">

        <Theater title="About" description="This page has information about me and about this site." extraClasses="h-50v" background="/img/sunset.webp"/>

        <Card title="Build with React" image="/img/react.webp">
          This website is created with <a href="https://reactjs.org/">React</a>, a javascript library for creating user interfaces and webapps.
          React uses a component based design to help developers create easily re-usable code, and to help streamline the development process.
          JSX is a part of react which makes it easy to design websites directly in javascript code.
        </Card>

        <Card title="Camerin Figueroa" image="/img/profile.webp">
          You can find a few of my projects on my
          <a href="https://github.com/RaspberryProgramming" target="_blank" rel="noreferrer"> Github</a> or look through a list of projects on this website
          at the <Link to="/github"> Github Page</Link>. You can email me at <a href="mailto:cam@camscode.com">cam@camscode.com</a>. You can also find more
          social media below, just click the image and it'll bring you to the selected website.
        </Card>

        <Card
          title="CTECH - Networking"
          image="https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Marist_College_Seal_-_Vector.svg/1200px-Marist_College_Seal_-_Vector.svg.png"
          skills={["CCNA1/2", "Cisco IOS", "Linux", "Python", "Cyber Security", "IPv4", "IPv6", "Subnetting", "Make Cat5e Cable", "Configure Static Routing", "Configure Dynamic Routing", "Configure DHCP"]}>
          During highschool, I had the ability to take classes at CTECH. I took the networking class that not only allowed me to learn about the in class material, but also
          enabled me to learn outside of what I would normally have. We took the CCNA1 and CCNA2 courses which taught me a lot about cisco networking devices, as
          well as the Cisco IOS Operating System. I was also able to take part in a few different competitions such as the <a href="/pdf/Results_2017_NetRiders_USCAN_CCENT_R2.pdf">Cisco Netriders (Discontinued) competition</a>,
          AFA run <a href="https://www.chroniclenewspaper.com/news/local-news/they-really-get-it-EACN20160330160339989">Cyber Patriot competition</a>,
          and the <a href="https://www.facebook.com/photo.php?fbid=1665025620193621&id=115443158485216&set=a.387319137964282&refid=13">Skills USA compeition</a>.
          After highschool I had also <a href="https://www.recordonline.com/story/news/local/2018/02/15/local-students-finish-strong-in/14794857007/">mentored </a>
          for a few separate competitions at CTECH.
        </Card>

        <Card
          title="Orange County Community College - Computer Science"
          image="https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Marist_College_Seal_-_Vector.svg/1200px-Marist_College_Seal_-_Vector.svg.png"
          skills={["C++", "Java", "React", "Javascript", "Assembly", "Data Structors & Algorithms"]}>
          Taking classes at OCCC helped shape my career. While at OCCC, I took classes where I learned C++, Java, Data Structors, Assembly and more.
          I also took part in the Computer Science Club, Outdoors Club, and various other activities.
        </Card>

        <Card
          title="Marist College Experience - Computer Science"
          image="https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Marist_College_Seal_-_Vector.svg/1200px-Marist_College_Seal_-_Vector.svg.png"
          skills={["PHP", "Haskell", "Git", "Data Structors & Algorithms", "Arduino", "Robotics", "Docker", "Typescript", "6502 Assembly"]}>
          Throughout my college experience I've been able to improve my understanding of how computers work and how to design different software.
          I have completed my A.S. degree from Orange County Community College in Computer Science. I had finished my Bachelors degree in computer 
          science at Marist College in Poughkeepsie in May of 2022. While at Marist I was able to work with others in
          teams on a few projects. A few notable projects I worked in <a href="https://github.com/McDaPick/SpicyArduino-412">CMPT412</a>, 
          <a href="https://github.com/RaspberryProgramming/gchs-codebase"> Capstone Project</a>,
          <a href="https://github.com/RaspberryProgramming/422-tsiraM"> CMPT422</a>,
           and <a href="https://github.com/RaspberryProgramming/T3-Project">CMPT221L</a>.
        </Card>

        <Card
          title="TRMI (Current Employer)"
          image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAkFBMVEX///+foaQAbLYAYrGex+Nyq9aanJ8AZLK3uLqhoqX29/amqKsAZrMAarX5/P3HyMqvsbTt7e4xhMLT1dZMlsvo8fgZd7zk5OWUv+DO4/FCjcdens8AWKxrpdPa29yztLeZxeKw0Oi/wcO71+uOu96Ctdrd6/URdLrv9vs2iMV4sNfR5fIAXq/B2+0Ydruy0ug2notqAAAEvElEQVR4nO2baXeyOhRGGRQcCIpTiyNqa21r2///7y5TQiYVffVq1nr2N8kBsw1mIAfLAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKA2nWWrYrXMDkWrYV7S6uURm1UV0Ht5YFWvIhy22hVebhZ5uVmn3cpD+nYV0O9FD6zsFUQrz7Mr9IJchOd1lw+s7sVEXV6vhmCmaJBhR/KrI5gGGWMY9aSq1xTshw+s9CUM5QasJ2hOE7ZsmZqCmwdW+hJW1wquHljpS7hW0O52HljrC4AgBJ8cCNYTDBtJ4zRJnMXFJ8KSdTyurvjDRyZ/mqrvhIitxV8/Wd9YcOwc/NPMF1ncYn48wg2cySymV5zNhaLYUhjxEfOpxV//MKEzrVsJTohzGreZxTXdEyGEBG7wVl5RjHRnit824L/SHQlnBYNnFMwl3bVOkBC5CcNPX7i8KYJOMNlrBFMBaXbfkMtNEXT8tU7Qcdf891nhwBeLzRF037WC/lRowoYvnXVvQcdlHVoQsK8NAqkXZdUmfsD1gdkH+gv5YlWra/FNOJ4EYum9BcM1NybNyl+XfLxyR2O+AmQiDYKvI1pjWZCKB4N99X3vcum9BQUSZqEs+2kF/E/lLGooCZIP5vDGYse/hJY+QvCVCY7lIrUC1c/iawX9xWdpTvtXi79/30t/AwRj/S3qvrMRnTVhTOiR2bdjjOC69JAFm9aU3a27InRGGzCId08rqJz1Re9JRXBL+59iqLG+WQM203Z/VsFQZN+gHaI0DmZSM6EJwxH96OyeVpB8TEUm9I9GZ528IPefS0v+6JDpfllPK5hWIZ0QVLBhnhyaYmR+W7LTgh8rnJbdbd6rPq+gHhI0Q43g+LcaJP/KtiZ+YhknSAZrObLoWOggSUiDDot+vsQ1TdAZvGoF2eKBsMlZseowTDCt2eFNJ6isHuga/2kFiSvAOhkn+B3rBK2RaEg72ysE7XyDennvYWImwoYJx020gj/i+shfWFcKekXNh6Lg5saCympi36Qt5H9pBav5WS7wMb5aML9DrVYp2C0aNGrLhreei+4H+uUSE9yx7sVh053LBb3CK9vYLgVL4aUtZCrQhr6dIPuTHROsFrn84ve8oMdhd1flxu3QY4L9wiTadNt87P8vuK8eU7gNevCsYPTCEbGjbZvdomUTpmOREHsiG+hOguy6/AOos4JawrTTZIK2fWlm070E6bNeks5I/0mw00r/bpWgd6nhG90gcBRBde+AMZ0Luwx0b2K+qELWh/zZ3XxUHYpd9/TehIaXfNDjWtCzh8ejNXzTLZ6G+lxC2f1hbGlRsU9Ed5cS7pl9WD6C4363/bndJVWvZ+fdJSeYpcUsTcmLkRH6jeVm07fL0UAQzPLTNpueEGyIcd+TYAOdIJgpirSN3eE9InjBVO2pgOCxYlMyndRctZqCpuSqqdmGNQVNyTZU80VrCZqTL6pm/NYTNKUBLTVnu4agUTnbStb9WUHTsu7l9ybo6xNUUCkx7r0J6c0X+gJM8ebLRi0x780XAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEbzH2yahtDw6DjLAAAAAElFTkSuQmCC"
          skills={["C#", ".Net Framework", "Windows Forms", "Windows Services", "Microsoft IIS", "ASP.NET MVC", "Entity Framework", "MSSQL", "Microsoft Message Queuing", "Angular", "Typescript", "Oracle Database", "Credit Payment API's", "Documentation", "Deployments"]}>
            Working as a Full Stack Software Developer at a toll collection systems company. Here I work as a Full Stack Software Developer on the company's
            management software, as well as their payment software. In addition, I help support some of the older systems that are under maintenence. This has
            exposed me to all sorts of current and legacy software designs. I've worked on a variety of components of the software including our web front end,
            ASP.NET APIs, Windows Services Written in C#, create and debug Oracle Database Procedures & Packages. I've had to opportunity to train new employees
            and get them up to speed so they can develop software.
        </Card>

        <Card
            title="Github"
            link="/github"
            skills={["Tensorflow", "Redis", "React", "Python", "Raspberry Pi", "Linux"]}>
            <p>You can access a list of github repositories that I've created directly on this site.</p>
            <Link className='btn' to='/github'>Learn More</Link>
            <br/>
        </Card>



        <div className="social">

          <div className="title">
            Social Media:
          </div>

          <div className="links">

            <a href="https://github.com/RaspberryProgramming" target="_blank" rel="noreferrer" className="link bg-white">
              <img src="/img/github.webp" alt="Github"/>
            </a>

            <a href="https://www.linkedin.com/in/camerin-figueroa-2662bb157/" target="_blank" rel="noreferrer" className="link bg-white">
              <img src="/img/linkedin.webp" alt="LinkedIn"/>
            </a>

            <a href="https://www.hackerrank.com/figueroa0609" target="_blank" rel="noreferrer" className="link bg-hackerrank ">
              <img src="/img/hackerrank.webp" alt="Hacker Rank"/>
            </a>
            <a href="https://app.hackthebox.eu/profile/734741" target="_blank" rel="noreferrer" className="link bg-white">
              <img src="/img/hackthebox.webp" alt="Hack The Box"/>
            </a>
            <a href="https://www.udemy.com/user/camerin-figueroa/" target="_blank" rel="noreferrer" className="link bg-white">
              <img src="/img/udemy.webp" alt="Udemy"/>
            </a>
            <a href="https://leetcode.com/RaspberryProgramming/" target="_blank" rel="noreferrer" className="link bg-black">
              <img src="/img/leetcode_logo.webp" alt="leet code"/>
            </a>
          </div>

        </div>

      </div>
    );
  }
}

export default About;