import DATA from './DATAJSON';


const reducer = (state = {
  original: [...DATA],
  visible: [...DATA],
  searchString: 'arm',
  selectedRows: []
},
  action) => {
  switch (action.type) {

    case 'deleteRow': {
      if (state.selectedRows !== null)
        if (state.selectedRows.length > 0) {
          for (let i = 0; i < state.selectedRows.length; i++) {
            state.visible[state.selectedRows[i]].name = "---";
          }
        }

      const resultSearch = state.visible.filter(function (e) {
        return (e.name !== '---');
      });

      return {
        ...state,
        visible: [...resultSearch],
        selectedRows: []
      }
    }


    case 'selectRow': {

      const numberSelectedRow = action.payload.target.parentElement.parentElement.id;
      const classNameSelectedRow = action.payload.target.className;
      const parentSelectedRow = action.payload.target.parentElement.className;
      if (classNameSelectedRow === 'demo-icon icon-check-empty' && parentSelectedRow === 'selectorROW') {
        action.payload.target.className = 'demo-icon icon-check';
        action.payload.target.parentElement.parentElement.classList.toggle('selected');
        state.selectedRows.push(numberSelectedRow);
      }
      else
        if (classNameSelectedRow === 'demo-icon icon-check' && parentSelectedRow === 'selectorROW') {
          action.payload.target.className = 'demo-icon icon-check-empty';
          action.payload.target.parentElement.parentElement.classList.toggle('selected');
          const arrayWithoutCurrentValue = state.selectedRows.filter((el) => el !== numberSelectedRow);
          state.selectedRows = [...arrayWithoutCurrentValue]
        }
      return state;
    }

    case 'RefreshTable': {
      window.location.reload(true);
      return {
        ...state
      }
    }

    case 'SortByName': {
      state.visible.sort((a, b) => a.name > b.name ? 1 : -1);
      return {
        ...state,
        visible: [...state.visible],
      }
    }

    case 'SortByExperienceUp': {
      state.visible.sort((a, b) => a.experience < b.experience ? 1 : -1);
      return {
        ...state,
        visible: [...state.visible],
      }
    }

    case 'SortByExperienceDown': {
      state.visible.sort((a, b) => a.experience > b.experience ? 1 : -1);
      return {
        ...state,
        visible: [...state.visible],
      }
    }

    case 'SortByTrue': {
      const resultSearch = state.visible.filter(function (e) {
        return (e.isMarried === true);
      });
      return {
        ...state,
        visible: [...resultSearch],
      }
    }

    case 'Search': {

      const sst = document.querySelector('.searchBar').value.toLowerCase();
      const resultSearch = state.visible.filter(function (e) {
        return (e.name.toLowerCase().indexOf(sst) > -1) || (e.city.toLowerCase().indexOf(sst) > -1);
      });
      return {
        ...state,
        visible: [...resultSearch],
      }
    }


    case 'ChangeSearchString': {
      state.searchString = action.payload;
      return {
        state
      }
    }



    case 'SaveTableToCSV': {


      const rows = [];
      const header = [
        'Name',
        'E-mail',
        'City',
        'Phone',
        'Birthday',
        'Experience',
        'IsMarried'
      ];
      rows.push(header);

      state.visible.forEach(element => {

        const row = [
          element.name,
          element.email,
          element.city,
          element.phone,
          element.birthday,
          element.experience,
          element.isMarried
        ];

        rows.push(row);
      });


      let csvContent = "data:text/csv;charset=utf-8," + rows.map(e => e.join(",")).join("\n");

      var encodedUri = encodeURI(csvContent);
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "datagrid.csv");
      document.body.appendChild(link); // Required for FF

      link.click();

      return state;
    }

    default: return state;
  }
};

export default reducer;