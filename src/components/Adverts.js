import React from "react";
import Card from "./Card";

const Adverts = ({ adverts }) => {
  const getAdverts = () => {
    let advertsOnPage = [];
    let display = [];

    adverts.map((advert) => {
      return advertsOnPage.push(
        <Card
          title={advert.title}
          price={advert.price}
          artist={advert.artist}
          photo_main={advert.photo_main}
          slug={advert.slug}
        />
      );
    });

    for (let i = 0; i < adverts.length; i += 3) {
      display.push(
        <div className="row">
          <div className="col-1-of-3">{advertsOnPage[i]}</div>
          <div className="col-1-of-3">
            {advertsOnPage[i + 1] ? advertsOnPage[i + 1] : null}
          </div>
          <div className="col-1-of-3">
            {advertsOnPage[i + 2] ? advertsOnPage[i + 2] : null}
          </div>
        </div>
      );
    }

    return display;
  };

  return <div>{getAdverts()}</div>;
};

export default Adverts;
