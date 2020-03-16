import React from 'react';
import './datagrid.scss';
import { bindActionCreators } from 'redux';
import * as actions from '../../utils/actions';
import { connect } from 'react-redux';


const changeColorSortedColumn = (event) => {

  if (event.target.parentElement.parentElement.className === 'person__name') {
    document.querySelector('#mainGrid').className = "tableContent sortByName";
  }
  if (event.target.parentElement.parentElement.className === 'person__experience') {
    document.querySelector('#mainGrid').className = "tableContent sortByExperience";
  }
  if (event.target.parentElement.className === 'person__isMarried') {
    document.querySelector('#mainGrid').className = "tableContent sortByMarried";
  }
}

const DataGrid = ({ allVisiblePersons, SortByExperienceUp, SortByExperienceDown, SortByTrue, SortByName, selectRow }) => {

  const persons = allVisiblePersons.map(item => {
    const { id, ...itemProps } = item;
    return (
      <div key={id} id={id} className="person">
        <div className="selectorROW"><i className="demo-icon icon-check-empty"></i></div>
        <div className="person__name">{itemProps.name}</div>
        <div className="person__email">{itemProps.email}</div>
        <div className="person__city">{itemProps.city}</div>
        <div className="person__phone">{itemProps.phone}</div>
        <div className="person__birthday">{itemProps.birthday}</div>
        <div className="person__experience">{itemProps.experience}</div>
        <div className="person__isMarried">{itemProps.isMarried ? <i className='demo-icon icon-check'></i> : <i className='demo-icon icon-check-empty'></i>}</div>
      </div>
    );
  });

  return <div className="tableContent" id="mainGrid" onClick={(e) => selectRow(e)}>
    <div key={-1} className="person_header" onClick={(e) => changeColorSortedColumn(e)}>
      <div><i className="demo-icon icon-check-empty"></i></div>
      <div className="person__name">
        <div>Имя</div>
        <div><i className="demo-icon icon-angle-circled-up" onClick={SortByName}></i></div>
      </div>

      <div className="person__email">E-mail</div>
      <div className="person__city">City</div>
      <div className="person__phone">Phone</div>
      <div className="person__birthday">Birthday</div>
      <div className="person__experience"><div>Experience <i className="demo-icon icon-angle-circled-up" onClick={SortByExperienceDown}></i><i className="demo-icon icon-angle-circled-down" onClick={SortByExperienceUp}></i></div></div>
      <div className="person__isMarried">Married<i className="demo-icon icon-check" onClick={SortByTrue}></i></div>
    </div>

    {persons}
  </div>;
}


const mapStateToProps = (state) => {
  return {
    allVisiblePersons: state.visible
  }
};



const mapDispatchToProps = (dispatch) => {
  const { RefreshTable, SortByExperienceUp, SortByExperienceDown, SortByTrue, SortByName, selectRow } = bindActionCreators(actions, dispatch);

  return {
    RefreshTable,
    SortByExperienceUp,
    SortByExperienceDown,
    SortByTrue,
    SortByName,
    selectRow
  }
};
connect(mapStateToProps, mapDispatchToProps)(DataGrid);
export default connect(mapStateToProps, mapDispatchToProps)(DataGrid);


