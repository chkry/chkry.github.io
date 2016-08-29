var a = process.argv;
var total = 0;
for(i=2;i<a.length;i++){
	total += Number(process.argv[i]);
}
console.log(total);