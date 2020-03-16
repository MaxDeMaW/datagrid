import React from 'react';

import { bindActionCreators } from 'redux';
import * as actions from '../../utils/actions';
import { connect } from 'react-redux';

import './header.scss';

function searchB() {
  console.log(document.querySelector('.searchBar').value);
}

const Header = ({ RefreshTable, Search, SaveTableToCSV }) => {
  return (
    <div className="header">
      <div>
        <h1 className='h1'>DATAGRID</h1>
      </div>
      <div>
        <button onClick={SaveTableToCSV}>CSV</button>
        <button onClick={RefreshTable}>Вернуть все записи</button>
        <input className='searchBar' onChange={() => searchB()}></input>
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
  const { SaveTableToCSV, RefreshTable, Search } = bindActionCreators(actions, dispatch);

  return {
    SaveTableToCSV,
    RefreshTable,
    Search
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
