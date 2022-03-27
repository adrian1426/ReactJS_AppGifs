import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';

const initialValues = {
  username: '',
  password: ''
};

const validaciones = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = 'usario requerido';
  }

  if (!values.password) {
    errors.password = 'password requerido';
  } else if (values.password.length < 3) {
    errors.password = 'el password debe ser mayor a 3 caracteres';
  }

  return errors;
};

const RegisterFormik = () => {
  const [registered, setRegirested] = useState(false);

  if (registered) {
    return <h2>Felicidades ha sido registrado en el sistema</h2>;
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validate={values => validaciones(values)}
        onSubmit={(values, { setFieldError }) => {
          console.log(values);
          if (values.password === '123') {
            setFieldError('password', 'El password debe ser diferente a 123');
          }

          setRegirested(true);
        }}
      >
        {
          () =>
          (
            <Form
              className='form'
            >
              <Field
                name='username'
                placeholder='usuario'
              />
              <ErrorMessage name='username' component={'small'} />

              <Field
                name='password'
                placeholder='password'
              />
              <ErrorMessage name='password' component={'small'} />

              <button
                type='submit'
                className='btn'
              >
                Registrar
              </button>
            </Form>
          )
        }
      </Formik>
    </>
  );
};

export default RegisterFormik;