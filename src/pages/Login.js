import styled from "styled-components";
import { useRef, useContext } from "react"
import axios from "axios"
import { AuthContex } from "../Contex/AuthContex";
import { useNavigate } from "react-router-dom"

export const Login = () => {

  const elEmail = useRef()
  const elPassword = useRef()
  const navigate = useNavigate()

  const { token, setToken } = useContext(AuthContex)

  const handleFormSubmit = (evt) => {
    evt.preventDefault()

    axios.post("https://reqres.in/api/login", {
      email: elEmail.current.value,
      password: elPassword.current.value,
    }).then(response => {
      if(response.data){
        setToken(response.data);
        navigate("/");
      }
    })
    .catch(err => console.log(err))
  }



  return (
    <Wrapper>
      <Heading>Login page</Heading>
      <Form onSubmit={handleFormSubmit}>
        <Input ref={elEmail} classNamclassName="form-control" type="email" placeholder="Email" />
        <Input ref={elPassword} type="password" placeholder="Password" />
        <div className="text-center">
          <Button className="btn btn-primary">
            Send
          </Button>
        </div>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: orange;
  height: 100vh;
`;

const Heading = styled.h1`
  text-align: center;
`;

const Form = styled.form`
  width: 500px;
  margin: 100px auto;
  padding: 1rem;
  border: 1px solid #444;
  background: #fff;
`;
const Input = styled.input`
width: 80%;
margin: 20px auto;
display: block;
`;
const Button = styled.button`

`
