export function showLoading(loading) {
    return {
        type: "@utilities/LOADING",
        payload: { loading },
    };
}
