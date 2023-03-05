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

  printRef = null;

  constructor(props) {
    super(props);

    this.printRef = React.createRef();
  }

  componentDidMount () {
    document.title = "About";
  }

  printDiv(event) {

    let printContents = this.printRef.current.innerHTML;
    let originalContents = document.body.innerHTML;

    document.body.classList = ["Print", ...document.body.classList];
    document.body.innerHTML = printContents;
    window.print();

    document.body.classList.remove("Print");
    document.body.innerHTML = originalContents;
  }

  render() {
    return (
      <div ref={this.printRef} className="About">

        <div className="printShow center">
          <h1>Camerin Figueroa Portfolio</h1>
          <div>Contact Me: <a href="mailto:cam@camscode.com">cam@camscode.com</a></div>
        </div>

        <Theater title="About" description="This page has information about me and about this site." extraClasses="h-50v printHide" background="/img/sunset.webp"/>

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
          image="data:image/jpeg;base64,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"
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
          image="https://upload.wikimedia.org/wikipedia/en/3/36/Orange_County_Community_College_seal.jpg"
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
          title="Tutoring - Computer Science"
          image="/img/profile.webp"
          skills={["C++", "Java", "Web (HTML/CSS)", "Javascript", "Data Structors & Algorithms"]}>
          While taking classes at OCCC and Marist College, I took the opportunity to tutor fellow students through each schools tutoring centers.
          While at OCCC, I tutored in basic level courses and had some classes that I had familiarity with. I also took part in seminars for
          teaching to tutors necessary skills. At Marist College, I had also tutored in relevant classes. Tutoring helped me better understand the
          topics I was tasked with and better understand how to teach others skills that I have.
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
              <img className="printHide" src="/img/linkedin.webp" alt="LinkedIn"/>
            </a>

            <a href="https://www.hackerrank.com/figueroa0609" target="_blank" rel="noreferrer" className="link bg-hackerrank">
              <img className="printHide" src="/img/hackerrank.webp" alt="Hacker Rank"/>
            </a>

            <a href="https://app.hackthebox.eu/profile/734741" target="_blank" rel="noreferrer" className="link bg-white">
              <img className="printHide" src="/img/hackthebox.webp" alt="Hack The Box"/>
            </a>

            <a href="https://www.udemy.com/user/camerin-figueroa/" target="_blank" rel="noreferrer" className="link bg-white">
              <img className="printHide" src="/img/udemy.webp" alt="Udemy"/>
            </a>

            <a href="https://leetcode.com/RaspberryProgramming/" target="_blank" rel="noreferrer" className="link bg-black">
              <img className="printHide" src="/img/leetcode_logo.webp" alt="leet code"/>
            </a>
          </div>

        </div>

      </div>
    );
  }
}

export default About;