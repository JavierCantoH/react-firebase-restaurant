import { firestore } from '../../firebase/firebase';

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));

    return firestore.collection('promotions').get()
        .then(snapshot => {
            let promos = [];
            snapshot.forEach(doc => {
                const data = doc.data()
                const _id = doc.id
                promos.push({_id, ...data });
            });
            return promos;
        })
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)));
}

export const promosLoading = () => ({
    type: 'PROMOS_LOADING'
});

export const promosFailed = (errmess) => ({
    type: 'PROMOS_FAILED',
    payload: errmess
});

export const addPromos = (promos) => ({
    type: 'ADD_PROMOS',
    payload: promos
});