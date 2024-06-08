let input = document.getElementById('ans');
let buttons = document.querySelectorAll('.all-button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if (e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL'){
            string = string.slice(0, -1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})

function add() {
    return a+b
    console.log(a+b)
}

add()