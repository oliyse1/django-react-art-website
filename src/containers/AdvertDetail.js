import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const AdvertDetail = (props) => {
  const { id } = useParams();
  const [advert, setAdvert] = useState({});
  const [dealer, setDealer] = useState({});
  const [artist, setArtist] = useState({});
  const [price, setPrice] = useState(0);

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    axios
      .get(`http://178.62.198.136/api/adverts/${id}`, config)
      .then((res) => {
        setAdvert(res.data);
        setPrice(numberWithCommas(res.data.price));
      })
      .catch((err) => {});
  }, [id]);

  useEffect(() => {
    const id = advert.dealer;

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    if (id) {
      axios
        .get(`http://178.62.198.136/api/dealers/${id}`, config)
        .then((res) => {
          setDealer(res.data);
        })
        .catch((err) => {});
    }
  }, [advert.dealer]);

  useEffect(() => {
    const id = advert.artist;
    // console.log(id);

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    if (id) {
      axios
        .get(`http://178.62.198.136/api/artists/${id}`, config)
        .then((res) => {
          setArtist(res.data);
        })
        .catch((err) => {});
    }
  }, [advert.artist]);

  return (
    <div className="advertdetail">
      <div className="row">
        <div className="col-3-of-4">
          <img className="advertdetail__image" src={advert.photo_main} alt="" />
        </div>

        <div className="col-1-of-4">
          <ul className="advertdetail__list">
            <li className="advertdetail__list__title">{advert.title}</li>
            <li className="advertdetail__list__artist">{artist.name}</li>

            <li className="advertdetail__list__title">£{price}</li>
            <li className="advertdetail__list__item">
              Medium: {advert.medium}
            </li>
            <li className="advertdetail__list__item">
              Height: {advert.height} cm
            </li>
            <li className="advertdetail__list__item">
              Width: {advert.width} cm
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="advertdetail__artist">
          <p>About the artist</p>
        </div>
        <div className="col-1-of-5">
          <img className="advertdetail__artist__image" src={artist.photo}></img>
        </div>
        <div className="col-4-of-5">
          <h3 className="advertdetail__artist__name">{artist.name}</h3>
          <p className="advertdetail__artist__description">
            {artist.description}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="advertdetail__dealer">
          <p>Contact us to arrange an in-person viewing at our art gallery</p>
        </div>
        <div className="col-1-of-5">
          <img className="advertdetail__dealer__image" src={dealer.photo}></img>
        </div>
        <div className="col-4-of-5">
          <h3 className="advertdetail__dealer__name">{dealer.name}</h3>
          <p className="advertdetail__dealer__info">{dealer.phone}</p>
          <p className="advertdetail__dealer__info">{dealer.email}</p>
          <p className="advertdetail__dealer__description">
            {dealer.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvertDetail;
