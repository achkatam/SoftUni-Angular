// let isEven: boolean = true;

// let num: number = 10;

// type User = {
//     name: string;
//     age: number;
// }

// const stevenUser: User = {
//     name: 'Steven',
//     age: 26
// }

// interface AnotherUser {
//     firstName: string;
//     lastName: string;

// }

// // API Call
// const anotherUserList = [
//     { firstName: 'Steven', lastName: 'Hancock' },
//     { firstName: 'John', lastName: 'Doe' },
//     { firstName: 'Jane', lastName: 'Doe' },  
// ] as AnotherUser[];

// anotherUserList.forEach(({firstName, lastName}) => 
// console.log(`${firstName} ${lastName}`));

// Generics

function getIdentity<T>(id: T) {
    console.log(id);
}

getIdentity<number>(1);
getIdentity<string>('1');


enum PaymentStatus{
    Failed,
    Successful,
    Pending
}