"use strict";

function cube(n){

    return n * n * n;

}

console.log(cube(3));

function cubeRoot(n){

    return Math.cbrt(n);

}

console.log(cubeRoot(6));
console.log(cubeRoot(cube(5)));