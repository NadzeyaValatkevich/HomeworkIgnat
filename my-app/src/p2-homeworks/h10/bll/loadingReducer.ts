 export type StateType = {
    isloading:  boolean
}

const initState = {
    isloading: false
};

type LoadingActionType = {
    type:"SHOW-LOADING",
    isloading: boolean
};

export const loadingReducer = (state = initState, action: LoadingActionType): StateType => {
    switch (action.type) {
        case "SHOW-LOADING": {
            return {...state, isloading: action.isloading}
        }
        default: return state
    }
}

export const loadingAC = (isloading:boolean): LoadingActionType => {
    return {
        type: "SHOW-LOADING",
        isloading
    }
}