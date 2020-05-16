const INITIAL_STATE = {
    loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "@utilities/LOADING":
            return {
                ...state,
                loading: action.payload.loading,
            };

        default:
            return state;
    }
}
