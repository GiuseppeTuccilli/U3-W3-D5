import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Col, Card } from "react-bootstrap";

const Song = () => {
  const dispatch = useDispatch();

  const nuove = useSelector((state) => {
    return state.nuove;
  });

  useEffect(() => {
    dispatch((dispatch, getState) => {
      fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("errore");
          }
        })
        .then((data) => {
          console.log(data);
          dispatch({
            type: "GET_NUOVE",
            payload: data.data,
          });
        })
        .catch((er) => {
          console.log(er);
        });
    });
  }, []);

  console.log(nuove);

  return (
    <>
      {nuove.nuove.map((song) => {
        return (
          <Col xs={4} lg={3} key={song.id}>
            <Card className="bg-grigio">
              <Card.Img
                variant="top"
                src={song.album.cover_big}
                style={{ borderRadius: "3px" }}
              />
              <Card.Body>
                <Card.Title className="text-white">
                  {song.album.title}
                </Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </>
  );
};

export default Song;
