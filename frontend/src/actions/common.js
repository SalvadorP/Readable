
// -------------------- COMMON FUNCTIONS FOR THE ACTIONS --------------------
export function actionSuccess(data, type) {
    return {
        type: type,
        data: data
    };
}

export function actionError(type) {
    return {
        type: type,
        data: []
    };
}
// --------------------------------------------------------------------------