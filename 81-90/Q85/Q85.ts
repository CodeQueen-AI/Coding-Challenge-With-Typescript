//Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" 
//within any given string and returns its position.
// This function finds where "code" first shows up in a text
function findCodePosition(str: string): number {
    return str.indexOf("code"); // Looks for "code" and tells where it found it
}
console.log(findCodePosition("Learn to code with JavaScript")); 

