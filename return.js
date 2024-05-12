function createGreetingMessage(name) {
    const message = `Hello, ${name}`;
    return message;
}

let greetingMessage = createGreetingMessage('Christopher');
console.log(`The message is : ${createGreetingMessage("saiprasad")}`);
console.log(`${createGreetingMessage(greetingMessage)}`);