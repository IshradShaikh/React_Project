import * as actionTypes from "../action";
const initialState = {
	topbar: true,
	loginpage: false,
	islight: false,
	dashboard: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.TOPBAR:
			return {
				...state,
				topbar: !state.topbar,
			};

		case actionTypes.LOGINPAGE:
			return {
				...state,
				loginpage: !state.loginpage,
			};
		case actionTypes.DASHBOARD:
			return {
				...state,
				dashboard: !state.dashboard,
			};

		case actionTypes.ISLIGHT:
			return {
				...state,
				islight: !state.islight,
			};

		default:
			return state;
	}
};

export default reducer;
