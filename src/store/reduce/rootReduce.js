import actionTypes from '../actions/actionType';


const initState = {
    language: localStorage.getItem('language') ? localStorage.getItem('language') : 'en'
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_LANGUAGE_SUSCESS:  
            localStorage.setItem('language', action.language)
            const storeLanguage =  localStorage.getItem('language')
            state.language = storeLanguage
            return {
                ...state
            }

        case actionTypes.FETCH_GENDER_FAILED:
            state.language = []
            return {
                ...state
            }

        default:
            return state;
    }
}
export default rootReducer
