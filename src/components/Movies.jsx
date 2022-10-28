import { useState } from "react";

const genres = ['animation', 'classic', 'comedy', 'drama', 'horror', 'family', 'mystery']

function Movies() {
    const [movieList, setMovieList] = useState() //creating a state variable called movie list

    const getMovies = (genre) => {
        fetch(`https://api.sampleapis.com/movies/${genre}`)
            .then(responce => responce.json()) //sets movie list equal to the json part that is returning
            .then(setMovieList)
            .catch(console.error)
    }
    //listening to movie list
    return (
        <>
            <div className='button-list'>
                {genres.map(genre => (
                    <button key={genre} onClick={() => getMovies(genre)}>{genre.toUpperCase()}</button>
                ))}
            </div>
            <div className='movie-list'>
                {!movieList
                    ? <p>Pick a Genre, any Genre!</p>
                    : movieList?.map(movie => (
                        <p key={movie.id}>{movie.title}</p>
                    ))} 
            </div> 
        </>
    )
}

export default Movies