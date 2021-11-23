const initState: boolean = false


type ActionType = LoadingACType

export const loadingReducer = (state = initState, action: ActionType): boolean => { // fix any
    switch (action.type) {
        case 'LOAD': {
            let newState = state
            newState = action.value
            return newState
        }
        default:
            return state
    }
}

type LoadingACType = ReturnType<typeof loadingAC>;

export const loadingAC = (value: boolean) => {
    return {
        type: "LOAD",
        value
    } as const
} // fix any