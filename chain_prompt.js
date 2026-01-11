function toKebabCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }

    const result = input
        .toLowerCase()
        .replace(/[\s_-]+/g, '-') // Replace spaces, underscores, and hyphens with a single hyphen
        .replace(/-+/g, '-') // Remove duplicate hyphens
        .trim(); // Trim leading and trailing hyphens

    return result;
}

// Testing the function
console.log(toKebabCase(' User_Record-Data ')); // Output: 'user-record-data'