import React, { useEffect } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Homepage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import DetailsPageLoggedIn from "./pages/DetailsPageLoggedIn";
import Auction from "./pages/Auction";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        {/* <Route exact path="/bids" element={<Bid />} /> */}
        {/* <Route exact path="/artworks/:id" element={<DetailsPage />} /> */}
        <Route exact path="/artworks/:id" element={<DetailsPageLoggedIn />} />
        {/* <Route path="/other" element={<Other />} /> */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/auction" element={<Auction />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
