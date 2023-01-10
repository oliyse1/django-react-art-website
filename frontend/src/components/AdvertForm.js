import React, { useState } from "react";
import axios from "axios";
import * as Loader from "react-loader-spinner";
import PropTypes from "prop-types";

const AdvertForm = (props) => {
  const [formData, setFormData] = useState({
    min_price: 0,
    max_price: 20000,
    min_height: 0.0,
    max_height: 500.0,
    min_width: 0.0,
    max_width: 500.0,
    subject: "Any",
    medium: "Any",
    keywords: "",
  });

  const {
    min_price,
    max_price,
    min_height,
    max_height,
    min_width,
    max_width,
    subject,
    medium,
    keywords,
  } = formData;

  const [loading, setLoading] = useState(false);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    setLoading(true);
    axios
      .post(
        "http://localhost:8000/api/adverts/search",
        {
          min_price,
          max_price,
          min_height,
          max_height,
          min_width,
          max_width,
          subject,
          medium,
          keywords,
        },
        config
      )
      .then((res) => {
        setLoading(false);
        props.setAdverts(res.data);
        window.scrollTo(0, 0);
      })
      .catch((err) => {
        setLoading(false);
        window.scrollTo(0, 0);
      });
  };

  return (
    <form className="advertform" onSubmit={(e) => onSubmit(e)}>
      <div className="row">
        <div className="col-1-of-5">
          <div className="advertform__group">
            <label className="advertform__label" htmlFor="min_price">
              Min Price (£)
            </label>
            <input
              className="advertform__input"
              name="min_price"
              type="number"
              onChange={(e) => onChange(e)}
              value={min_price}
            />
          </div>

          <div className="advertform__group">
            <label className="advertform__label" htmlFor="min_height">
              Min Height (cm)
            </label>
            <input
              className="advertform__input"
              name="min_height"
              type="number"
              onChange={(e) => onChange(e)}
              value={min_height}
            />
          </div>
        </div>

        <div className="col-1-of-5">
          <div className="advertform__group">
            <label className="advertform__label" htmlFor="max_price">
              Max Price (£)
            </label>
            <input
              className="advertform__input"
              name="max_price"
              type="number"
              onChange={(e) => onChange(e)}
              value={max_price}
            />
          </div>

          <div className="advertform__group">
            <label className="advertform__label" htmlFor="max_height">
              Max Height (cm)
            </label>
            <input
              className="advertform__input"
              name="max_height"
              type="number"
              onChange={(e) => onChange(e)}
              value={max_height}
            />
          </div>
        </div>

        <div className="col-1-of-5">
          <div className="advertform__group">
            <label className="advertform__label" htmlFor="subject">
              Subject
            </label>
            <select
              className="advertform__select"
              name="subject"
              onChange={(e) => onChange(e)}
              value={subject}
            >
              <option>Any</option>
              <option>Abstract</option>
              <option>People</option>
              <option>Landscape</option>
              <option>Animal</option>
            </select>
          </div>

          <div className="advertform__group">
            <label className="advertform__label" htmlFor="min_width">
              Min width
            </label>
            <input
              className="advertform__input"
              name="min_width"
              type="number"
              onChange={(e) => onChange(e)}
              value={min_width}
            />
          </div>
        </div>

        <div className="col-1-of-5">
          <div className="advertform__group">
            <label className="advertform__label" htmlFor="medium">
              Medium
            </label>
            <select
              className="advertform__select"
              name="medium"
              onChange={(e) => onChange(e)}
              value={medium}
            >
              <option>Any</option>
              <option>Acrylic</option>
              <option>Oil</option>
              <option>Watercolor</option>
              <option>Other</option>
            </select>
          </div>
          <div className="advertform__group">
            <label className="advertform__label" htmlFor="max_width">
              Max width
            </label>
            <input
              className="advertform__input"
              name="max_width"
              type="number"
              onChange={(e) => onChange(e)}
              value={max_width}
            />
          </div>
        </div>

        <div className="col-1-of-5">
          {loading ? (
            <div className="advertform__loader">
              <Loader.Circles color="#f43a09" height={50} width={50} />
            </div>
          ) : (
            <button className="advertform__button">Search</button>
          )}
        </div>
      </div>
    </form>
  );
};

AdvertForm.propTypes = {
  setAdverts: PropTypes.func.isRequired,
};

export default AdvertForm;
