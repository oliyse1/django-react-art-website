import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import About from "./containers/About";
import Contact from "./containers/Contact";
import AdvertDetail from "./containers/AdvertDetail";
import Login from "./containers/Login";
import SignUp from "./containers/SignUp";
import NotFound from "./components/NotFound";
import Layout from "./hocs/Layout";
import PrivateRoute from "./components/PrivateRoute";

import { Provider } from "react-redux";
import store from "./store";

import "./sass/main.scss";

const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Routes>
          <Route exact="true" path="/" element={<Home />} />
          <Route exact="true" path="/about" element={<About />} />
          <Route exact="true" path="/contact" element={<Contact />} />
          <Route
            exact="true"
            path="/adverts/:id"
            element={
              <PrivateRoute>
                <AdvertDetail />
              </PrivateRoute>
            }
          />
          <Route exact="true" path="/login" element={<Login />} />
          <Route exact="true" path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  </Provider>
);

export default App;
