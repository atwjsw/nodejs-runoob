// 1. 输出全局变量 __filename 的值
console.log( '__filename: ' + __filename );

// 2. 输出全局变量 __dirname 的值
console.log('__dirname: ' + __dirname );

// 3. 时延器
function printHello(){
   console.log( "Hello, World after three seconds!");
}
// 两秒后执行以上函数
setTimeout(printHello, 3000);

//4. 清除时延
function printHello2(){
   console.log( "Hello, World after two seconds!");
}
// 两秒后执行以上函数
var t = setTimeout(printHello2, 2000);

// 清除定时器
clearTimeout(t);

//5. 定时器	
function printHello3(){
   console.log( "Hello, World every two seconds!");
}

// 两秒后执行以上函数
setInterval(printHello3, 2000);

//6. console
console.log('Hello world'); 
console.log('byvoid%diovyb'); 
console.log('byvoid%diovyb', 1991); 
console.log('byvoid%diovyb%diovyb%diovyb%diovyb', 1991, 1992, 1993, 1994); 

console.error('Hello world'); 
console.error('byvoid%diovyb'); 
console.error('byvoid%diovyb', 1991); 
console.error('byvoid%diovyb%diovyb%diovyb%diovyb', 1991, 1992, 1993, 1994); 

console.trace();

console.info("程序开始执行：");

var counter = 10;
console.log("计数: %d", counter);

console.time("获取数据");
//
// 执行一些代码
// 
console.timeEnd('获取数据');

console.info("程序执行完毕。");