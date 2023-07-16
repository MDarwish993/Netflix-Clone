import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalMovie from './ModalMovie';
import { useState } from 'react';

function Movie(props) {


  const [show, setShow] = useState(false);
  const [seeMore, setSeeMore] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${props.data.poster_path}`} />
        <Card.Body>
          <Card.Title>{props.data.title}</Card.Title>
          {seeMore ?
            <>
              <Card.Text>
                {(props.data.overview).substring(0, 200)}
                <Button variant="link" onClick={() => setSeeMore(false)}>see More</Button>
              </Card.Text>
              
            </>
            :
            <>
             <Card.Text>
                {(props.data.overview)}
                <Button variant="link" onClick={() => setSeeMore(true)}>see Less</Button>
              </Card.Text>
              
            </>
          }

          <Button onClick={handleShow} variant="primary">Show Modal</Button>
        </Card.Body>
      </Card>
      <ModalMovie modalData={props.data} handleClose={handleClose} handleShow={handleShow} show={show} />
    </div>
  )
}

export default Movie;