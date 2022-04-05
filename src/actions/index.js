import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder.js';


export const fetchPosts = () => {

    return async (dispatch, getState) => {

        const response = await jsonPlaceholder.get('/posts')
    
    
        dispatch({
            type: 'FETCH_POSTS', 
            payload: response.data
        })
    }
};

export const fetchUser = (id) => {
    return (dispatch) => {
       
        _fetchUser(id, dispatch);
       
    }
}

const _fetchUser = _.memoize( async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`)


    dispatch({
        type: 'FETCH_USER', 
        payload: response.data
    })
})

// export const fetchUser = function(id) {

//     return _.memoize(async function (dispatch) {

//         const response = await jsonPlaceholder.get(`/users/${id}`)


//         dispatch({
//             type: 'FETCH_USER', 
//             payload: response.data
//         })
//     })
// }

