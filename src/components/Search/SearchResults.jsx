import React, {useState} from 'react';
import {useSelector} from "react-redux";
import MovieCard from "../Card/MovieCard";
import MovieModal from "../Modal/MovieModal";

const SearchResults = () => {
    const {multiSearch} = useSelector(state => state.user.search);
    const {movie, serie} = useSelector(state => state.movies.data)
    const [isActiveModal, setIsActiveModal] = useState(false);
    console.log(multiSearch)

    return (
        <section className="container">
            <div className='watchlist'>
                {multiSearch && multiSearch.map((movie, index) =>
                    <div className="watchlist-item" key={index}>
                        <MovieCard
                            type="film"
                            title={ movie.media_type === "movie" ? movie.original_title : movie.original_name}
                            data={movie}
                            isActiveModal={isActiveModal}
                            setIsActiveModal={setIsActiveModal}
                        />
                    </div>
                )}
                {/*{isActiveModal &&*/}
                {/*    <MovieModal*/}
                {/*        title={serie.original_name}*/}
                {/*        movie={serie}*/}
                {/*        isActiveModal={isActiveModal}*/}
                {/*        setIsActiveModal={setIsActiveModal}*/}
                {/*    />*/}
                {/*}*/}
            </div>
        </section>

    );
}

export default SearchResults;