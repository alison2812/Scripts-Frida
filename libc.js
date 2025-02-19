/*
* Last updated: 30/07/2024
* Creator: StudioDev
* Script to intercept some native libc.so methods.
*/

//colors
var green = "\x1b[1;32m";
var red = "\x1b[1;31m";
var purple = "\x1b[1;35m";
var yellow = "\x1b[1;33m";
var blue = "\x1b[1;34m";
var cyan = "\x1b[1;36m";
var white = "\x1b[1;37m";
var reset = "\x1b[0m";

//intercept methods
open(['base.apk', '/data/data/example.com']);
//fopen([]);
//access([]);
sys_openat(56);
//strstr();
//lstat([]);
//strcmp();
//snprintf([]);


//Abre um arquivo e retorna um descritor de arquivo.
function open(filters){
    Interceptor.attach(Module.findExportByName('libc.so', 'open'), function(args) {
        var path = args[0].readCString();
        
        var allFiltersMatched = filters.every(function(filter) {
           return path.indexOf(filter) !== -1;
        });
        
        //filter
        if(allFiltersMatched){
          console.warn('open:', green, path, reset);
        }                           
    });
}

function fopen(filters){
    Interceptor.attach(Module.findExportByName('libc.so', 'fopen'), function(args) {
        var path = args[0].readCString();
        
        var allFiltersMatched = filters.every(function(filter) {
           return path.indexOf(filter) !== -1;
        });
        
        //filter
        if(allFiltersMatched){
          console.warn('fopen:', purple, path, reset);
        }
    });
}

function access(filters) {
    Interceptor.attach(Module.findExportByName('libc.so', 'access'), function(args) {
        var path = args[0].readCString();
        
        var allFiltersMatched = filters.every(function(filter) {
           return path.indexOf(filter) !== -1;
        });
        
        //filter
        if(allFiltersMatched){
          console.warn('access:', purple, path, reset);
        } 
    });    
}

//Encontra a primeira ocorrência de uma substring em uma string.
function strstr() {
    Interceptor.attach(Module.findExportByName('libc.so', 'strstr'), function(args) {
        var str = args[0].readCString();
        var substr = args[1].readCString();
        
        console.warn('strstr:', white, str, reset, yellow, 'find-->', reset, white, substr, reset);
    });    
}

function lstat(filters) {
    Interceptor.attach(Module.findExportByName('libc.so', 'lstat'), function(args) {
        var path = args[0].readCString();
        
        var allFiltersMatched = filters.every(function(filter) {
           return path.indexOf(filter) !== -1;
        });
        
        //filter
        if(allFiltersMatched){
          console.warn('lstat:', cyan, path, reset);
        }        
    });    
}

//Compara duas strings e retorna um valor baseado na comparação.
function strcmp(filters) {
    Interceptor.attach(Module.findExportByName('libc.so', 'strcmp'), function(args) {
        var str_1 = args[0].readCString();
        var str_2 = args[1].readCString();
                
        console.warn('strcmp:', str_1, red, ' == ', reset, str_2);              
    });    
}

//A SystemCall `syscall` permite que programas de usuário chamem diretamente funções do kernel do sistema operacional para realizar tarefas.
function sys_openat(num_openat) {
    Interceptor.attach(Module.findExportByName('libc.so', 'syscall'), function(args) {
        var num_syscall = args[0].toInt32(); //syscall number        
        
        if(num_syscall == num_openat){
         // var dfd = args[1].toInt32();
            var path = args[2].readCString();          
         // var flags = getFlag(args[3].toInt32());
          
          console.warn('openat:', blue, path, reset);
        }
    });    
}

//Imprimir a string especificada até um comprimento especificado no formato especificado. 
function snprintf(filters) {
    Interceptor.attach(Module.findExportByName('libc.so', 'snprintf'), function(args) {
        var str = args[2].readCString();
        
        var allFiltersMatched = filters.every(function(filter) {
           return str.indexOf(filter) !== -1;
        });
        
        //filter
        if(allFiltersMatched){
          console.warn('snprintf:', green, str, reset);
        }        
    });    
}
