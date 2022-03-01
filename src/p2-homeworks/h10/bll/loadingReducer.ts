const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: LoadingType): typeof initState=> { // fix any
    switch (action.type) {
        case 'ADD-LOADING': {
            return {...state,

                isLoading: action.isLoading}
        }
        default: return state
    }
}

export const loadingAC = (isLoading:boolean)=> {
    return  { type: 'ADD-LOADING',    isLoading} as const
}

type LoadingType = ReturnType<typeof loadingAC>