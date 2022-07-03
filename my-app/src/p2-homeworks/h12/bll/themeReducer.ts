const SWITH_THEME = 'SWITH-THEME';

type themeStateType = {
    theme: string
};

const initState = {
    theme: 'some'
};

export const themeReducer = (state: themeStateType = initState, action: changeThemeActionType): themeStateType => {
    switch (action.type) {
        case SWITH_THEME: {
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};

export const changeThemeC = (theme: string) => ({
    type: SWITH_THEME,
    theme
} as const);

type changeThemeActionType = ReturnType<typeof changeThemeC>