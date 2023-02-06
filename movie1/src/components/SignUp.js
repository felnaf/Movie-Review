import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ImageUploader from 'react-images-upload';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUpAction } from '../actions';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [image, setImage] = useState('');
  const [error, setError] = useState('');

  const onDrop = (pictureFiles, pictureDataURLs) => {
    setImage(pictureDataURLs);
  };

  const initial = { firstName: '', email: '', phoneNumber: '', address: '' };
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validation = Yup.object({
    firstName: Yup.string()
      .max(8, 'Too Long')
      .min(3, 'too Short')
      .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('Required'),
    address: Yup.string()
      .max(40, 'too long')
      .min(10, 'too short')
      .required('Required'),
  });
  return (
    <div className="container mt-5">
      <h3>SignUp</h3>
      <Formik
        initialValues={initial}
        validationSchema={validation}
        onSubmit={(values, { resetForm }) => {
          if (image === '') {
            setError('Required');
          } else {
            values = { ...values, image };
            dispatch(signUpAction(values, () => navigate('/login')));
            setError('');
            resetForm();
          }
        }}
      >
        <Form>
          <div className="mb-4 mt-3 ">
            <div>
              <label htmlFor="firstName">Name</label>
            </div>
            <Field
              name="firstName"
              type="text"
              className="form-control"
              //   style={{ width: '40%' }}
            />
            <div className="text-danger">
              <ErrorMessage name="firstName" />
            </div>
          </div>

          <div className="mb-4 ">
            <div>
              <label htmlFor="email">Email</label>
            </div>
            <Field name="email" type="email" className="form-control" />
            <div className="text-danger">
              <ErrorMessage name="email" />
            </div>
          </div>

          <div className="mb-4">
            <div>
              <label htmlFor="phoneNumber">Phone</label>
            </div>
            <Field name="phoneNumber" type="text" className="form-control" />
            <div className="text-danger">
              <ErrorMessage name="phoneNumber" />
            </div>
          </div>

          <div className="mb-4">
            <div>
              <label htmlFor="address">Address</label>
            </div>
            <Field
              name="address"
              as="textarea"
              className="form-textarea form-control"
            />
            <div className="text-danger">
              <ErrorMessage name="address" />
            </div>
          </div>

          <div>
            <label>Photo</label>
            <ImageUploader
              withIcon={true}
              buttonText="Choose images"
              value={image}
              withPreview={true}
              onChange={onDrop}
              imgExtension={['.jpg', '.jpeg', '.gif', '.png', '.gif']}
              maxFileSize={5242880}
            />
            <div className="text-danger">{error}</div>
          </div>

          <button type="submit" className="btn btn-primary mt-3">
            SignUp
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUp;
