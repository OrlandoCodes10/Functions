function callTwice(func) {
    func();
    func();
}

function rollDie() {
    const roll = Math.floor(Mathh.random() *6) + 1
    console.log(roll)
}

callTwice(rollDie)