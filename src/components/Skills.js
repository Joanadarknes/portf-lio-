import { ReactComponent as Meter1 } from "../assets/img/meter1.svg";
import { ReactComponent as Meter2 } from "../assets/img/meter2.svg";
import { ReactComponent as Meter3 } from "../assets/img/meter3.svg";
import { ReactComponent as Meter4 } from "../assets/img/meter4.svg";
import { ReactComponent as Meter5 } from "../assets/img/meter5.svg";
import { ReactComponent as Meter6 } from "../assets/img/meter6.svg";
import { ReactComponent as Meter7 } from "../assets/img/meter7.svg";
import { ReactComponent as Meter8 } from "../assets/img/meter8.svg";
import { ReactComponent as Meter9 } from "../assets/img/meter9.svg";
import { ReactComponent as Meter10 } from "../assets/img/meter10.svg";
import { ReactComponent as Meter11 } from "../assets/img/meter11.svg";
import { ReactComponent as Meter12 } from "../assets/img/meter12.svg";
import { ReactComponent as Meter13 } from "../assets/img/meter13.svg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Projects } from "./Projects";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <Meter1 />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <Meter2 />
                                <h5>JS</h5>
                            </div>
                            <div className="item">
                                <Meter3 />
                                <h5>React.js</h5>
                            </div>
                            <div className="item">
                                <Meter4 />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <Meter5 />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <Meter6 />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <Meter7 />
                                <h5>PHP</h5>
                            </div>
                            <div className="item">
                                <Meter8 />
                                <h5>bootstrap</h5>
                            </div>
                            <div className="item">
                                <Meter9 />
                                <h5>Materialize</h5>
                            </div>
                            <div className="item">
                                <Meter10 />
                                <h5>C#</h5>
                            </div>
                            <div className="item">
                                <Meter11 />
                                <h5>Mysql</h5>
                            </div>
                            <div className="item">
                                <Meter12 />
                                <h5>Jquery</h5>
                            </div>
                            <div className="item">
                                <Meter13 />
                                <h5>Node.js</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <Projects />
    </section>
  )
}
