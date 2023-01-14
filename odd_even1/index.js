function findOddEven(){
    var num = document.getElementById('num').value;

    if ( num % 2 == 0) {
        document.getElementById('result').innerHTML = num + ' is an Even number';
    console.log(num,"is an even number");     

    }else{
        document.getElementById('result').innerHTML = num + ' is an Odd number';
        console.log(num,"is an odd number");     

    }
} 

  