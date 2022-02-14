import React from 'react'

const MovieCard = ({ data }) => {
    return (
        <div className="cols-3">
            <div className="movie-card">
                <div className="movie-img">
                    <img src={data.Poster} alt={data.Title} />
                </div>
                <div className="movie-body">
                    <p>{data.Title}</p>
                    <div className="movie-info d-flex-1">
                        <span>R.Date <strong>:{data.Year}</strong></span>
                        <span>Type<strong>:{data.Type}</strong></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard