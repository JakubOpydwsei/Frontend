function TableDataReducer(state, action) {
    switch (action.type) {
      case "SORT_BY_USER":
        return [...state].sort((a, b) => {
          const userA = a.user?.username || "";
          const userB = b.user?.username || "";
          
          if (action.order === "asc") {
            return userA.localeCompare(userB);
          } else if (action.order === "desc") {
            return userB.localeCompare(userA);
          } else {
            return 0;
          }
        });
  
      case "SORT_BY_TITLE":
        return [...state].sort((a, b) => {
          const titleA = a.post?.title || "";
          const titleB = b.post?.title || "";
          
          if (action.order === "asc") {
            return titleA.localeCompare(titleB);
          } else if (action.order === "desc") {
            return titleB.localeCompare(titleA);
          } else {
            return 0;
          }
        });
  
      case "SORT_BY_COMMENTS":
        return [...state].sort((a, b) => {
          const commentsA = a.comments.length;
          const commentsB = b.comments.length;
          
          if (action.order === "asc") {
            return commentsA - commentsB;
          } else if (action.order === "desc") {
            return commentsB - commentsA;
          } else {
            return 0;
          }
        });
  
      default:
        return state;
    }
  }
  
  export default TableDataReducer;
  