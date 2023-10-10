import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getMovieReviews, handleFetchError } from "services/movies-api";


const endPoint = '/movie';

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        if (!movieId) {
            return;
        };

        getMovieReviews(endPoint, movieId)
            .then(data => {
                setReviews(data.results);
            })
            .catch(handleFetchError);
    }, [movieId]);

    return <>
        <h3>Reviews:</h3>
       
        {reviews.length !== 0 ?
            <ul>
                {reviews.map(({ id, author, content }) =>
                    <li key={id}>
                        <p><b>Author:</b> {author}</p>
                        <p>{content}</p>
                    </li>)}
            </ul> :
            <p>Sorry! We don't have any reviews for this movie</p>}
    </>
};

export default Reviews;