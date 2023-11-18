class MyStack {
    constructor() {
        this.stack = [];
    }

    push(x) {
         this.stack.unshift(x)
    }

    pop() {
        return this.stack.shift()
    }

    top() {
        return this.stack[0]
    }

    empty() {
        return this.stack.length === 0;
    }
}
let stack = new MyStack()
stack.push(1)
stack.push(2)
stack.push(3)

console.log(stack.pop())
