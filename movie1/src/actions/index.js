import {
  editData,
  getData,
  postData,
  encrypt,
  validatePassword,
} from '../service';

//  movies

export const getMovieData = () => async (dispatch) => {
  const { data } = await getData('movies');
  dispatch({
    type: 'MOVIES_DATA',
    payload: data,
  });
};

export const postMovieData = (data) => async (dispatch) => {
  await postData('movies', data);
  dispatch(getMovieData());
};

export const editMovieData = (id) => async (dispatch) => {
  const { data } = await getData(`movies/${id}`);
  dispatch({
    type: 'EDIT_MOVIE_DATA',
    payload: data,
  });
};
export const edittedMovieData = (data, id) => async (dispatch) => {
  await editData(`movies/${id}`, data);
  dispatch(getMovieData());
};

// reviews

export const getReviewData = () => async (dispatch) => {
  const { data } = await getData('reviews');
  dispatch({
    type: 'REVIEW_DATA',
    payload: data,
  });
};
export const postReviewData = (data) => async (dispatch) => {
  await postData('reviews', data);
  dispatch(getReviewData());
};

// forum
export const getForumData = () => async (dispatch) => {
  const { data } = await getData('forum');
  dispatch({
    type: 'FORUM_DATA',
    payload: data,
  });
};

export const postForumData = (data) => async (dispatch) => {
  await postData('forum', data);
  dispatch(getForumData());
};

export const viewForumData = (id) => async (dispatch) => {
  const { data } = await getData(`forum/${id}`);
  dispatch({
    type: 'VIEW_FORUM_DATA',
    payload: data,
  });
};

//  signUp

export const signUpAction = (credentials, navigate) => async (dispatch) => {
  const { data } = await getData('users');
  const user = data.find((d) => d.email === credentials.email);
  if (user) {
    alert('User already exists');
  } else {
    let { phoneNumber, ...restValues } = credentials;
    phoneNumber = encrypt(phoneNumber);
    restValues = { ...restValues, phoneNumber };
    await postData('users', restValues);
    navigate();
  }
};

// login
export const loginInAction = (credentials, navigate) => async (dispatch) => {
  const { data } = await getData('users');
  const user = data.find((d) => d.email === credentials.email);
  if (!user) {
    alert("User doesn't exist");
  } else {
    if (validatePassword(user.phoneNumber, credentials.phoneNumber)) {
      sessionStorage.setItem(
        'user',
        JSON.stringify({ user: user.email, status: true })
      );
      dispatch({ type: 'LOGIN', payload: { user: user.email, status: true } });
      navigate();
    } else {
      alert('invalid');
    }
  }
};

//  logout
export const logOut = () => async (dispatch) => {
  await sessionStorage.removeItem('user');
  dispatch({ type: 'LOGIN', payload: null });
};
