title = "dr";
name = "Mateusz";
surname = 'Kubicki';
street = 'Długa 15';
city = 'Kraków';
zip = '30-781';
country = 'Poland';


/* 
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/

let cv1 = title + " " + name + " " + surname +" " + "\n" + "ul. " + street + "\n" + zip + " " + city + "\n" + country;
let cv2 = `${title} ${name} ${surname} \nul. ${street} \n${zip} ${street}\n${country}`;



console.log(cv1);
console.log(cv2);