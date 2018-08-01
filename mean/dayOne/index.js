// //Explain what this code does (assume you have jQuery) and predict the output. The url providedresponds with information about Bulbasaur.    
// console.log(swap);
// console.log(testFunc);
// console.log(first);

// $(document).ready(function() {
//     var favoritepokemon;        
//     $.get("https://pokeapi.co/api/v2/pokemon/1/", function(data){
//         console.log(data);
//         favoritepokemon = data.name;
//     })
//     console.log("My favorite:", favoritepokemon);
//     // function test() {
//     // }
//     // setTimeout(test, 8000);
//     // test();

//     //Explain what this code accomplishes:
//     $("img").click(function(){
//         console.log("fetching");
//         $.get("https://pokeapi.co/api/v2/pokemon/1/", function(data){
//                 favoritepokemon = data.name;
//                 $("p").html(favoritepokemon);
//         })
//     })
// }) 

// // Predict the output and explain your reasoning:
// var first = "vanilla latte";
// var second = "cookie";

// console.log(swap([first, second]));

// function swap(items){
//     first = items[1];
//     var second = items[0];
//     return [first, second];
// }
// console.log(first, second);

var testFunc = function swap(items){
    first = items[1];
    var second = items[0];
    return [first, second];

}
let i = "";

for(let x = 0; x < 5; x++) {
    // i.push(x*5);
    i += x
    console.log("x is: ", x);
}
console.log("i is: ", i);
console.log(typeof(i));
i = 10;