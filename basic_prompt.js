function toCamelCase(str) {
    return str
        .toLowerCase()
        .split(/[\s_-]+/)
        .map((word, index) => 
            index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join('');
}

// Examples
console.log(toCamelCase('hello world'));           // helloWorld
console.log(toCamelCase('hello_world'));           // helloWorld
console.log(toCamelCase('hello-world'));           // helloWorld
console.log(toCamelCase('hello world foo bar'));   // helloWorldFooBar