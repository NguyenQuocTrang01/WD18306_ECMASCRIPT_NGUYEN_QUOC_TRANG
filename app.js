const myName = 'Nguyen Quoc Trang' ;
const person = {fist: myName} ;

console.log (person) ;

const heLoFunction = (myName) => {
	console.log (`Chào bạn tôi tên là: ${myName}`) ;
	return myName ;
} ;

heLoFunction (myName) ;