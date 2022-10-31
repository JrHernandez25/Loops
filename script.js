console.log("Meow");

document.write("<h1>Loops</h1>");

const food = ["Hamburger " , "Pizza " , "Potato " , "Lettuce "];

let i = 1
while(food[i]){
    console.log(food[i]);
    i++;
}

while(i<=10){
    console.log(i);
    i++;
}

for(i=1; i<=10; i=i+2-1+1){
 console.log(i);   
}

const minecraft = ["Broken sword " , "Diamond sword " , "Golden sword " , "Wooden sword "];

document.write("<h2>Minecraft has:</h2>");

for(i=1; i<minecraft.length; i++){
    document.write(minecraft[i])
}