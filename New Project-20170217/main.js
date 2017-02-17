/* Simple Hello World in Node.js */
var x = 12.82; //4%
var y = 0.68; //96%
var start = 1.5;
var fbt = -10.8;
var blocks = [1,2,3,4,5,7,8,9,10];

for (var i = 0, len = blocks.length; i < len; i++) {
    //someFn(blocks[i]);
    if(i != 0){
        start = start - y;
    }
    var result = start - x;
    var result = result + fbt;
    console.log('cuadra '+ (i + 1) +' = '+ result);
}


