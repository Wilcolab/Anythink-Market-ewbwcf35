/**
 * Converts a given string to camelCase format.
 *
 * @param {string} input - The input string to be converted.
 * @throws {TypeError} Throws an error if the input is not a string.
 * @returns {string} The converted string in camelCase format.
 *
 * @example
 * console.log(toCamelCase('first name')); // Output: firstName
 * console.log(toCamelCase('user_id'));    // Output: userId
 * console.log(toCamelCase('SCREEN_NAME')); // Output: screenName
 */

/**
 * Converts a given string to dot.case format.
 *
 * @param {string} input - The input string to be converted.
 * @throws {TypeError} Throws an error if the input is not a string.
 * @returns {string} The converted string in dot.case format.

*
 * @example
 * console.log(toDotCase('first name')); // Output: first.name
 * console.log(toDotCase('user_id'));    // Output: user.id
 * console.log(toDotCase('SCREEN_NAME')); // Output: screen.name
 */
function toCamelCase(input) {
    // Error handling: check if input is a string
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Handle empty or whitespace-only strings
    if (input.trim().length === 0) {
        return '';
    }

    // Split by spaces, underscores, or hyphens
    const words = input.split(/[\s_-]+/);

    // Convert to camelCase: first word lowercase, rest capitalized
    return words
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Examples
console.log(toCamelCase('first name'));        // Output: firstName
console.log(toCamelCase('user_id'));           // Output: userId
console.log(toCamelCase('SCREEN_NAME'));       // Output: screenNameCreate a function that converts strings to dot.case format
function toDotCase(input) {
    // Error handling: check if input is a string
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Handle empty or whitespace-only strings
    if (input.trim().length === 0) {
        return '';
    }

    // Split by spaces, underscores, or hyphens and convert to lowercase
    const words = input.split(/[\s_-]+/).map(word => word.toLowerCase());

    // Join words with a dot
    return words.join('.');
}

// Examples
console.log(toDotCase('first name'));        // Output: first.name
console.log(toDotCase('user_id'));           // Output: user.id
console.log(toDotCase('SCREEN_NAME'));       // Output: screen.name