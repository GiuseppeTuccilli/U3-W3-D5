import { Container, Row } from "react-bootstrap";
import Song from "./Song";

const NuoveUscite = () => {
  return (
    <Container>
      <h3 className="text-white">Nuove Uscite </h3>
      <Row className="g-1">
        <Song />
      </Row>
    </Container>
  );
};

export default NuoveUscite;
