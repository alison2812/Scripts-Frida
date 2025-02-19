/*
   Script by: studioDev
   Create: 29/02/2024
   Telegram: @StudioDevInc
*/

//colors
var green = "\x1b[1;32m";
var red = "\x1b[1;31m";
var yellow = "\x1b[1;33m";
var reset = "\x1b[0m";

//get fields of a given class.
if(Java.available){
 Java.perform(() => {
  //your class here
  const classe = Java.use("com.google.firebase.FirebaseOptions");
  
  let fields = classe.class.getDeclaredFields();
  
  for(let i = 0;i < fields.length; i++){
    //filter results
  //  if(fields[i].getType().getSimpleName() == "DatabaseReference"){
     console.log("\n\tField:", red, fields[i].getName(), reset);
     console.log("\tType:", yellow, fields[i].getType().getSimpleName(), reset);
     console.log("\tModifier:", green, getModifier(fields[i].getModifiers()), reset);
     console.log("\tPrimitive:", green, fields[i].getType().isPrimitive(), reset);
     console.log("\tAccessible:", green, fields[i].isAccessible(), reset);
 //  }
  }
  
 })}
 
function getModifier(modifier) {
    const modifierNames = {
        1: "public",
        2: "private",
        4: "protected",
        8: "static",
        16: "final",
        32: "synchronized",
        64: "volatile",
        128: "transient",
        256: "native",
        512: "interface",
        1024: "abstract",
        2048: "strictfp"
    };
    return modifierNames[modifier] || "unknown";
}
