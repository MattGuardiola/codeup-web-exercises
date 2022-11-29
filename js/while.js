"use strict"



let i = 2;

while(i <= 65536) {
    console.log(i);
    i = i * 2;
}







var allCones = Math.floor((Math.random() * 50) + 50);


do {
    var cones = Math.floor(Math.random() * 5) + 1
    if ((allCones - cones) > 0) {
        console.log(`${cones} cones sold`);
        allCones = allCones - cones;
    } else if (0 > (allCones - cones)) {
        console.log(`I cannot sell you ${cones} cones. I only have ${allCones}`);
    } else {
        console.log(`YAY! I sold all the cones`)
        allCones = allCones - cones;
    }
} while(allCones > 0);


 /*   if (cones > (allCones - cones)){
        console.log(`I cannot sell you ${cones} cones. I only have ${allCones - cones}`)
    } else if (allCones === 0){

        console.log(`YAY! I sold all the cones`)
    } else {
        console.log(`${cones} cones sold`)}


} while(allCones > 0);
*/