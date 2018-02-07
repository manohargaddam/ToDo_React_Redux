export default (state = "ALL", action) => {
  switch (action.type) {
    case 'FILTER_RESULTS':
      return action.filter;
    default:
      return state;
  }
}