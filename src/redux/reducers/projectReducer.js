const initState = {
    projects: []
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('project created', action.project);
            break;
            
        case 'CREATE_PROJECT_ERROR':
            console.log('project created ERROR');
            break;

        case 'DELETE_PROJECT':
            console.log('project deleted', action.id);
            break;
        default:
            return state;
            
    }
}

export default projectReducer;