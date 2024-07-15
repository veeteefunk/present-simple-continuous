const form = document.querySelector('form');
const tryAgain  = document.getElementById('try-again');
const iconAnswer1 = document.getElementById("icon-answer1")
const iconAnswer2 = document.getElementById("icon-answer2")
const iconAnswer3 = document.getElementById("icon-answer3")
const iconAnswer4 = document.getElementById("icon-answer4")
const iconAnswer5 = document.getElementById("icon-answer5")
const iconAnswer6 = document.getElementById("icon-answer6")
const iconAnswer7 = document.getElementById("icon-answer7")
const iconAnswer8 = document.getElementById("icon-answer8")
const iconAnswer9 = document.getElementById("icon-answer9")
const iconAnswer10 = document.getElementById("icon-answer10")

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    
    const ex1 = document.getElementById("ex1").value
    const ex2 = document.getElementById("ex2").value
    const ex3 = document.getElementById("ex3").value
    const ex4 = document.getElementById("ex4").value
    const ex5 = document.getElementById("ex5").value
    const ex6 = document.getElementById("ex6").value
    const ex7 = document.getElementById("ex7").value
    const ex8 = document.getElementById("ex8").value
    const ex9 = document.getElementById("ex9").value
    const ex10 = document.getElementById("ex10").value

    ex1 == "are they coming" ? iconAnswer1.classList.add("fa-circle-check") : iconAnswer1.classList.add("fa-circle-xmark");
    ex2 == "is working" ? iconAnswer2.classList.add("fa-circle-check") : iconAnswer2.classList.add("fa-circle-xmark");
    ex3 == "does he eat" ? iconAnswer3.classList.add("fa-circle-check") : iconAnswer3.classList.add("fa-circle-xmark");
    ex4 == "does he come" ? iconAnswer4.classList.add("fa-circle-check") : iconAnswer4.classList.add("fa-circle-xmark");
    ex5 == "are playing" ? iconAnswer5.classList.add("fa-circle-check") : iconAnswer5.classList.add("fa-circle-xmark");
    ex6 == "are you coming" ? iconAnswer6.classList.add("fa-circle-check") : iconAnswer6.classList.add("fa-circle-xmark");
    ex7 == "is studying" ? iconAnswer7.classList.add("fa-circle-check") : iconAnswer7.classList.add("fa-circle-xmark");
    ex8 == "are you playing" ? iconAnswer8.classList.add("fa-circle-check") : iconAnswer8.classList.add("fa-circle-xmark");
    ex9 == "go" ? iconAnswer9.classList.add("fa-circle-check") : iconAnswer9.classList.add("fa-circle-xmark");
    ex10 == "arrive" ? iconAnswer10.classList.add("fa-circle-check") : iconAnswer10.classList.add("fa-circle-xmark");
});

tryAgain.addEventListener('click', function(e) {
    form.reset();
    iconAnswer1.style.visibility = 'hidden'
    iconAnswer2.style.visibility = 'hidden'
    iconAnswer3.style.visibility = 'hidden'
    iconAnswer4.style.visibility = 'hidden'
    iconAnswer5.style.visibility = 'hidden'
    iconAnswer6.style.visibility = 'hidden'
    iconAnswer7.style.visibility = 'hidden'
    iconAnswer8.style.visibility = 'hidden'
    iconAnswer9.style.visibility = 'hidden'
    iconAnswer10.style.visibility = 'hidden'
    location.reload();
});