import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getReviewData } from '../actions';
import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';

const Reviews = () => {
  const dispatch = useDispatch();
  const { reviewData, userLoggedIn } = useSelector(
    (state) => state.postReducer
  );
  useEffect(() => {
    dispatch(getReviewData());
  }, []);
  return (
    <div className="container mt-3">
      <h3 className="text-center">Reviews</h3>
      {userLoggedIn ? (
        <Button variant="success" as={Link} to="/add-reviews" className="mt-5">
          Add Reviews
        </Button>
      ) : null}
      <div className="d-flex justify-content-around flex-wrap m-5">
        {reviewData.map((d, index) => (
          <Card style={{ width: '18rem' }} key={index}>
            <Card.Body>
              <Card.Title>Movie:{d.movie}</Card.Title>
              <Card.Text>ReviewDescription:{d.reviewdescription}</Card.Text>

              <Card.Text>
                Rating:
                <Rating name="simple-controlled" value={d.rating} />
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
