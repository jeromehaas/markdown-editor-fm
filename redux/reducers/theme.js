let originalState = {
	active: 'dark'
};

const theme = (state = originalState, action) => {
	switch(action.type) {
		case 'TOGGLE_THEME': {
			originalState = {
				...state, 
				active: state.active === 'dark' ? 'light' : 'dark'
			};
			return originalState;
		};
		default: {
			return originalState;
		};
	};
};

export default theme;