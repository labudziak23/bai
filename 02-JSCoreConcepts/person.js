class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    sayFullName() {
        console.log(
            `${this.name} ${this.surname.toUpperCase()}`
        );
    }

    sayInitials() {
        console.log(
            `${this.name.toUpperCase().charAt(0)}.${this.surname.toUpperCase().charAt(0)}.`
            );
    }
}

person1 = new Person('Jan','Nowak');
person2 = new Person('Michał','Łabuda');

person1.sayFullName();
person1.sayInitials();

person2.sayFullName();
person2.sayInitials();