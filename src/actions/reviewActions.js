
import {postJSON} from '../lib/requests';

export const recieveReview =  ({ category, title, text, username }) => {

    // postJSON(`/api/detail/${category}/${title}`, { text, username});

    postJSON(`/api/savereview`, {category, title, text, username});

    return {
        type: 'RECIEVE_REVIEW',
        category,
        title,
        text,
        username
    }
}

