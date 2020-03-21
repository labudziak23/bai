

numbers =  Array.from({length: 10}, () => Math.floor(Math.random() * 15) + 5);

const writeNumbers = () => console.log(numbers);

writeNumbers();