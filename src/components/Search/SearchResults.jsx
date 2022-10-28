import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import MovieCard from "../Card/MovieCard";
import MovieModal from "../Modal/MovieModal";
import Container from "../../commons/Container";
import Row from "../../commons/Row";

const SearchResults = () => {
    const {multiSearch} = useSelector(state => state.user.search);
    const {movie, serie} = useSelector(state => state.movies.data)
    const [isActiveModal, setIsActiveModal] = useState(false);


    const moviesResults = multiSearch?.filter((object, index) => object.media_type === "movie" ? object : null)
    const seriesResults = multiSearch?.filter((object, index) => object.media_type === "tv" ? object : null)

    useEffect(() => {
        console.log(moviesResults)
    }, [multiSearch])
    console.log(moviesResults)

    return moviesResults || seriesResults ?
        <Container>
            <h2>Film</h2>
            <div className='watchlist'>
                {multiSearch && moviesResults.map((object, index) => (
                    <div className="watchlist-item" key={index}>
                        <MovieCard
                            type="movie"
                            title={object.original_title}
                            data={object}
                            isActiveModal={isActiveModal}
                            setIsActiveModal={setIsActiveModal}
                        />
                    </div>
                ))}
            </div>
            <h2>Séries</h2>
            <div className="watchlist">
                {multiSearch && seriesResults.map((object, index) => (
                    <div className="watchlist-item" key={index}>
                        <MovieCard
                            type="tv"
                            title={object.original_name}
                            data={object}
                            isActiveModal={isActiveModal}
                            setIsActiveModal={setIsActiveModal}
                        />
                    </div>
                ))}
            </div>
            {isActiveModal && serie &&
                <MovieModal
                    type='tv'
                    title={serie.original_name}
                    movie={serie}
                    isActiveModal={isActiveModal}
                    setIsActiveModal={setIsActiveModal}
                />
            }
            {isActiveModal && movie &&
                <MovieModal
                    type="movie"
                    title={movie.original_title}
                    movie={movie}
                    isActiveModal={isActiveModal}
                    setIsActiveModal={setIsActiveModal}
                />
            }
        </Container>
        :
        <Container>
            <Row className='center'>
                <p className='no-result'>
                    Pas de <span>résultats</span>, vérifiez les <span>termes </span> de votre recherche</p>
            </Row>
        </Container>

}

export default SearchResults;