import { useState } from 'react';
import { useForm } from 'react-hook-form';

const RegisterForm = () => {
  const [registered, setRegirested] = useState(false);
  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = (values) => {
    console.log(values);
    setRegirested(true);
  };

  if (registered) {
    return <h2>Felicidades ha sido registrado en el sistema</h2>;
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='form'
      >
        <input
          placeholder='usuario'
          {...register('username', { required: true })}
        />
        {errors.username && <small>Usuario requerido</small>}

        <input
          placeholder='password'
          {...register('password', { required: true, minLength: 3 })}
        />
        {errors.password?.type === 'required' && <small>password requerido</small>}
        {errors.password?.type === 'minLength' && <small>el password debe ser mayor a 3 caracteres</small>}

        <button
          type='submit'
          className='btn'
        >
          Registrar
        </button>
      </form>
    </>
  );
};

export default RegisterForm;