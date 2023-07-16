import Movie from "./Movie";
import '../css/MovieList.css';

function MovieList(props){
    

    return(
        <div className="main">
      {  props.data.map((obj,i)=>(
            <Movie key={i} data={obj}/>
        ))
        }
        </div>
    )
}

export default MovieList;