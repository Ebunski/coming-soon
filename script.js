console.log("hello");


function checkInput(){
const ans = document.querySelector('input').value;     //receives input value
console.log(ans);

const val = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;   //tests input

const errorMessage = document.getElementById('error_message');     //receives error message and icon
const errorIcon = document.getElementById('error_icon');
const successMessage = document.getElementById('success_message');


if (ans.match(val)) {
    return successMessage.style.display = "block";
}
else if(ans === "" || !ans.match(val)){
    errorMessage.style.display = "block";           //displays error messages and icon
    errorIcon.style.display = "block";
}

}
