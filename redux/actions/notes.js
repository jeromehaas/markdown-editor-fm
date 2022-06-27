import moment from 'moment';
import store from 'store2';
import note from 'data/welcome';

const INITIALIZE_NOTES = 'INITIALIZE_NOTES';
const initializeNotes = () => async (dispatch) => {
  try {
    const notes = [];
    const notesStorage = store.namespace('notes');
    notesStorage((key, data) => notes.push(data));
    if (notes.length === 0) {
      notes.push(note);
      notesStorage('9999999', note);
      dispatch({ type: INITIALIZE_NOTES, payload: notes })
    }
  } catch (error) { 
		console.log(`🔴 Error: ${error.message}`);
  }
}

const GET_ALL_NOTES = 'GET_ALL_NOTES';
const getAllNotes = () => async (dispatch) => {
	try {
    const notes = [];
    const notesStorage = store.namespace('notes');
    notesStorage((key, data) => notes.push(data));
		dispatch({ type: GET_ALL_NOTES, payload: notes });
	} catch (error) {
		console.log(`🔴 Error: ${error.message}`);
	};
};

const CREATE_NOTE = 'CREATE_NOTE';
const createNote = () => async (dispatch) => {
	try {
    const notes = [];
    const notesStorage = store.namespace('notes');
    const date = moment().format('DD-MM-YYYY');
    const id = (new Date().getTime() * Math.random() * 100000).toString().slice(-7);
    const note = {
      id: id,
      filename: 'untitled.md',
      date: date,
      content: ''
    };
    notesStorage(id, note)
    notesStorage((key, note) => notes.push(note));
		dispatch({ type: CREATE_NOTE, payload: notes });
		dispatch({ type: SET_TO_ACTIVE_NOTE, payload: note });
	} catch (error) {
		console.log(`🔴 Error: ${error.message}`);
	};
};

const DELETE_ACTIVE_NOTE = 'DELETE_ACTIVE_NOTE';
const deleteActiveNote = (id) => async (dispatch) => {
	try {
    const notes = [];
    const notesStorage = store.namespace('notes');
    notesStorage.remove(id);
    notesStorage((key, data) => notes.push(data));
		dispatch({ type: DELETE_ACTIVE_NOTE, payload: notes });
	} catch (error) {
		console.log(`🔴 Error: ${error.message}`);
	};
};

const SET_TO_ACTIVE_NOTE = 'SET_TO_ACTIVE_NOTE';
const setToActiveNote = (id, filename, content, dateCreated) => async (dispatch) => {
	try {
    console.log(id, filename, content);
    if (id !== undefined) {
      const activeNote = { id, filename, content, dateCreated };
			dispatch({ type: SET_TO_ACTIVE_NOTE, payload: activeNote });
    } else {
      const notes = [];
      const notesStorage = store.namespace('notes');
      notesStorage((key, data) => notes.push(data));
      const activeNote = notes[0];
			dispatch({ type: SET_TO_ACTIVE_NOTE, payload: activeNote });
    }
	} catch (error) {
		console.log(`🔴 Error: ${error.message}`);
	};
};

const UPDATE_ACTIVE_NOTE_FILENAME = 'UPDATE_ACTIVE_NOTE_FILENAME';
const updateActiveNoteFilename = ( value ) => async (dispatch) => {
	try {
		dispatch({ type: UPDATE_ACTIVE_NOTE_FILENAME, payload: value })
	} catch (error) {
		console.log(`🔴 Error: ${error.message}`);
	};
};

const UPDATE_ACTIVE_NOTE_CONTENT = 'UPDATE_ACTIVE_NOTE_CONTENT';
const updateActiveNoteContent = ( value ) => async (dispatch) => {
	try {
		dispatch({ type: UPDATE_ACTIVE_NOTE_CONTENT, payload: value });
	} catch (error) {
		console.log(`🔴 Error: ${error.message}`);
	};
};

const SAVE_ACTIVE_NOTE = 'SAVE_ACTIVE_NOTE';
const saveActiveNote = ( activeNote ) => async (dispatch) => {
	try {
    const notesStorage = store.namespace('notes');
    const notes = [];
    notesStorage(activeNote.id, activeNote, activeNote);
    notesStorage((key, data) => notes.push(data));
		dispatch({ type: SAVE_ACTIVE_NOTE, payload: notes });
	} catch (error) {
		console.log(`🔴 Error: ${error.message}`);
	}
}

export {
	getAllNotes,
	createNote,
	deleteActiveNote,
	setToActiveNote,
	updateActiveNoteFilename,
	updateActiveNoteContent,
	saveActiveNote,
  initializeNotes
};