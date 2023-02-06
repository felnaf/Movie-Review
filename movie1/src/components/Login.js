import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginInAction } from '../actions';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="container mt-5 custom">
      <h3 className="text-center">Login</h3>
      <Formik
        initialValues={{ email: '', phoneNumber: '' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          phoneNumber: Yup.string().required('Required'),
        })}
        onSubmit={(values, { resetForm }) => {
          dispatch(loginInAction(values, () => navigate('/')));
          resetForm();
        }}
      >
        <Form>
          <div className="mb-4 control-group">
            <div>
              <label htmlFor="email">UserName</label>
            </div>
            <Field
              name="email"
              type="email"
              className="form-control"
              style={{ width: '92%' }}
            />
            <div className="text-danger">
              <ErrorMessage name="email" />
            </div>
          </div>

          <div className="mb-4 control-group">
            <div>
              <label htmlFor="phoneNumber">Password</label>
            </div>
            <Field
              name="phoneNumber"
              type="password"
              className="form-control"
              style={{ width: '92%' }}
            />
            <div className="text-danger">
              <ErrorMessage name="phoneNumber" />
            </div>
          </div>

          <button type="submit" className="btn btn-primary control-group ">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
