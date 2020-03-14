import React from 'react';
import './datagrid.scss';


const DataGrid = ({ listPerson }) => {
  const persons = listPerson.map(item => {
    const { id, ...itemProps } = item;
    return (
      <div key={id} className="person">
        <div className="person__name">{item.name}</div>
        <div className="person__email">{item.email}</div>
        <div className="person__city">{item.city}</div>
        <div className="person__phone">{item.phone}</div>
        <div className="person__birthday">{item.birthday}</div>
        <div className="person__experience">{item.experience}</div>
        <div className="person__isMarried">{item.isMarried.toString()}</div>
      </div>
    );
  });

  return <div>
    <div key={-1} className="person_header">
      <div className="person__name">Имя</div>
      <div className="person__email">E-mail</div>
      <div className="person__city">City</div>
      <div className="person__phone">Phone</div>
      <div className="person__birthday">Birthday</div>
      <div className="person__experience">Experience</div>
      <div className="person__isMarried">Married</div>
    </div>

    {persons}
  </div>;
}

export default DataGrid;


