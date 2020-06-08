let input = document.getElementById('screen'),
    ac = document.getElementById('Clear'),
    sqrt = document.getElementById('sqrt');

    
ac.addEventListener('click', function(){
    input.value = " ";
})
sqrt.addEventListener('click', function(){
    input.value = Math.pow(input.value, 2);
})

function number(e){
    if(e === '.' && input.value.includes('.') )return
    
    input.value += e;
    }

function del(){
    input.value = input.value.toString().slice(0, -1)
    }

function calc(){
    input.value = eval(input.value);
    }
