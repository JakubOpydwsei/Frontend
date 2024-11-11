function TableDataReducer(state, action) {
  switch (action.type) {
    case "INIT_DATA":
      // console.log(action.data)
      return action.data;
    case "SORT_BY_USER":
      // console.log(state);
      if (action.order === "asc") {
        return [
          ...state.sort((a, b) =>
            a.user.username.localeCompare(b.user.username)
          ),
        ];
      }
      if (action.order === "desc") {
        return [
          ...state.sort((a, b) =>
            b.user.username.localeCompare(a.user.username)
          ),
        ];
      }
      // if (action.order === "def") {
      //   return [];
      // }
      return 0;

    case "SORT_BY_TITLE":
      if (action.order === "asc") {
        return [
          ...state.sort((a, b) => a.post.title.localeCompare(b.post.title)),
        ];
      }
      if (action.order === "desc") {
        return [
          ...state.sort((a, b) => b.post.title.localeCompare(a.post.title)),
        ];
      }
      // if (action.order === "def") {
      //   return [];
      // }
      return 0;

    case "SORT_BY_COMMENTS":
      if (action.order === "asc") {
        return [
          ...state.sort((a, b) => a.comments.length - b.comments.length),
        ];
      }
      if (action.order === "desc") {
        return [
          ...state.sort((a, b) => b.comments.length - a.comments.length),
        ];
      }
      return 0;

    case "RESET_DATA":
      return action.data;

    default:
      return state;
  }
}

export default TableDataReducer;
