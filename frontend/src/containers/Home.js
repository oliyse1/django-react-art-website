import React, { useState } from "react";
import { Helmet } from "react-helmet";
import AdvertForm from "../components/AdvertForm";
import Adverts from "../components/Adverts";
import Pagination from "../components/Pagination";

const Home = () => {
  const [adverts, setAdverts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [active, setActive] = useState(1);
  const advertsPerPage = 3;

  const indexOfLastAdvert = currentPage * advertsPerPage;
  const indexOfFirstAdvert = indexOfLastAdvert - advertsPerPage;
  const currentAdverts = adverts.slice(indexOfFirstAdvert, indexOfLastAdvert);

  const visitPage = (page) => {
    setCurrentPage(page);
    setActive(page);
  };

  const previous_page = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      setActive(currentPage - 1);
    }
  };

  const next_page = () => {
    if (currentPage !== Math.ceil(adverts.length / 3)) {
      setCurrentPage(currentPage + 1);
      setActive(currentPage + 1);
    }
  };

  return (
    <main className="home">
      <Helmet>
        <title>Arte - Home</title>
        <meta name="description" content="Home Page" />
      </Helmet>
      <section className="home__form">
        <AdvertForm setAdverts={setAdverts} />
      </section>
      <section className="home__adverts">
        <Adverts adverts={currentAdverts} />
      </section>
      <section className="home__pagination">
        <div className="row">
          {adverts.length !== 0 ? (
            <Pagination
              advertsPerPage={advertsPerPage}
              totalAdverts={adverts.length}
              visitPage={visitPage}
              previousPage={previous_page}
              nextPage={next_page}
              active={active}
              setActive={setActive}
            />
          ) : null}
        </div>
      </section>
    </main>
  );
};

export default Home;
