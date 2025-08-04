import styled from "styled-components";
import { connect } from "react-redux";

const MyNetwork = () => {
  return (
    <Container>
      <Content>
        <h1>My Network</h1>
        <p>Connect with colleagues, classmates, and friends</p>
        <NetworkSection>
          <h3>People you may know</h3>
          <p>Coming soon - Find and connect with people in your professional network</p>
        </NetworkSection>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
  background-color: #f3f2ef;
  min-height: 100vh;
`;

const Content = styled.div`
  max-width: 1128px;
  margin: 0 auto;
  padding: 20px;
`;

const NetworkSection = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(MyNetwork);
