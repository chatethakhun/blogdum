
const initialState = {
    isLogin: false,
}

export const login = (state = initialState, action) => {
    //console.log("action", action)
    switch (action.type) {
      case "LOG_IN":
        return {
            isLogin: true
        }
      default:
        return state
    }
  }
