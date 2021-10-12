import { auth, fireauth } from '../../firebase/firebase';
import { fetchFavorites, favoritesFailed } from './favoritesActions';

export const requestLogin = () => {
    return {
        type: 'LOGIN_REQUEST'
    }
}
  
export const receiveLogin = (user) => {
    return {
        type: 'LOGIN_SUCCESS',
        user
    }
}
  
export const loginError = (message) => {
    return {
        type: 'LOGIN_FAILURE',
        message
    }
}

export const loginUser = (creds) => (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))

    return auth.signInWithEmailAndPassword(creds.username, creds.password)
    .then(() => {
        var user = auth.currentUser;
        localStorage.setItem('user', JSON.stringify(user));
        // Dispatch the success action
        dispatch(fetchFavorites());
        dispatch(receiveLogin(user));
    })
    .catch(error => dispatch(loginError(error.message)))
};

export const requestLogout = () => {
    return {
      type: 'LOGOUT_REQUEST'
    }
}
  
export const receiveLogout = () => {
    return {
      type: 'LOGOUT_SUCCESS'
    }
}

// Logs the user out
export const logoutUser = () => (dispatch) => {
    dispatch(requestLogout())
    auth.signOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
    localStorage.removeItem('user');
    dispatch(favoritesFailed("Error 401: Unauthorized"));
    dispatch(receiveLogout())
}

// -------------------- Google Auth -------------

export const googleLogin = () => (dispatch) => {
    const provider = new fireauth.GoogleAuthProvider();

    auth.signInWithPopup(provider)
        .then((result) => {
            var user = result.user;
            localStorage.setItem('user', JSON.stringify(user));
            // Dispatch the success action
            dispatch(fetchFavorites());
            dispatch(receiveLogin(user));
        })
        .catch((error) => {
            dispatch(loginError(error.message));
        });
}