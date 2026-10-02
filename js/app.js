let Random = Math.floor(Math.random() * 10 + 1);
console.log(Random);

function btnSubmitNo() {

    let number = document.getElementById("guessField").value;

    if (Random == number) {
        Swal.fire({
            title: "Congratulations! The Hidden Number is "+Random,
            icon: "success",
            draggable: true
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Wrong Guessing",
            text: "Something went wrong!",
            footer: "<a href=\"#\">Why do I have this issue?</a>"
        });

    }

}