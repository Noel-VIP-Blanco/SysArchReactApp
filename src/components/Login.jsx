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

const RegisterForm = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);

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

  return (
    <MDBContainer
      fluid
      className="d-flex align-items-center justify-content-center bg-image"
      style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}
    >
      <div className="mask gradient-custom-3"></div>
      <MDBCard className="m-5" style={{ maxWidth: '600px' }}>
        <MDBCardBody className="px-5">
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <MDBInput
            wrapperClass="mb-4"
            label="Your Name"
            size="lg"
            id="form1"
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleInputChange}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Your Email"
            size="lg"
            id="form2"
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            size="lg"
            id="form3"
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />

          {/* <MDBBtn className="mb-4 w-100 gradient-custom-4" size="lg" onClick={registerUser} disabled={buttonDisabled}>
            Register
          </MDBBtn> */}
          <MDBBtn className="mb-4 w-100 gradient-custom-4" size="lg" onClick={registerUser} disabled={buttonDisabled}>
            Your name is {firstName}
          </MDBBtn>
          <MDBBtn className="mb-4 w-100 gradient-custom-4" size="lg" onClick={registerUser} disabled={buttonDisabled}>
            Register
          </MDBBtn>
          <MDBBtn className="mb-4 w-100 gradient-custom-4" size="lg" onClick={registerUser} disabled={buttonDisabled}>
            Register
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default RegisterForm;