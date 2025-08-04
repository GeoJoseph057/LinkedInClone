import styled from "styled-components";
import { connect } from "react-redux";
import { signUpAPI } from "../actions";
import { useNavigate } from "react-router";
import { useState } from "react";

const SignUp = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  let navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const payload = {
      name,
      email,
      password,
      bio,
    };
    props.signUp(payload);
    navigate("/home");
  };

  return (
    <Container>
      {props.user && navigate("/home")}
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="" />
        </a>
      </Nav>
      <Section>
        <Hero>
          <h1>Create your professional profile</h1>
        </Hero>
        <Form onSubmit={handleSignUp}>
          <Input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <TextArea
            placeholder="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <SubmitButton type="submit">Sign Up</SubmitButton>
        </Form>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px;
`;

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;
  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  width: 100%;
  max-width: 408px;
  align-items: center;
  margin: auto;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;
  text-align: center;
  h1 {
    padding-bottom: 20px;
    font-size: 32px;
    color: #8f5849;
    font-weight: 400;
    line-height: 1.25;
  }
`;

const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  height: 56px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 0 15px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  height: 100px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 15px;
  font-size: 16px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  background-color: #0a66c2;
  color: white;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  height: 56px;
  border-radius: 28px;
  width: 100%;
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #004182;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signUp: (payload) => dispatch(signUpAPI(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
