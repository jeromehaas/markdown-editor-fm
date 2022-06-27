import { useSelector, useDispatch } from 'react-redux';
import { marked } from 'marked';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import { Tag } from 'components/01-atoms/tag/tag';
import { previewToggleFocus } from 'redux/actions/preview';

const Preview = () => {

  const dispatch = useDispatch();
  const activeNote = useSelector(state => state.notes.active);
  const previewFocus = useSelector(state => state.preview.focus);

  return (
    <div className="preview">
      <Tag className="preview__tag" text="Preview" icon={previewFocus === true ? 'eye-closed' : 'eye'} onClick={() => dispatch(previewToggleFocus(previewFocus))} />
      <div className="preview__content">
        <ReactMarkdown>
          {activeNote ? activeNote.content : ''}
        </ReactMarkdown>
      </div>
    </div>
  );

};

export {
  Preview
};