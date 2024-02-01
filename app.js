// let person1 = {
//     name: 'Hung' ,
//     tuoi: 36 ,
//     sayHello () {
//         console.log (`I'm ${this.name}.I'm ${this.tuoi} .`) ;
//     }
// }

// let person2 = {
//     name: 'Tuan' ,
//     tuoi: 27 ,
//     sayHello () {
//         console.log (`I'm ${this.name}.I'm ${this.tuoi} .`) 
//     }
// }

// person1.sayHello () 
// person2.sayHello () 

let name1 = 'Nguuen Quoc Duy (*_*)'
let birthday1 = '02/10/2007'

let sayHello1 = () => console.log (`I'm ${name1} , ${birthday1}`)

sayHello1 ()

let name2 = 'Nguyen Quoc Trang (*_*)'
let birtname2 = '2004'
var curDate = new Date () ;

let sayHello2 = () => console.log (`I'm ${name2} , Năm nay tôi: ${curDate.getFullYear () - birtname2} tuổi`)

sayHello2 ()