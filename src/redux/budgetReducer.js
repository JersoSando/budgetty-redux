import { act } from "@testing-library/react"

const initialState = {
    purchases: [],
    budgetLimit: null,
    loading: false
}

export const setLoadingTrue = () => {
    console.log('just called set loading true action')
    return {
        type: 'SET_LOADING_TRUE',
        payload: true
    }
}
export const setLoadingFalse = () => {
    console.log('just called set loading FALSE action')

    return {
        type: 'SET_LOADING_FALSE',
        payload: false
    }
}



const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_LOADING_TRUE': 
            return {
                ...state,
                loading: action.payload
            }
        case 'SET_LOADING_FALSE':
            return {
                ...state,
                loading: action.payload
            }
        default: 
            return state;
    }
}

export default reducer;