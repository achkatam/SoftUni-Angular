var isEven = true;
var num = 10;
var stevenUser = {
    name: 'Steven',
    age: 26
};
// API Call
var anotherUserList = [
    { firstName: 'Steven', lastName: 'Hancock' },
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jane', lastName: 'Doe' },
];
anotherUserList.forEach(function (_a) {
    var firstName = _a.firstName, lastName = _a.lastName;
    return console.log("".concat(firstName, " ").concat(lastName));
});
