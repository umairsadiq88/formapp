import './App.css';
import { useForm } from "react-hook-form"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, Form, Button, Row, Col } from 'react-bootstrap';

function App() {

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => console.log (data);



  return (
    <>

        <h1> Register your Account <Badge variant="secondary" /></h1>

      <form onSubmit={handleSubmit(onSubmit)}>

      <Form.Group controlId="formBasicEmail" >
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Your First Name" name="fname" ref={register} />
    </Form.Group>

    <Form.Group controlId="formBasicEmail" >
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Your Last Name" name="lname" ref={register} />
    </Form.Group>

   
   
    <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        Gender
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Male"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Female"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
      
      </Col>
    </Form.Group>
  </fieldset>
  
    

    <Form.Group>
     <Form.File id="exampleFormControlFile1" label="Upload Your Picture" />
    </Form.Group>

    <Form.Group controlId="formBasicNumber" >
    <Form.Label>Cell Number</Form.Label>
    <Form.Control type="text" placeholder="Enter Your Cell Number" name="CellNumber" ref={register} />
    </Form.Group>


        <Form.Group controlId="formBasicEmail" >
    <Form.Label>Email address</Form.Label>
    <Form.Control type="text" placeholder="Enter Your Email" name="email" ref={register} />
    </Form.Group>

    <Form.Group controlId="formBasicPassword"> 
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Enter Your Password" ref={register({required: "PASSWORD REQUIRED", minLength: { value: 8, message: "minimum 8 digit required"}})}  />
    {errors.password && <span>{errors.password.message}</span>}
    </Form.Group>

    <Button variant="primary">Submit</Button>

   </form>

       </>
  );
}

export default App;
