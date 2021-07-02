
export const increment = () => dispatch =>{
    dispatch({
        type:"INCREMENT"
    })
}

export const decrement = () => dispatch =>{
    dispatch({
        type:"DECREMENT"
    })
}

export const sign_in = () => dispatch => {
    dispatch({
        type:"SIGN_IN"
    })
}