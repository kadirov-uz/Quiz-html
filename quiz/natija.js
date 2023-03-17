


let question_number = document.querySelector('.question-number')
let question_text = document.querySelector('.question-text')
let variantlar_box = document.querySelector('.option-container')
let indicatorlar = document.querySelector('.answers-indicator')

let correct_result = document.querySelector('.total-correct')
let wrong_result = document.querySelector('.total-wrong')
let percentage_result = document.querySelector('.percentage')

let correct_answers = 0;

function ind(){
    quiz.forEach( e => {
        let div = document.createElement('div');
        indicatorlar.appendChild(div);
    })
};
ind()
let offset = 0;
document.querySelector('.total-question').innerHTML=quiz.length;
document.getElementById("register_button").addEventListener('click',function(){
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    if (firstname=='' 
    || lastname=='' 
    || firstname.trim().lenght==0
    || lastname.trim().lenght==0) {
    alert('Iltimos ma`lumotlarni to`liq kiriting!!!');
    }
    else{
        show_hide('.home-box','.register-box');
        
    };

         show_hide('.home-box' , '.register-box');

});


function show_hide(show,hide){
    document.querySelector(show).classList.remove('hide');
    document.querySelector(hide).classList.add('hide');
};

function StartQuiz(){
    question_number.innerHTML = (offset+1) + "/" +quiz.length;
    question_text.innerHTML=quiz[offset].q;
    
    variantlar_box.innerHTML=""

   quiz[offset].options.forEach((e,i) => {
    
    let div = document.createElement('div');
    div.classList.add('option');
    div.innerHTML=e
    variantlar_box.appendChild(div)
    div.addEventListener('click', function () {
        variantlar_box.querySelectorAll('div').forEach(element=>{
            element.classList.add('aready-answeredl')
        });
        if (quiz[offset].answer == i){
                div.classList.add('correct');
           indicatorlar.querySelectorAll('div')[offset].classList.add('correct')
             correct_answers++;
        }else{
            div.classList.add('wrong');    
            variantlar_box.querySelectorAll('div')[quiz[offset].answer].classList.add('correct')
            indicatorlar.querySelectorAll('div')[offset].classList.add('wrong')
        } }) });
}
function Next(){
    if (offset>=quiz.length-1) {
        show_hide('.result-box','.quiz-box');

        correct_result.innerHTML = correct_answers
        wrong_result.innerHTML = (quiz.length-correct_answers);
        console.log(quiz.length);
        console.log(correct_answers);
        percentage_result.innerHTML = parseInt (100/quiz.length*correct_answers)+'%'
        document.getElementById('t').innerHTML=quiz.length;
    }else{
        offset++;
        StartQuiz()
    }
};
document.getElementById("try").addEventListener('click',()=>{
    offset=0;
    correct_answers==0
    StartQuiz()
    show_hide('.quiz-box','.result-box');
    int()
});


