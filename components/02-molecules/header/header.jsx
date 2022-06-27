import { Hamburger } from 'components/01-atoms/hamburger/hamburger';
import { Logo } from 'components/01-atoms/logo/logo';
import { TextInput } from 'components/01-atoms/text-input/text-input';
import { Button } from 'components/01-atoms/button/button';
import { Icon } from 'components/01-atoms/icon/icon';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { toggleMenu } from 'redux/actions/menu';
import { deleteActiveNote, updateActiveNoteFilename, saveActiveNote } from 'redux/actions/notes/';
import { showDialogBoxDeleteNote } from 'redux/actions/dialog-box';

const Header = () => {

  const dispatch = useDispatch();
  const activeNote = useSelector(state => state.notes.active);
  const currentStatus = useSelector(state => state.menu.status);

  return (
    <div className="header">
      <Hamburger className="header__hamburger" currentStatus={currentStatus} onClick={() => dispatch(toggleMenu(currentStatus))} />
      <Logo className="header__logo" />
      {activeNote && (
        <TextInput
          className="header__text-input"
          label={activeNote ? activeNote.dateCreated : ''}
          value={activeNote ? activeNote.filename : ''}
          onChange={(event) => dispatch(updateActiveNoteFilename(event.target.value))}
        />)}
      < Icon className="header__delete-icon icon--grey icon--medium" symbol="trash" onClick={() => dispatch(showDialogBoxDeleteNote())} />
      <Button className="header__button button--hide-text-on-small" symbol="save" onClick={() => dispatch(saveActiveNote(activeNote))} >Save Changes</Button>
    </div>
  );

};

export {
  Header
};