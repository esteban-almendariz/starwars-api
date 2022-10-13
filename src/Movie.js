import './Movie.css'

const Movie = ({ movies }) => {

    return (
        <div className='movie-container'>
            {movies.map(mov => (
                <div className='info-container'>
                    <h1>{mov.title}</h1>
                    <p>{mov.openingText}</p>
                </div>
            ))}

        </div>
    )
}

export default Movie;