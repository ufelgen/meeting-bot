import styled from "styled-components";

export default function RobotFace() {
  return (
    <Container>
      <Face>
        <LeftEye /> <RightEye />
        <LeftPupil /> <RightPupil />
        <Mouth />
      </Face>
    </Container>
  );
}
const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem;
`;
const Face = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  background-color: lightgray;
  border: 2px solid black;
`;

const Eye = styled.div`
  position: absolute;
  border: 2px solid black;
  border-radius: 50%;
  background-color: white;
  height: 50px;
  width: 50px;
`;

const LeftEye = styled(Eye)`
  top: 40px;
  left: 40px;
`;

const RightEye = styled(Eye)`
  top: 40px;
  right: 40px;
`;

const Pupil = styled.div`
  position: absolute;
  border: 2px solid black;
  border-radius: 50%;
  background-color: black;
  height: 20px;
  width: 20px;
`;

const LeftPupil = styled(Pupil)`
  top: 60px;
  left: 55px;
`;

const RightPupil = styled(Pupil)`
  top: 60px;
  right: 55px;
`;

const Mouth = styled.div`
  .animate {
    @keyframes changewidth {
      from {
        transform: scaleX(1);
      }

      to {
        transform: scaleX(1.5);
      }
    }

    animation-duration: 0.3s;
    animation-name: changewidth;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  position: absolute;
  border: 2px solid black;
  background-color: white;
  height: 50px;
  width: 150px;
  top: 150px;
  left: 50px;
`;
