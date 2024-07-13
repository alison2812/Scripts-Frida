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

//get methods from a given class.
if (Java.available) {
    Java.perform(() => {
        const classe = Java.use("my.class");

        let methods = classe.class.getDeclaredMethods();

        for (let i = 0; i < methods.length; i++) {
            console.log("\n\tName:", red, methods[i].getName(), "()", reset);
            console.log("\tType:", yellow, methods[i].getReturnType().getSimpleName(), reset);
            console.log("\tModifier:", green, getModifier(methods[i].getModifiers()), reset);
            console.log("\tPrimitive:", green, methods[i].getReturnType().isPrimitive(), reset);
            console.log("\tAccessible:", green, methods[i].isAccessible(), reset);
        }

    })
}

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