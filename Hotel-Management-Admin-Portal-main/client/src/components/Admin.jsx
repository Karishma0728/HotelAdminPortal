import styled from "styled-components";
import { Link } from "react-router-dom";
import roomURL from '../Images/Room.jpg'

const CenteredContainer = styled.div`
  top:80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background:url(${roomURL});
  background-size: cover;
  justify-content: center;
  height: 91.2vh;
`;
const MainCenter = styled.div`
    position: relative;
    z-index: 1;
    width: 30vw;
    margin: auto;
    height: 65vh;
    margin-top: 10%;
    box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
    border-radius: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5) ;
    background:rgba(255, 255, 255, 0.1) ;
    backdrop-filter: blur(5px);
    overflow: hidden;
`

const AdminText = styled.h1`
  font-size: 38px;
  color: black;
  text-align: center;
  margin-top: 100px;
  position : relative;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  margin-top: 100px;
`;

const Button = styled.button`
  background-color: #5F4E35;
  color: #E6D5A9;
  font-size : 18px;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 8px;
`;




export default function Admin() {
  return (
    <>
      <CenteredContainer>

        <MainCenter>
          <AdminText>WELCOME <br />ADMIN !</AdminText>
          <ButtonContainer>

            <Link to="/booking" style={{ textDecoration: "none", color: "black" }}><Button>Book a Room</Button></Link>

            <Link to="/viewList" style={{ textDecoration: "none", color: "black" }}><Button>View Bookings List</Button></Link>
          </ButtonContainer>
        </MainCenter>
      </CenteredContainer>
    </>
  )
}