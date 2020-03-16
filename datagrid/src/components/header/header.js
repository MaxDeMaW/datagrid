import React from 'react';

import { bindActionCreators } from 'redux';
import * as actions from '../../utils/actions';
import { connect } from 'react-redux';

import './header.scss';


const Header = ({ RefreshTable, Search, SaveTableToCSV, deleteRow }) => {
  return (
    <div className="header">
      <div>
        <h1 className='h1'>DATAGRID</h1>
      </div>
      <div>
        <button onClick={SaveTableToCSV}>CSV</button>
        <button onClick={deleteRow}><i className="demo-icon icon-trash-empty"></i></button>
        <button onClick={RefreshTable}>Обновить</button>
        <input className='searchBar'></input>
        <button onClick={Search}><i className="demo-icon icon-search"></i> </button>
      </div>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    allVisiblePersons: state.visible
  }
};



const mapDispatchToProps = (dispatch) => {
  const { SaveTableToCSV, RefreshTable, Search, deleteRow } = bindActionCreators(actions, dispatch);

  return {
    SaveTableToCSV,
    RefreshTable,
    Search,
    deleteRow
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
