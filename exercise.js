const repeatHello = (callback) => {
    setInterval (callback, 1000);
}
let sayHello = () => console.log("hello")

repeatHello(sayHello);