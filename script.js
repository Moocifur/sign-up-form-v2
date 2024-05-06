const p1 = document.querySelector('#password');
const p2 = document.querySelector('#password2')

// create the function

const passCheck = () => {
    let p1value = p1.value;
    let p2value = p2.value;

    if(!p2value) {
        password.style.border = '1px solid green';
        password.previousElementSibling.style.color = 'green'
    } else if (p1value != p2value) {
        password.style.border = "1px solid red";
        password.previouelementsSibling.style.color = 'red'
        password2.style.border = '1px solid red';
        password2.previousElementSibling.style.color = 'red'
    } else {
        password.style.border = '1px solid green';
        password.previousElementSibling.style.color = 'green'
        password2.style.border = '1px solid green';
        password2.previousElementSibling.style.color = 'green'
    }
}

p1.addEventListener('input', () => {
    passCheck();
})

p2.addEventListener('input', ()=> {
    passCheck();
})

