import React, {useState} from 'react';
import {useSelector} from "react-redux";
import MovieCard from "../Card/MovieCard";

const SearchResults = () => {
    const {multiSearch} = useSelector(state => state.user.search);
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
                )
                }
            </div>
        </section>

    );
}

export default SearchResults;