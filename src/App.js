import './App.css';
import { useForm } from "react-hook-form"

function App() {

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log (data)
  };

  return (
   <form onSubmit={handleSubmit(onSubmit)}>

<input type="text" placeholder="Enter Your Email" name="email" ref={register} />
<input type="password" placeholder="Enter Your Password" ref={register({required: "PASSWORD REQUIRED", minLength: { value: 8, message: "minimum 8 digit required"}})}  />
{errors.password && <span>{errors.password.message}</span>}
<input type="submit" />
   </form>

       
  );
}

export default App;
