/**
 * Create a partial apply function
 * @param {Function} fn 
 * @param {*} presetArgs 
 */
export function partial(fn, ...presetArgs) {
    return function partialApplied(...laterArgs) {
        return fn(...presetArgs, ...laterArgs)
    }
}

/**
 *  Create reverse-arguments version of a function 
 * @param {Function} fn 
 */
export function reverseArgs(fn) {
    return function argsReversed(...args) {
        return fn(...args.reverse())
    }
}

/**
 * Create a function only accepts a argument 
 * @param {Function} fn 
 */
export function unary(fn) {
    return function unaried(arg) {
        return fn(args)
    }
}

