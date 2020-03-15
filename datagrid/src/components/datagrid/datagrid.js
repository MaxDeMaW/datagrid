import React from 'react';
import './datagrid.scss';
import { bindActionCreators } from 'redux';
import * as actions from '../../utils/actions';
import { connect } from 'react-redux';

const onCkeckPerson = (event) => {
  if (event.target.className === 'demo-icon icon-check-empty')
    console.log(event.target.className);

}

const DataGrid = ({ allVisiblePersons, DeleteElement, SortByExperience }) => {
  const persons = allVisiblePersons.map(item => {
    const { id, ...itemProps } = item;
    return (
      <div key={id} id={id} className="person">
        <div><i className="demo-icon icon-check-empty" onClick={(e) => onCkeckPerson(e)}></i></div>
        <div className="person__name">{itemProps.name}</div>
        <div className="person__email">{itemProps.email}</div>
        <div className="person__city">{itemProps.city}</div>
        <div className="person__phone">{itemProps.phone}</div>
        <div className="person__birthday">{itemProps.birthday}</div>
        <div className="person__experience">{itemProps.experience}</div>
        <div className="person__isMarried">{itemProps.isMarried.toString()}</div>
      </div>
    );
  });

  return <div className="tableContent">
    <div key={-1} className="person_header">
      <div><i className="demo-icon icon-check-empty"></i></div>
      <div className="person__name">
        <div>Имя</div>
        <div><i className="demo-icon icon-angle-circled-up" onClick={DeleteElement}></i><i className="demo-icon icon-angle-circled-down"></i></div>
      </div>

      <div className="person__email">E-mail</div>
      <div className="person__city">City</div>
      <div className="person__phone">Phone</div>
      <div className="person__birthday">Birthday</div>
      <div className="person__experience"><div>Experience <i className="demo-icon icon-angle-circled-up" onClick={SortByExperience}></i><i className="demo-icon icon-angle-circled-down"></i></div></div>
      <div className="person__isMarried">Married</div>
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
  const { DeleteElement, RefreshTable, SortByExperience } = bindActionCreators(actions, dispatch);

  return {
    DeleteElement,
    RefreshTable,
    SortByExperience
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DataGrid);


