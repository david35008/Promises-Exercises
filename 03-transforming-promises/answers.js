/**
 * 
 * EXERCISE 1
 * 
 * @param {*} promise 
 * @param {*} transformer 
 * @returns {Promise}
 */
function mapPromise(promise, transformer) {
    return new Promise((resolve, reject) => {
        promise.then(resault => {
            resolve(transformer(resault))
        }).catch(err => {
            reject(err);
        })

        /* IMPLEMENT ME!! */
    });
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */



function squarePromise(numberPromise) {
    return numberPromise
        .then(res => {
            return new Promise((resolve, reject) => {
                if (!isNaN(res)) {
                    resolve(res * res)
                } else {
                    reject(`Cannot convert '${res}' to a number!`)
                }
            })
        })
}



/**
 * EXERCISE 3
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise) {
    return squarePromise(promise)
        .catch(() => {
            return new Promise((resolve) => {
                resolve(0)
            });
        });
}

/**
 * EXERCISE 4
 * 
 * @param {Promise} promise 
 * @returns {Promise}
 */

function switcheroo(promise) {
    // const myPromise = new Promise((resolve, reject) => {
    //   promise.then(reject).catch(resolve);
    // });
    // return myPromise;
    return promise.then(
        value => Promise.reject(value), // function that takes an argument and passes it to Promise.reject function
        reason => Promise.resolve(reason)
    );
    //return promise.then(Promise.reject(val),Promise.resolve(err))
};

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
    mapPromise,
    squarePromise,
    squarePromiseOrZero,
    switcheroo,
};