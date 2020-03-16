import DATA from './DATAJSON';


const reducer = (state = {
  original: [...DATA],
  visible: [...DATA],
  searchString: 'arm'
},
  action) => {
  switch (action.type) {

    case 'DeleteElement': {
      state.visible.pop();
      state.visible.shift();
      return {
        ...state,
        visible: [...state.visible],
      }
    }

    case 'RefreshTable': {
      state.visible.pop();
      state.visible.shift();
      return {
        ...state,
        visible: [...state.original],
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
      console.log(resultSearch);
      return {
        ...state,
        visible: [...resultSearch],
      }
    }


    case 'ChangeSearchString': {
      console.log(state.searchString);
      state.searchString = action.payload;
      return {
        state
      }
    }



    case 'SaveTableToCSV': {


      const rows = [];

      state.visible.forEach(element => {

        const row = [element.name, element.city];

        rows.push(row);
      });

      // const rows = [
      //   ["name1", "city1", "some other info"],
      //   ["name2", "city2", "more info"]
      // ];



      let csvContent = "data:text/csv;charset=utf-8," + rows.map(e => e.join(",")).join("\n");

      var encodedUri = encodeURI(csvContent);
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "my_data.csv");
      document.body.appendChild(link); // Required for FF

      link.click();

      return state;
    }

    default: return state;
  }
};

export default reducer;