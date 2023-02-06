import { combineReducers } from 'redux';

const initial = {
  data: [],
  editMovie: {},
  viewMovieData: {},
  reviewData: [],
  forumData: [],
  viewForum: {},
  userLoggedIn: JSON.parse(sessionStorage.getItem('user')),
};
const postReducer = (state = initial, action) => {
  switch (action.type) {
    case 'MOVIES_DATA':
      return { ...state, data: action.payload };
    case 'EDIT_MOVIE_DATA':
      return { ...state, editMovie: action.payload };
    case 'VIEW_MOVIE_DATA':
      return { ...state, viewMovieData: action.payload };
    case 'REVIEW_DATA':
      return { ...state, reviewData: action.payload };
    case 'FORUM_DATA':
      return { ...state, forumData: action.payload };
    case 'VIEW_FORUM_DATA':
      return { ...state, viewForum: action.payload };
    case 'LOGIN':
      return { ...state, userLoggedIn: action.payload };
    default:
      return state;
  }
};
export default combineReducers({ postReducer });
