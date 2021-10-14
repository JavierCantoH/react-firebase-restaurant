import { auth, firestore } from '../../firebase/firebase';

export const favoritesLoading = () => ({
    type: 'FAVORITES_LOADING'
});

export const favoritesFailed = (errmess) => ({
    type: 'FAVORITES_FAILED',
    payload: errmess
});

export const addFavorites = (favorites) => ({
    type: 'ADD_FAVORITES',
    payload: favorites
});

export const postFavorite = (dishId) => (dispatch) => {

    if (!auth.currentUser) {
        console.log('No user logged in!');
        return;
    }

    return firestore.collection('favorites').add({
        user: auth.currentUser.uid,
        dish: dishId
    })
    .then(docRef => {
        firestore.collection('favorites').doc(docRef.id).get()
            .then(doc => {
                if (doc.exists) {
                    dispatch(fetchFavorites())
                    alert('Favorite added...');
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            });
    })
    .catch(error => dispatch(favoritesFailed(error.message)));
}

export const deleteFavorite = (dishId) => (dispatch) => {

    if (!auth.currentUser) {
        console.log('No user logged in!');
        return;
    }

    var user = auth.currentUser;

    return firestore.collection('favorites').where('user', '==', user.uid).where('dish', '==', dishId).get()
    .then(snapshot => {
        console.log(snapshot);
        snapshot.forEach(doc => {
            console.log(doc.id);
            firestore.collection('favorites').doc(doc.id).delete()
            .then(() => {
                dispatch(fetchFavorites());
                alert('Favorite deleted...');
            })
        });
    })
    .catch(error => dispatch(favoritesFailed(error.message)));
};

export const fetchFavorites = () => (dispatch) => {

    if (!auth.currentUser) {
        console.log('No user logged in!');
        return;
    }

    var user = auth.currentUser;

    dispatch(favoritesLoading(true));

    return firestore.collection('favorites').where('user', '==', user.uid).get()
    .then(snapshot => {
        let favorites = { user: user, dishes: []};
        snapshot.forEach(doc => {
            const data = doc.data()
            favorites.dishes.push(data.dish);
        });
        console.log(favorites);
        return favorites;
    })
    .then(favorites => dispatch(addFavorites(favorites)))
    .catch(error => dispatch(favoritesFailed(error.message)));
}

