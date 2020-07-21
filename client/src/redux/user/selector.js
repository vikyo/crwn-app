import { createSelector } from "reselect";

// Basic syntax
// createSelector([<array of redux state>], ()=>{})

// Function to select the user slcie from redux state
const selectUser = (state) => {
  return state.user;
};

// Function to select the current user
export const selectCurrentUser = createSelector([selectUser], (user) => {
  return user.currentUser;
});
