names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.names = names;
    }

    startWith(letter){
        let namesLetter = [];
        this.names.forEach(item => {if(item.charAt(0) === letter) {namesLetter.push(item)}});
        return new Students(namesLetter);
         // names (array) which starts with the letter
    }

    sort() {
        let namesSort = []
        this.names.forEach(item => namesSort.push(item));
        namesSort.sort();
        return new Students(namesSort);
    }

    get() {
        return new Students(this.names);
    }

    getFirst(n) {
        let nameFirst = []
        this.names.forEach(item => nameFirst.push(item));
        nameFirst = nameFirst.slice(0,n);
        return new Students(nameFirst);
         // get first 'n' names (array) 
    }
}

students = new Students(names);
console.log(students.get());
console.log(students.sort());
console.log(students.startWith('P'));
console.log(students.startWith('M').sort());
console.log(students.sort().getFirst(4));
console.log(students.startWith('M').sort().getFirst(2));
console.log(students.get());



