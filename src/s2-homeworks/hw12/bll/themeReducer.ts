const initState = {
	themeId: 1,
}
type InitState = typeof initState

export const themeReducer = (
	state = initState,
	action: ActionTypes
): InitState => {
	// fix any
	switch (action.type) {
		// дописать
		case 'SET_THEME_ID':
			return { ...state, themeId: action.id }
		default:
			return state
	}
}

export const changeThemeId = (id: number) =>
	({ type: 'SET_THEME_ID', id } as const)

type ActionTypes = ReturnType<typeof changeThemeId>
