import jsonPlaceholder from '../apis/jsonPlaceholder.js';


export const fetchPosts = () => {

    return async (dispatch, getState) => {

        const response = await jsonPlaceholder.get('/posts')
    
    
        dispatch({
            type: 'FETCH_POSTS', 
            payload: response
        })
    }
    }

