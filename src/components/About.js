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
          skills={["Cisco IOS", "Linux", "Python", "Cyber Security"]}>
          N/a
        </Card>

        <Card
          title="Orange County Community College - Computer Science"
          image="https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Marist_College_Seal_-_Vector.svg/1200px-Marist_College_Seal_-_Vector.svg.png"
          skills={["C++", "Java", "React", "Javascript", "Assembly", "Data Structors & Algorithms"]}>
          N/a
        </Card>

        <Card
          title="Marist College Experience - Computer Science"
          image="https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Marist_College_Seal_-_Vector.svg/1200px-Marist_College_Seal_-_Vector.svg.png"
          skills={["PHP", "Haskell", "Git", "Data Structors & Algorithms", "Arduino", "Robotics", "Docker", "6502 Assembly"]}>
          Throughout my college experience I've been able to improve my understanding of how computers work and how to design different software.
          I have completed my A.S. degree from Orange County Community College in Computer Science. In the past 2 years I've been working towards my
          Bachelors degree in computer science at Marist College in Poughkeepsie. Throughout my college experience I've been able to work with others in
          teams and I am currently as of the Fall 2021 Semester been working on a team for a Capstone Project which I can hopefully list on this website
          at the end of this semester.
        </Card>

        <Card
          title="Work Experience"
          image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAkFBMVEX///+foaQAbLYAYrGex+Nyq9aanJ8AZLK3uLqhoqX29/amqKsAZrMAarX5/P3HyMqvsbTt7e4xhMLT1dZMlsvo8fgZd7zk5OWUv+DO4/FCjcdens8AWKxrpdPa29yztLeZxeKw0Oi/wcO71+uOu96Ctdrd6/URdLrv9vs2iMV4sNfR5fIAXq/B2+0Ydruy0ug2notqAAAEvElEQVR4nO2baXeyOhRGGRQcCIpTiyNqa21r2///7y5TQiYVffVq1nr2N8kBsw1mIAfLAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKA2nWWrYrXMDkWrYV7S6uURm1UV0Ht5YFWvIhy22hVebhZ5uVmn3cpD+nYV0O9FD6zsFUQrz7Mr9IJchOd1lw+s7sVEXV6vhmCmaJBhR/KrI5gGGWMY9aSq1xTshw+s9CUM5QasJ2hOE7ZsmZqCmwdW+hJW1wquHljpS7hW0O52HljrC4AgBJ8cCNYTDBtJ4zRJnMXFJ8KSdTyurvjDRyZ/mqrvhIitxV8/Wd9YcOwc/NPMF1ncYn48wg2cySymV5zNhaLYUhjxEfOpxV//MKEzrVsJTohzGreZxTXdEyGEBG7wVl5RjHRnit824L/SHQlnBYNnFMwl3bVOkBC5CcNPX7i8KYJOMNlrBFMBaXbfkMtNEXT8tU7Qcdf891nhwBeLzRF037WC/lRowoYvnXVvQcdlHVoQsK8NAqkXZdUmfsD1gdkH+gv5YlWra/FNOJ4EYum9BcM1NybNyl+XfLxyR2O+AmQiDYKvI1pjWZCKB4N99X3vcum9BQUSZqEs+2kF/E/lLGooCZIP5vDGYse/hJY+QvCVCY7lIrUC1c/iawX9xWdpTvtXi79/30t/AwRj/S3qvrMRnTVhTOiR2bdjjOC69JAFm9aU3a27InRGGzCId08rqJz1Re9JRXBL+59iqLG+WQM203Z/VsFQZN+gHaI0DmZSM6EJwxH96OyeVpB8TEUm9I9GZ528IPefS0v+6JDpfllPK5hWIZ0QVLBhnhyaYmR+W7LTgh8rnJbdbd6rPq+gHhI0Q43g+LcaJP/KtiZ+YhknSAZrObLoWOggSUiDDot+vsQ1TdAZvGoF2eKBsMlZseowTDCt2eFNJ6isHuga/2kFiSvAOhkn+B3rBK2RaEg72ysE7XyDennvYWImwoYJx020gj/i+shfWFcKekXNh6Lg5saCympi36Qt5H9pBav5WS7wMb5aML9DrVYp2C0aNGrLhreei+4H+uUSE9yx7sVh053LBb3CK9vYLgVL4aUtZCrQhr6dIPuTHROsFrn84ve8oMdhd1flxu3QY4L9wiTadNt87P8vuK8eU7gNevCsYPTCEbGjbZvdomUTpmOREHsiG+hOguy6/AOos4JawrTTZIK2fWlm070E6bNeks5I/0mw00r/bpWgd6nhG90gcBRBde+AMZ0Luwx0b2K+qELWh/zZ3XxUHYpd9/TehIaXfNDjWtCzh8ejNXzTLZ6G+lxC2f1hbGlRsU9Ed5cS7pl9WD6C4363/bndJVWvZ+fdJSeYpcUsTcmLkRH6jeVm07fL0UAQzPLTNpueEGyIcd+TYAOdIJgpirSN3eE9InjBVO2pgOCxYlMyndRctZqCpuSqqdmGNQVNyTZU80VrCZqTL6pm/NYTNKUBLTVnu4agUTnbStb9WUHTsu7l9ybo6xNUUCkx7r0J6c0X+gJM8ebLRi0x780XAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEbzH2yahtDw6DjLAAAAAElFTkSuQmCC"
          skills={["C#", "Angular", "Typescript", "Oracle SQL"]}>
          N/a
        </Card>

        <Card
            title="Github"
            link="/github"
            skills={["Tensorflow", "Redis", "React", "Python", "Raspberry Pi", "Linux"]}>
            <p>You can access a list of github repositories that I've created directly on this site.</p>
            <Link className='btn' to='/github'>Learn More</Link>
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