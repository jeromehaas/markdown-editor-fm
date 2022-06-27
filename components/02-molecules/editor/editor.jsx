import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { javascript } from '@codemirror/lang-javascript';
import { useSelector, useDispatch } from 'react-redux';
import { updateActiveNoteContent } from 'redux/actions/notes';
import { Tag } from 'components/01-atoms/tag/tag';
import { previewToggleFocus } from 'redux/actions/preview';

const Editor = () => {

  const dispatch = useDispatch();
  const activeNote = useSelector(state => state.notes.active);
  const previewFocus = useSelector(state => state.preview.focus);

  return (
    <div className="editor">
      <Tag className="editor__tag" text="markdown" icon={previewFocus === false ? 'eye' : 'eye-closed'} onClick={() => { dispatch(previewToggleFocus(previewFocus)) }} />
      <textarea className="editor__textarea" cols="30" spellCheck={false} rows="10" value={activeNote ? activeNote.content : ''} onChange={(event) => dispatch(updateActiveNoteContent(event.target.value))}></textarea>
    </div>
  );

};

export {
  Editor
};