const pi = 3.14;

const circleArea = (radius) => {
    const area = (pi * (Math.pow(radius,2))).toFixed(2);
    console.log('Circle Are : ' + area); 
}

const circleCircumference = (radius) => {
    const circumference = (2 * pi * radius).toFixed(2);
    console.log('Circle circumference : ' + circumference);
}

module.exports = {
    circleArea,
    circleCircumference
}