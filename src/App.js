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
        
    {/* firstName start */}
    
    <Form.Group controlId="formBasicEmail" >
    <Form.Label>First Name</Form.Label>
    <Form.Control 
    type="text" 
    placeholder="Enter Your First Name" 
    name="firstName" 
    ref={register({
      required: "required", 
    minLength: {
      value: 8,
      message: "must be 8 characters" 
}})} />

{errors.firstName ? <span style={{color: "red"}}> {errors.firstName.message && "First Name is required"}</span>: null} 

        <span style={{color: "red"}}>{errors.firstName && "First name is required"}</span>  
    </Form.Group>

    {/* firstName end */}

    {/* lastName Start */}

    <Form.Group controlId="formBasicEmail" >
    <Form.Label>Last Name</Form.Label>
    <Form.Control 
    type="text" 
    placeholder="Enter Your First Name" 
    name="lastName" 
    ref={register({
    required: "required", 
    minLength: {
      value: 8,
      message: "must be 8 characters" 
}})} />

        <span style={{color: "red"}}>{errors.lastName && "Last name is required"}</span>  
    </Form.Group>

    {/* lastName end */}

    {/* Age Start */}
    <Form.Group controlId="formBasicAge" >
    <Form.Label>Age</Form.Label>
    <Form.Control type="number" name="age" ref={register ({required: true, value:1, min:0, max:99 })} />
    <span style={{color: "red"}}>{errors.age && "Age is required"}</span> 
    </Form.Group>

{/* Gender Start */}
    <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>Gender</Form.Label>
      
      <Col sm={10}>
        
        <Form.Check
          type="radio"
          checked="checked"
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
  {/* Gender End */}

{/* Cell Start */}

    <Form.Group controlId="formBasicNumber" >
    <Form.Label>Cell Number</Form.Label>
    <Form.Control type="tel" placeholder="Enter Your Cell Number" name="cellNumber" 
    ref={register} />
    {errors.cellNumber ? <span style={{color: "red"}}> {errors.cellNumber.message && "Cell Number is required"}</span>: null} 
    </Form.Group>

{/* Cell end */}

        <Form.Group controlId="formBasicEmail" >
    <Form.Label>Email address</Form.Label>
    <Form.Control 
    type="text" 
    placeholder="Enter Your First Name" 
    name="email" 
    ref={register({
    required: "required", 
    minLength: {
      value: 8,
      message: "must be 8 characters" 
}})} />
        <span style={{color: "red"}}>{errors.email && "Email is required"}</span>  
    </Form.Group>

    <Form.Group controlId="formBasicPassword"> 
    <Form.Label>Password</Form.Label>
    <Form.Control 
    type="password" 
    placeholder="Enter Your First Name" 
    name="password" 
    ref={register({
    required: "required", 
    minLength: {
      value: 8,
      message: "must be 8 characters" 
}})} />
        <span style={{color: "red"}}>{errors.password && "Password is required"}</span>  
   
    </Form.Group>

       <Form.Group>
     <Form.File id="exampleFormControlFile1" label="Upload Your Picture" />
    </Form.Group>

    <Button variant="primary" type="submit">Submit</Button>

   </form>

       </>
  );
}

export default App;
