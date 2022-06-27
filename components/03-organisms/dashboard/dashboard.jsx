import { useEffect } from 'react';
import { Header } from 'components/02-molecules/header/header';
import { Sidepanel } from 'components/02-molecules/sidepanel/sidepanel';
import { useSelector, useDispatch } from 'react-redux';
import { getAllNotes } from 'redux/actions/notes';
import { toggleMenu } from 'redux/actions/menu';
import { Editor } from 'components/02-molecules/editor/editor';
import { Preview } from 'components/02-molecules/preview/preview';
import { DialogBox } from 'components/02-molecules/dialog-box/dialog-box';
import { Fragment } from 'react';
import cookie from 'js-cookie';
import jwt from 'jsonwebtoken';
import { validateSession } from 'redux/actions/session';
import { useRouter } from 'next/router';
import { resetLoginFormInput } from 'redux/actions/login-form';

const Dashboard = () => {

  const dispatch = useDispatch();
  const router = useRouter();
  const activeNote = useSelector(state => state.notes.active);
  const currentStatus = useSelector(state => state.menu.status);
  const previewFocus = useSelector(state => state.preview.focus);



  return (
    <Fragment>
      <div className={`dashboard ${currentStatus === 'hidden' ? 'dashboard--hide-menu' : ''} ${previewFocus === true ? 'dashboard--preview-focus' : ''}`}>
        <Header />
        <Sidepanel />
        <Editor />
        <Preview />
      </div>
      <DialogBox className="dashboard__dialog-box" />
    </Fragment>
  );

};


export {
  Dashboard
};