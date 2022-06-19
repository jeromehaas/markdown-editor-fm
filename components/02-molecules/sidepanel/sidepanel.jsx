import { Button } from 'components/01-atoms/button/button';
import { TextInput } from 'components/01-atoms/text-input/text-input';
import { Subheading } from 'components/01-atoms/subheading/subheading';
import { ThemeToggle } from 'components/01-atoms/theme-toggle/theme-toggle.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getAllNotes, createNote, deleteNote, setToActiveNote } from 'redux/actions/notes';

const Sidepanel = () => {

	const dispatch = useDispatch();
	const notes = useSelector( state => state.notes );
	const activeNote = useSelector( state => state.notes.active );

	useEffect(() => {
		dispatch( getAllNotes() );
		dispatch( setToActiveNote() );
	}, []);

  return (
    <div className="sidepanel sidepanel--light">
      <Subheading className="sidepanel__subheading">My Documents</Subheading>
      <Button className="sidepanel__button" onClick={ () => dispatch( createNote() ) }>New Document</Button>

				<div className="sidepanel__notes">
				{ notes.all.map(( note ) => (
					<TextInput 
						className={` sidepanel__text-input  ${ activeNote.id === note._id ? 'text-input--active' : '' } text-input--read-only `}
						label={ note.dateCreated } 
						value={ note.filename ? note.filename : '' } 
						key={ note._id } 
						onClick={ () => dispatch( setToActiveNote( note._id, note.filename, note.content, note.dateCreated ))}
						onDelete={ () => dispatch( deleteNote( note._id )) }		
						readOnly={ true }
						onChange={ () => console.log('')}
					/>
					))}
				</div>

      <ThemeToggle className="sidepanel__theme-toggle" />
    </div>
  );

};

export {
  Sidepanel
};
