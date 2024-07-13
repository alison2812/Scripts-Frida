/*
   Script by: studioDev
   Create: 05/03/2024
   Telegram: @StudioDevInc
*/

//colors
var green = "\x1b[1;32m";
var red = "\x1b[1;31m";
var purple = "\x1b[1;35m";
var yellow = "\x1b[1;33m";
var reset = "\x1b[0m";

if (Java.available) {
    Java.perform(() => {
        const classe = Java.use("java.lang.String");

        classe.equals.overload('java.lang.Object')
            .implementation = function(arg) {
            
            const lengthMin = 300; //length

            if (arg !== null && arg !== "") {
                const valueArg = arg.toString();
                const valueReturn = this.equals(arg);
                
              if (valueReturn !== null && valueArg.length >= lengthMin) {
               if(valueReturn){
                 console.log("\n\t", green, valueReturn, reset, "==", yellow, valueArg, reset);
                }else{
                 console.log("\n\t", red, valueReturn, reset, "==", yellow, valueArg, reset);
               }
              }
            }

            return this.equals(arg);
        }


    })
};