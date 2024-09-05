import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <return>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
              commodi ipsam. Totam culpa ullam quas, quia dolor provident
              assumenda, earum facilis libero saepe vel excepturi reiciendis
              ratione debitis corporis autem eos cupiditate nemo sunt veritatis
              dicta quo officiis illum? Sequi eum fugiat quibusdam nesciunt
              accusamus ex rem aut beatae amet.
            </p>
            <Link to={"/"}>
              Explore Menu
              <span>
                <HiOutlineArrowNarrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="/about.png" alt="about" />
          </div>
        </div>
      </section>
    </return>
  );
};

export default About;
