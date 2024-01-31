const initState = {
	isLoading: false,
}
export type LoadingState = typeof initState

export const loadingReducer = (
	state: LoadingState = initState,
	action: LoadingActionType
): LoadingState => {
	// fix any
	switch (action.type) {
		// пишет студент  // need to fix
		case 'CHANGE_LOADING':
			return { ...state, isLoading: action.isLoading }
		default:
			return state
	}
}

type LoadingActionType = {
	type: 'CHANGE_LOADING'
	isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
	type: 'CHANGE_LOADING',
	isLoading,
})
