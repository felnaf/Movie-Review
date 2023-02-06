import React from 'react';
import { Routes, Route } from 'react-router-dom';

// importing components
import AddForum from './AddForum';
import AddMovies from './AddMovies';
import AddReviews from './AddReviews';
import Forum from './Forum';
import Header from './Header';
import Home from './Home';
import Movies from './Movies';
import Reviews from './Reviews';
import SignUp from './SignUp';
import ViewForum from './ViewForum';
import Login from './Login';
// importing privateroute
import PrivateRoute from './PrivateRoute';
// importing css
import '../assets/index.css';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route element={<PrivateRoute />}>
          <Route path="/add-movies" element={<AddMovies />} />
          <Route path="/edit-movie/:id" element={<AddMovies />} />
          <Route path="/add-reviews" element={<AddReviews />} />
          <Route path="add-forum" element={<AddForum />} />
          <Route path="/view-forum/:id" element={<ViewForum />} />
        </Route>
        <Route path="/forum" element={<Forum />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
