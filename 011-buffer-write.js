buf = new Buffer(256);
len = buf.write("www.runoob.com",'utf16le');

console.log("写入字节数 : "+  len);