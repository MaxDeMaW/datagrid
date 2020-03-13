import React from 'react';


const DataGrid = ({ listPerson }) => {

  const persons = listPerson.map(item => {
    const { id, ...itemProps } = item;
    return (
      <div key={id}>
        <p>{item.name}</p>
      </div>
    );
  });

  return <div>{persons}</div>;
}

export default DataGrid;
