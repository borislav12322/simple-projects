type InitialStateType = {
    theme: string
}

const initState:InitialStateType = {
    theme: 'some',
};

type ActionsType = ChangeThemeACType;

export const themeReducer = (state = initState, action: ActionsType): InitialStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, theme: action.color};
        }
        default:
            return state;
    }
};

export type ChangeThemeACType = {
    type: 'CHANGE-THEME'
    color: string
}

export const changeThemeAC = (color: string): ChangeThemeACType => {
    return {
        type: 'CHANGE-THEME',
        color,
    } as const
};