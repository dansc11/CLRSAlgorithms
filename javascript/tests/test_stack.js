const Stack = require('../src/Stack')

let test = () => {
    let stack = new Stack(20);
    console.assert(stack.stackEmpty() === true, 'Stack should be empty after creation');

    stack.push(3)
    console.assert(stack.stackEmpty() === false, 'Stack should not be empty after pushing the first element')
    console.assert(stack.data[stack.top] === 3, 'Top should return a pointer to 3')

    stack.push(5)
    console.assert(stack.data[stack.top] === 5, 'Top should return a pointer to 5')

    console.assert(stack.pop() === 5, 'Stack should return the second element first');
    console.assert(stack.pop() === 3, 'Stack should return the first element second');

    console.assert(stack.stackEmpty() === true, 'Stack should be empty after popping both elements')
}

test();