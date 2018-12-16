export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Rude',
            authorLastName: 'Stewing',
            createdAt: new Date()
        }).then((res) => {
            dispatch({
                type: 'CREATE_PROJECT',
                project: project
            });
        }).catch((err) => {
            console.log('gagal');
        });
    }
};

export const deleteProject = (id) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'DELETE_PROJECT',
            id: id
        })
    }
}


