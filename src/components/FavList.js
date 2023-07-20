import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import '../css/FavList.css'
function FavList(){
  
    const [favMovie, setFavMovie] = useState([]);
//const newCommentRef = useRef();
    

    async function handleFavMovie() {
      const url = `${process.env.REACT_APP_SERVER_URL}/movies`;
      let response = await fetch(url);
      let recivedData = await response.json();
      setFavMovie(recivedData);
    }
    async function handleDelete(id){
      const url = `${process.env.REACT_APP_SERVER_URL}/movies/${id}`;
      let response = await fetch(url, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json"
        },
      });
     
      handleFavMovie();
    }

    /*async function handleUpdate(id){
        
        let url = `${process.env.REACT_APP_SERVER_URL}/movies/${id}`;
        let data = {
            newComment:newCommentRef.current.value
        }
        let response = await fetch(url, {
          method: 'PUT',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });
       
      }
*/


    useEffect(() => {
        handleFavMovie();
        
    }, []);
    
    return (
      <div className="main">
        {favMovie.map((movie, id) => (
            
            <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text> {(movie.overview)} </Card.Text>
              <Card.Text> {(movie.comment)} </Card.Text>

                <Button variant="danger" onClick={()=> handleDelete(movie.id)}>Delete</Button>
                <Button variant="success">Update</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
}


export default FavList;




