let originalState = {
	all: [],
	active: {}
};

const notes = ( state = originalState, action ) => {
	switch(action.type) {
		case 'GET_ALL_NOTES': {
			originalState = {
				...state,
				all: action.payload
			};
			return originalState; 
		};
		case 'CREATE_NOTE': {
			originalState = {
				...state, 
				all: action.payload
			};
			return originalState; 
		};
		case 'DELETE_ACTIVE_NOTE': {
			originalState = {
				...state, 
				all: action.payload
			};
			return originalState; 
		};
		case 'SET_TO_ACTIVE_NOTE': {
			originalState = {
				...state,
				active: action.payload
			};
			return originalState; 
		};
		case 'UPDATE_ACTIVE_NOTE_FILENAME': {
			originalState = {
				...state,
				active: {
					...state.active,
					filename: action.payload
				}
			};
			return originalState;
		};
		case 'UPDATE_ACTIVE_NOTE_CONTENT': {
			originalState = {
				...state,
				active: {
					...state.active,
					content: action.payload
				}
			};
			return originalState;
		};
		case 'SAVE_ACTIVE_NOTE':  {
			originalState = {
				...state, 
				all: action.payload
			}
		};
		case 'INITIALIZE_NOTES':  {
			originalState = {
				...state, 
				all: action.payload
			}
		};
		default: {
			return originalState;
		};
	};
};

export default notes;