/**
 * 
 * EXERCISE 1
 * 
 * @param {Promise} promise 
 * @param {function} asyncTransformer 
 */
function flatMapPromise(promise, asyncTransformer) {
    return new Promise((resolve, reject) => {
        promise
            .then(res => resolve(asyncTransformer(res)), res => reject(res));
    });
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise} firstPromise 
 * @param {function} slowAsyncProcess 
 */
function chainTwoAsyncProcesses(firstPromise, slowAsyncProcess) {
    return firstPromise.then(res => slowAsyncProcess(res));
}

/**
 * 
 * EXERCISE 3
 * 
 * @param {function} getUserById 
 * @param {function} getOrganizationById 
 */
function makeGetUserByIdWithOrganization(getUserById, getOrganizationById) {
    return function getUserByIdWithOrganization(userId) {
        return (getUserById(userId)
            .then(res => {
                if (res === undefined) return
                return getOrganizationById(res.organizationId)
                    .then(val => {
                        return {
                            ...res,
                            organization: val
                        }
                    })
            }))
    }
}
module.exports = {
    flatMapPromise,
    chainTwoAsyncProcesses,
    makeGetUserByIdWithOrganization,
};