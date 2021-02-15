import TokenService from './token-service';
import config from '../config';

const ReviewsApiService = {
    getAllReviews() {
        return fetch(`${config.API_ENDPOINT}/reviews`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    postNewReview(exercise_name, exercise_description, assigned_routine) {
        return fetch(`${config.API_ENDPOINT}/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                exercise_name,
                exercise_description,
            }),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    deleteReview(routine_id) {
        return fetch(`${config.API_ENDPOINT}/reviews/${routine_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : undefined
            )
    }
}

export default ReviewsApiService;