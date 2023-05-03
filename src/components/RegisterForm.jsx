import React, {useState , useEffect}  from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import DynamicInput from './DynamicInput';

const RegisterForm = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const elements = [
	{label: "Your Name", type: "text", value: setFirstName},
	{label: "Your Email", type: "email", value: setEmail},
	{label: "Your Password", type: "password", value: setPassword}
  ]
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'firstName') {
      setFirstName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  
  useEffect(() => {
    setButtonDisabled(!(firstName && email && password));
  }, [firstName, email, password]);

  const registerUser = () => {
    const user = { firstName, email, password };
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const newUsers = [...existingUsers, user];
    localStorage.setItem('users', JSON.stringify(newUsers));
    window.location.href = '/';
  };
  const [test, setTest] = useState('');
  const getValue = (event) => {
	setTest(event.target.value)
  }

  return (
    <>
	<MDBContainer
      fluid
      className="d-flex align-items-center justify-content-center bg-image"
      style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}
    >
      <div className="mask gradient-custom-3"></div>
      <MDBCard className="m-5" style={{ maxWidth: '600px' }}>
        <MDBCardBody className="px-5">
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <DynamicInput elem = {elements}/>
          {/* {elements.map(
			(elem) => {
				return(
					<MDBInput
            wrapperClass="mb-4"
            label={elem.label}
            size="lg"
            id="form1"
            type={elem.type}
            name="firstName"
            onChange={(e) =>elem.value(e.target.value)}
          />
				)
			}
		  )} */}
          

          <MDBBtn className="mb-4 w-100 gradient-custom-4" size="lg" onClick={registerUser} disabled={buttonDisabled}>
            Register
          </MDBBtn>

		  <MDBBtn className="mb-4 w-100 gradient-custom-4" size="lg" onClick={registerUser} disabled={buttonDisabled}>
            Hello {firstName}
          </MDBBtn>
		  <MDBBtn className="mb-4 w-100 gradient-custom-4" size="lg" onClick={registerUser} disabled={buttonDisabled}>
            Your Email is {email}
          </MDBBtn>
		  <MDBBtn className="mb-4 w-100 gradient-custom-4" size="lg" onClick={registerUser} disabled={buttonDisabled}>
            Your password is {password}
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
	  
	
    </MDBContainer>
	</>
  );
};

export default RegisterForm;