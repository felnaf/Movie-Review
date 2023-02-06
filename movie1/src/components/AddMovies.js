import React, { useState, useEffect } from 'react';

// importing formik and yup
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { edittedMovieData, postMovieData } from '../actions';
// importing imageUploader
import ImageUploader from 'react-images-upload';

import { editMovieData } from '../actions';

const AddMovies = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { editMovie } = useSelector((state) => state.postReducer);

  useEffect(() => {
    if (id) {
      dispatch(editMovieData(id));
    }
  }, []);
  const [image, setImage] = useState('');
  const [errorImage, setErrorImage] = useState('');
  const onDrop = (pictureFiles, pictureDataURLs) => {
    setImage(pictureDataURLs);
  };
  const initial = {
    title: id ? editMovie.title : '',
    description: id ? editMovie.description : '',
    cast: id ? editMovie.cast : '',
    crew: id ? editMovie.crew : '',
  };
  const validation = Yup.object({
    title: Yup.string()
      .max(15, 'Too long')
      .min(2, 'Too short')
      .required('Required'),
    description: Yup.string()
      .max(100, 'Must be 70 characters or less')
      .min(10, 'too short')
      .required('Required'),
    cast: Yup.string().required('Required'),
    crew: Yup.string().required('Required'),
  });
  return (
    <div className="container mt-5">
      <Formik
        initialValues={initial}
        validationSchema={validation}
        onSubmit={(values, { resetForm }) => {
          if (image === '') {
            setErrorImage('Required');
          }
          if (id) {
            let img = image ? image : editMovie.image;
            dispatch(edittedMovieData({ ...values, image: img }, id));
            navigate('/movies');
          } else {
            values = { ...values, image };
            dispatch(postMovieData(values));
            navigate('/movies');
            setErrorImage('');
            resetForm();
          }
        }}
        enableReinitialize
      >
        <Form>
          <div className="mb-4">
            <div>
              <label htmlFor="title">Title</label>
            </div>
            <Field name="title" type="text" className="form-control" />
            <div className="text-danger">
              <ErrorMessage name="title" />
            </div>
          </div>

          <div className="mb-4">
            <div>
              <label htmlFor="description">Description</label>
            </div>
            <Field
              name="description"
              as="textarea"
              className="form-textarea form-control"
            />
            <div className="text-danger">
              <ErrorMessage name="description" />
            </div>
          </div>

          <div className="mb-4">
            <div>
              <label htmlFor="cast">Cast</label>
            </div>
            <Field name="cast" type="text" className="form-control" />
            <div className="text-danger">
              <ErrorMessage name="cast" />
            </div>
          </div>

          <div className="mb-4">
            <div>
              <label htmlFor="crew">Crew</label>
            </div>
            <Field name="crew" type="text" className="form-control" />
            <div className="text-danger">
              <ErrorMessage name="crew" />
            </div>
          </div>

          <div className="mb-4">
            <label>Image</label>
            {id ? (
              <img src={editMovie.image} style={{ height: '100px' }} />
            ) : null}
            <ImageUploader
              withIcon={true}
              value={image}
              withPreview={true}
              buttonText="Choose images"
              onChange={onDrop}
              imgExtension={['.jpg', 'jpeg', '.gif', '.png', '.gif']}
              maxFileSize={5242880}
            />
            <div className="text-danger">{errorImage}</div>
          </div>

          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddMovies;
