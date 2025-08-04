import styled from "styled-components";
import { connect } from "react-redux";

const Messaging = () => {
  return (
    <Container>
      <Content>
        <h1>Messaging</h1>
        <p>Stay connected with your network</p>
        <MessagingSection>
          <h3>Your conversations</h3>
          <p>Coming soon - Send and receive messages from your connections</p>
        </MessagingSection>
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

const MessagingSection = styled.div`
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

export default connect(mapStateToProps)(Messaging);
