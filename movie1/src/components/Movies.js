import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { editMovieData, getMovieData } from '../actions';

const Movies = () => {
  const dispatch = useDispatch();
  const { data, userLoggedIn } = useSelector((state) => state.postReducer);
  //   console.log(data);

  useEffect(() => {
    dispatch(getMovieData());
  }, []);

  return (
    <div className="container">
      {userLoggedIn ? (
        <div>
          <Button variant="success" as={Link} to="/add-movies" className="mt-5">
            Add Movies
          </Button>
        </div>
      ) : null}
      <div className="d-flex justify-content-around flex-wrap m-3">
        {data.map((d, index) => (
          <Card style={{ width: '18rem' }} key={index} className="card-box">
            <Card.Img
              variant="top"
              src={d.image}
              style={{ height: '250px' }}
              className="card-box1"
            />
            <Card.Body>
              <Card.Title>{d.title}</Card.Title>
              <Card.Text>Description:{d.description}</Card.Text>
              <Card.Text>Cast:{d.cast}</Card.Text>
              <Card.Text>Crew:{d.crew}</Card.Text>
              {userLoggedIn ? (
                <Button variant="warning" as={Link} to={`/edit-movie/${d.id}`}>
                  Edit
                </Button>
              ) : null}
            </Card.Body>
          </Card>
        ))}
      </div>
      {/* )} */}
    </div>
  );
};

export default Movies;
