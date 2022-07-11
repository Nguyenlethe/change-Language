import actionTypes from '../actions/actionType';



export const changeLanguageSuscess = (Lang) => ({
    type: actionTypes.CHANGE_LANGUAGE_SUSCESS,
    language: Lang
})

export const changeLanguageFailed = () => ({
    type: actionTypes.CHANGE_LANGUAGE_FAILED
})