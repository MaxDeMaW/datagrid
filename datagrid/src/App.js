import React from 'react';
import Header from './components/header';
import DataGrid from './components/datagrid/datagrid';
import './App.css';

import { createStore, bindActionCreators } from 'redux';

import reducer from './utils/reducer';
import * as actions from './utils/actions';
const store = createStore(reducer);
const { dispatch } = store;

const { ShowJSON } = bindActionCreators(actions, dispatch);

function App() {
  return (
    <>
      <Header />
      <DataGrid listPerson={store.getState()} />
    </>
  );
}

export default App;
