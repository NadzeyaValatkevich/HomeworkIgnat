const SWITH_THEME = 'SWITCH-THEME'
export type ThemesType = 'dark' | 'red' | 'some'

export enum ThemeEnum {
    'dark' = 'dark',
    'red' = 'red',
    'some' = 'some'
}

const initState = {
    theme: 'dark' as ThemeEnum
}
export type InitStateType = typeof initState

export const themeReducer = (state: InitStateType = initState, action: changeThemeActionType): InitStateType => {
    console.log(state)
    switch (action.type) {
        case SWITH_THEME: {
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};

export const changeThemeC = (theme: ThemeEnum) => ({
    type: SWITH_THEME,
    theme
} as const);

type changeThemeActionType = ReturnType<typeof changeThemeC>