JavaScript Basic Calculations


Repo ini berisi beberapa snippet JavaScript dasar dengan memahami konsep dasar pemrograman seperti perhitungan matematika, manipulasi string, dan tanggal.

 1. Menghitung Luas Persegi Panjang

 javascript
let length = 15;
let width = 3;
let areaRectangle = length * width;
console.log("Luas Persegi Panjang:", areaRectangle); // Output: 45

 2. Menghitung Diameter, Keliling, dan Luas Lingkaran
    
let radius = 5;
let diameter = 2 * radius;
let circumference = 2 * Math.PI * radius;
let areaCircle = Math.PI * Math.pow(radius, 2);
console.log("Diameter:", diameter); // Output: 10
console.log("Keliling:", circumference.toFixed(4)); // Output: 31.4159
console.log("Luas:", areaCircle.toFixed(4)); // Output: 78.5398

3. nisial Nama (Huruf Kapital)

function getInitials(name) {
    let initials = name.split(" ").map(word => word[0].toUpperCase()).join("");
    return initials;
}
console.log("Inisial:", getInitials("Ilham Notohusodo")); // Output: IN

4. Menentukan Sudut Ketiga Segitiga
let angleA = 80;
let angleB = 65;
let angleC = 180 - (angleA + angleB);
console.log("Sudut ketiga:", angleC); // Output: 35

5. Menghitung Selisih Hari antara Dua Tanggal
let date1 = new Date("2024-03-19");
let date2 = new Date("2024-03-21");
let differenceInTime = date2 - date1;
let differenceInDays = differenceInTime / (1000 * 3600 * 24);
console.log("Selisih hari:", differenceInDays); // Output: 2
