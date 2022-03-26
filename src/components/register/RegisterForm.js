import { Formik } from 'formik';

const initialValues = {
  username: '',
  password: ''
};

const RegisterForm = () => {
  return (
    <>
      <h2>registro de usuarios</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {
          ({
            handleSubmit,
            handleChange,
            isSubmitting
          }) =>
          (
            <form onSubmit={handleSubmit}>
              <input
                name='username'
                onChange={handleChange}
              />
              <input
                name='password'
                onChange={handleChange}
              />
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