export default (state, action) => {
  switch (action.type) {
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => {
          return user.id !== action.payload;
        })
      }
    case 'ADD_USER':
      return {
        ...state,
        users: [action.payload, ...state.users]
      }
    case 'EDIT_USER':
      const updateUser = action.payload;

      const updateUsers = state.users.map(user => {
        if (user.id === updateUser.id) {
          return updateUser;
        }
        return user;
      })
      return {
        ...state,
        users: updateUsers
      }

    default:
      return state;
  }
}