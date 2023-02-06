import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { getMovieData, postReviewData } from '../actions';
// importing materialui
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';

const AddReviews = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.postReducer);
  //   console.log(data);

  //   const [value, setvalue] = useState('');
  const [rating, setRating] = useState(0);
  const [errorRating, setErrorRating] = useState('');

  useEffect(() => {
    dispatch(getMovieData());
  }, []);
  const initial = { movie: '', reviewtitle: '', reviewdescription: '' };
  const validation = Yup.object({
    movie: Yup.string().required('Required'),
    reviewtitle: Yup.string().max(10, 'Too long').required('Required'),
    reviewdescription: Yup.string().max(10, 'Too long').required('Required'),
  });

  return (
    <div className="container mt-5">
      <Formik
        initialValues={initial}
        validationSchema={validation}
        onSubmit={(values, { resetForm }) => {
          if (rating === 0) {
            setErrorRating('Required');
          } else {
            values = { ...values, rating };
            dispatch(postReviewData(values));
            navigate('/reviews');
            resetForm();
          }
        }}
      >
        <Form>
          <div className="mb-4">
            <div>
              <label htmlFor="movie">Choose Movie</label>
            </div>
            <Field name="movie" as="select" className="my-select form-control">
              <option value="">Choose Movie</option>
              {data.map((d, index) => (
                <option value={d.title} key={index}>
                  {d.title}
                </option>
              ))}
            </Field>
            <div className="text-danger">
              <ErrorMessage name="movie" />
            </div>
          </div>

          <div className="mb-4">
            <div>
              <label htmlFor="reviewtitle">Review Title</label>
            </div>
            <Field name="reviewtitle" type="text" className="form-control" />
            <div className="text-danger">
              <ErrorMessage name="reviewtitle" />
            </div>
          </div>

          <div className="mb-4">
            <div>
              <label htmlFor="reviewdescription">Review Description</label>
            </div>
            <Field
              name="reviewdescription"
              type="text"
              className="form-control"
            />
            <div className="text-danger">
              <ErrorMessage name="reviewdescription" />
            </div>
          </div>

          <div className="mb-4">
            {/* <div> */}
            {/* <label>Star Rating</label> */}
            {/* </div> */}

            <Typography component="legend">Star Rating</Typography>
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
            />
            <div className="text-danger">{errorRating}</div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddReviews;
