import { Formik } from 'formik';

const initialValues = {
  username: '',
  password: ''
};

const RegisterForm = () => {

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
        }}
      >
        {
          ({
            handleSubmit,
            handleChange,
            isSubmitting,
            errors
          }) =>
          (
            <form
              className='form'
              onSubmit={handleSubmit}
            >
              <input
                name='username'
                placeholder='usuario'
                onChange={handleChange}
              />
              <span
                style={{ color: 'red', fontSize: '10px' }}
              >
                {errors.username}
              </span>

              <input
                name='password'
                placeholder='password'
                onChange={handleChange}
              />
              <span
                style={{ color: 'red', fontSize: '10px' }}
              >
                {errors.password}
              </span>

              <button
                type='submit'
                className='btn'
                disabled={isSubmitting}
              >
                Registrar {isSubmitting.toString()}
              </button>
            </form>
          )
        }
      </Formik>
    </>
  );
};

export default RegisterForm;