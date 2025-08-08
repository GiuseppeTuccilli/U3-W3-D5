import { Form, Button } from "react-bootstrap";
import apple from "../../assets/logos/apple-white.svg";
import music from "../../assets/logos/music-white.svg";
import { useSelector } from "react-redux";

import { useRef } from "react";

const MyNavbar2 = () => {
  const audio = useSelector((state) => {
    return state.audio.audio;
  });

  const song = new Audio(audio);

  const playBtn = useRef();
  const pauseBtn = useRef();
  const vol = useRef();

  song.volume = 0.5;

  const playPause = function () {
    if (song.paused) {
      song.play();
      playBtn.current.classList.add("d-none");
      pauseBtn.current.classList.remove("d-none");
    } else {
      song.pause();
      playBtn.current.classList.remove("d-none");
      pauseBtn.current.classList.add("d-none");
    }
    console.log("cliccato");
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
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
            <Button
              className="fs-1"
              onClick={() => {
                playPause();
              }}
            >
              <i className="bi bi-play-fill d-flex" ref={playBtn}></i>
              <i className="bi bi-pause-fill d-flex d-none" ref={pauseBtn}></i>
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
            <Form.Range
              id="vol"
              style={{ width: "6em" }}
              ref={vol}
              onChange={(e) => {
                song.volume = e.target.value / 100;
              }}
            />
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
