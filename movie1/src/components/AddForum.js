import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieData, postForumData } from '../actions';
import ImageUploader from 'react-images-upload';
import { useNavigate } from 'react-router-dom';

const AddForum = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.postReducer);

  const [image, setImage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    dispatch(getMovieData());
  }, []);

  const onDrop = (pictureFiles, pictureDataURLs) => {
    setImage(pictureDataURLs);
  };
  const initial = { title: '', movie: '', description: '' };
  const validation = Yup.object({
    title: Yup.string().max(15, 'Too long').required('Required'),
    movie: Yup.string().required('Required'),
    description: Yup.string()
      .max(100, 'Must be 100 characters or less')
      .min(10, 'too short')
      .required('Required'),
  });
  return (
    <div className="container mt-5">
      <Formik
        initialValues={initial}
        validationSchema={validation}
        onSubmit={(values, { resetForm }) => {
          if (image === '') {
            setError('Required');
          } else {
            values = { ...values, image };
            dispatch(postForumData(values));
            navigate('/forum');
            resetForm();
          }
        }}
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

          <div>
            <label>Image</label>
            <ImageUploader
              withIcon={true}
              withPreview={true}
              buttonText="Choose images"
              onChange={onDrop}
              value={image}
              imgExtension={['.jpg', '.jpeg', '.gif', '.png', '.gif']}
              maxFileSize={5242880}
            />
          </div>
          <div className="text-danger">{error}</div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddForum;
