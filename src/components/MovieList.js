import Movie from "./Movie";
import '../css/MovieList.css';

function MovieList(props){
    

    return(
        <div className="main">
      {  props.data.map((obj,i)=>(
            <Movie commentHandler={props.commentHandler} key={i} data={obj}/>
        ))
        }
        </div>
    )
}

export default MovieList;