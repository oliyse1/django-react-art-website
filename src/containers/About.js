import React, { useState, useEffect, Fragment } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import Art from "../assets/images/art.jpeg";

const About = () => {
  const [dealers, setDealers] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const getDealers = async () => {
      try {
        const res = await axios.get(
          `http://178.62.198.136/api/dealers/`,
          config
        );
        setDealers(res.data);
      } catch (err) {}
    };

    getDealers();
  }, []);

  const getAllDealers = () => {
    let allDealers = [];
    let display = [];

    dealers.map((dealer) => {
      return allDealers.push(
        <Fragment key={dealer.id}>
          <img className="about__image" src={dealer.photo} alt="" />
          <h3 className="about__dealer">{dealer.name}</h3>
          <p className="about__info">{dealer.phone}</p>
          <p className="about__info">{dealer.email}</p>
          <p className="about__description">{dealer.description}</p>
        </Fragment>
      );
    });

    for (let i = 0; i < dealers.length; i += 3) {
      display.push(
        <div key={i} className="row">
          <div className="col-1-of-3">{allDealers[i]}</div>
          <div className="col-1-of-3">
            {allDealers[i + 1] ? allDealers[i + 1] : null}
          </div>
          <div className="col-1-of-3">
            {allDealers[i + 2] ? allDealers[i + 2] : null}
          </div>
        </div>
      );
    }

    return display;
  };

  return (
    <main className="about">
      <Helmet>
        <title>Arte - About</title>
        <meta name="description" content="About us" />
      </Helmet>
      <section>
        <div className="row">
          <div className="col-3-of-4">
            <h2 className="about__title">A place for artists and art lovers</h2>
            <p className="about__paragraph">
              Our company is a platform for artists to showcase their work to a
              global audience. We have our own art-gallery where art-lovers can
              visit for an in-person viewing of our art collection.
            </p>
            <img className="about__image" src={Art} alt="" />
            <p className="about__paragraph">
              Get in touch with our dedicated art dealers to find out more!
            </p>
          </div>
        </div>
      </section>
      <section className="about__team">
        <div className="row">
          <h2 className="about__title">Meet our team</h2>
        </div>
        {getAllDealers()}
      </section>
    </main>
  );
};

export default About;
