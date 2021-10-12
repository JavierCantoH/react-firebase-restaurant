import { firestore } from '../../firebase/firebase';

export const fetchLeaders = () => (dispatch) => {
    
    dispatch(leadersLoading());

    return firestore.collection('leaders').get()
    .then(snapshot => {
        let leaders = [];
        snapshot.forEach(doc => {
            const data = doc.data()
            const _id = doc.id
            leaders.push({_id, ...data });
        });
        return leaders;
    })
    .then(leaders => dispatch(addLeaders(leaders)))
    .catch(error => dispatch(leadersFailed(error.message)));
}

export const leadersLoading = () => ({
    type: 'LEADERS_LOADING'
});

export const leadersFailed = (errmess) => ({
    type: 'LEADERS_FAILED',
    payload: errmess
});

export const addLeaders = (leaders) => ({
    type: 'ADD_LEADERS',
    payload: leaders
});