export const setMe = (me) => {
    return {
        type: 'SET_ME',
        data: me
    }
}

export const getMe = () => {
    return {
        type: 'GET_ME'
    }
}