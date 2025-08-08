import { Form, Button } from "react-bootstrap";
import apple from "../../assets/logos/apple-white.svg";
import music from "../../assets/logos/music-white.svg";
import { useSelector } from "react-redux";
import { useRef } from "react";

const MyNavbar2 = () => {
  const audio = useSelector((state) => {
    return state.audio;
  });
  const audioRef = useRef(null);

  const toggleAudio = () => {
    const player = audioRef.current;
    if (!player) return;

    if (player.paused) {
      player.play();
    } else {
      player.pause();
    }
  };

  //non ho fatto in tempo

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <audio id="audioPlayer" src={audio} type="audio/mp3"></audio>
      <div className="container-fluid">
        <button
          className="navbar-toggler text-danger"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <img src={music} className="d-lg-none" />
        <Button id="accMob" className="d-flex d-lg-none text-danger fw-bold">
          Accedi
        </Button>
        <div
          className="collapse navbar-collapse justify-content-evenly"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-lg-none ">
            {/*<li className="nav-item d-lg-none">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>*/}
          </ul>

          <div
            className="bg-grigio d-none d-flex align-items-center justify-content-evenly"
            style={{ height: "4em" }}
          ></div>
          <div
            id="player"
            className="d-none d-lg-flex  h-100 align-content-center"
          >
            <Button>
              <i className="bi bi-shuffle"></i>
            </Button>
            <Button>
              <i className="bi bi-skip-backward-fill"></i>
            </Button>
            <Button className="fs-1" onClick={toggleAudio}>
              <i className="bi bi-play-fill d-flex"></i>
            </Button>
            <Button>
              <i className="bi bi-fast-forward-fill"></i>
            </Button>
            <Button>
              <i className="bi bi-repeat"></i>
            </Button>
          </div>
          <div
            id="centralLogo"
            className="d-none d-lg-flex align-items-center"
            style={{ height: "3em" }}
          >
            <img src={apple} />
          </div>
          <div id="range" className="d-none d-lg-flex align-items-center">
            <Form.Range id="vol" style={{ width: "6em" }} />
          </div>
          <div className="d-none d-lg-flex align-items-center">
            <Button variant="danger">
              <i className="bi bi-person-fill" style={{ height: "2em" }}></i>
              Accedi
            </Button>
          </div>

          <Form className="d-flex position-relative mx-1 d-lg-none">
            <Button
              id="search-btn"
              variant="outline-danger"
              className="border-border-1 border-white"
            >
              <i className="bi bi-search d-flex me-0 "></i>
            </Button>
            <Form.Control
              id="cerca"
              type="search"
              placeholder="cerca"
              className="me-2 my-4  bg-neroChiaro"
              aria-label="Search"
              style={{ height: "1.8em", borderLeft: "0" }}
            />
          </Form>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar2;
