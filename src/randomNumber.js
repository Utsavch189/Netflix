function randomNumber(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

export default randomNumber;