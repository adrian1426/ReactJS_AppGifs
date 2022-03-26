import { Formik } from 'formik';

const initialValues = {
  username: '',
  password: ''
};

const RegisterForm = () => {
  return (
    <>
      <Formik
        initialValues={initialValues}
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