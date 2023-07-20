import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { React, useRef,useState } from 'react';
function ModalMovie({ handleShow, handleClose, show, modalData,commentHandler}) {
  const [comment, setComment] = useState("");
  const commentRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const userComment=commentRef.current.value;
    const newMovie={...modalData,userComment};
    setComment(userComment);
    commentHandler(newMovie,newMovie.id);
    console.log(comment);
  }

  
  async function handleAddFav(e){
    e.preventDefault();
    let url = `${process.env.REACT_APP_SERVER_URL}/movies`;
    let data = {
      t:modalData.title,
      r:modalData.release_date,
      p:modalData.poster_path,
      o:modalData.overview,
      c:modalData.comment
    }
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    let recivedData = await response.json();
    console.log('recivedData', recivedData);
   
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img style={{ width: '100%' }} src={`https://image.tmdb.org/t/p/w500${modalData.poster_path}`} alt={modalData.title} />
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Comment</Form.Label>
              <Form.Control ref={commentRef} type="text" placeholder="Type Your Comment here" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button variant="primary" onClick={(e) => handleAddFav(e)}>
              Add To Favorite
            </Button>
          </Form>
          {modalData.comment ? modalData.comment : "No Comment Added"}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  )
}


export default ModalMovie;