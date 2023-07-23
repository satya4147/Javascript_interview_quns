
// Anchors - caret (^ and Dollar $)
// caret-^ - beginning of the string;
// Dollar $ - end of the string;


console.log(/^This/.test('This is String')) // true
console.log(/^is/.test('This is String')) //false

console.log(/String$/.test('This is String')) //true
 console.log(/This$/.test('This is String')) //false