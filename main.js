var arr = [];
function calc(p,r,m){
    arr =[];
    var tmpA = 0;
    for(var x =0; x < m; x++){
        var sum = arr.reduce((a, b) => a + b, 0);
    	tmpA = parseFloat((parseFloat(sum) + p ) * ( r / m) / 100).toFixed(2);
        arr.push(parseFloat(tmpA).toFixed(2));
    }
}


calc(700000,10,12);

document.getElementById("demo").innerHTML = arr;
