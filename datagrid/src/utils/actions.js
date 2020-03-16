export const deleteRow = () => ({ type: 'deleteRow' });
export const selectRow = (payload) => ({ type: 'selectRow', payload });

export const RefreshTable = () => ({ type: 'RefreshTable' });
export const SortByName = () => ({ type: 'SortByName' });
export const SortByExperienceUp = () => ({ type: 'SortByExperienceUp' });
export const SortByExperienceDown = () => ({ type: 'SortByExperienceDown' });
export const SortByTrue = () => ({ type: 'SortByTrue' });
export const SortByFalse = () => ({ type: 'SortByFalse' });
export const Search = () => ({ type: 'Search' });
export const SaveTableToCSV = () => ({ type: 'SaveTableToCSV' });

