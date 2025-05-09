// a code to print youre name initial in uppercase
function getInitials(name) {
    let initials = name.split(" ").map(word => word[0].toUpperCase()).join("");
    return initials;
}
console.log("Inisial:", getInitials("Ilham Notohusodo")); // Output: IN
