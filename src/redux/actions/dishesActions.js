import { firestore } from '../../firebase/firebase';

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return firestore.collection('dishes').get()
        .then(snapshot => {
            let dishes = [];
            snapshot.forEach(doc => {
                const data = doc.data()
                const _id = doc.id
                dishes.push({_id, ...data });
            });
            return dishes;
        })
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)));
}

export const dishesLoading = () => ({
    type: 'DISHES_LOADING'
});

export const dishesFailed = (errmess) => ({
    type: 'DISHES_FAILED',
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: 'ADD_DISHES',
    payload: dishes
});