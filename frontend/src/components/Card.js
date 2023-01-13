import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

const Card = (props) => {
  const [artist, setArtist] = useState({});
  useEffect(() => {
    const id = props.artist;
    // console.log(id);

    const config = {
      headers: {
        // Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    if (id) {
      axios
        .get(`http://localhost:8000/api/artists/${id}`, config)
        .then((res) => {
          setArtist(res.data);
          // console.log(artist);
        })
        .catch((err) => {});
    }
  }, [props.artist]);

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="card">
      <img
        className="card__image"
        src={`http://localhost:8000${props.photo_main}`}
        alt="Artwork"
      />
      <p className="card__title">{props.title}</p>
      <p className="card__artist">{artist.name}</p>
      <p className="card__price">£{numberWithCommas(props.price)}</p>
      <Link className="card__link" to={`/adverts/${props.slug}`}>
        View Details
      </Link>
    </div>
  );
};

export default Card;
