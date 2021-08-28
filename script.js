const quizData = [
    // 0
    {
        question: 'How old is Azamat?',
        a: '25',
        b: '19',
        c: '17',
        d: '30',
        correct: 'a'
    },
    
    // 1
    {
        question: 'How old is Abdulaziz?',
        a: '25',
        b: '19',
        c: '17',
        d: '30',
        correct: 'b'
    },
    
    // 2
    {
        question: 'How old is Shoxrux?',
        a: '25',
        b: '19',
        c: '21',
        d: '30',
        correct: 'c'
    },
    
    // 3
    {
        question: 'How old is Boxodir?',
        a: '25',
        b: '19',
        c: '17',
        d: '30',
        correct: 'c'
    },
    
    // 4
    {
        question: 'How old is Abdulloh?',
        a: '25',
        b: '19',
        c: '12',
        d: '17',
        correct: 'd'
    },
    
    // 5
    {
        question: 'How old is Abdulloh?',
        a: '25',
        b: '18',
        c: '17',
        d: '30',
        correct: 'b'
    }
]
const container = document.getElementById('container')
const title = document.getElementById('title') 
const user = document.querySelectorAll('.user')
const variant_a = document.getElementById('variant-a')
const variant_b = document.getElementById('variant-b')
const variant_c = document.getElementById('variant-c')
const variant_d = document.getElementById('variant-d')
const btn = document.getElementById('btn')


let score = 0
let currentQuiz = 0
let correct = ''


function loadQuiz(){
    deselectAnswer()
    const quizDataCurrent = quizData[currentQuiz];
    title.innerHTML =`${currentQuiz + 1}  savol  ${ correct} <br> ` + quizDataCurrent.question;
    variant_a.innerText = quizDataCurrent.a;
    variant_b.innerText = quizDataCurrent.b;
    variant_c.innerText = quizDataCurrent.c;
    variant_d.innerText = quizDataCurrent.d;
}
loadQuiz()

function deselectAnswer() {
    user.forEach(function (param) {
        param.checked = false
      })
}

function getSellect() { 
     let answer = undefined
        for (let index = 0; index < user.length; index++) {
            const element = user[index];
            if (element.checked) {
                answer = element.id
            }
        }
        return answer
        console.log(answer);
 }
 btn.addEventListener('click' , function () { 
     const answer = getSellect()
     if (answer) {
         if(answer === quizData[currentQuiz].correct ) {
            score++           
         }
      currentQuiz++
      correct = `${score} ta tori`
      if(currentQuiz < quizData.length) {
        loadQuiz()
    } else {
        container.innerHTML = `
            <h2>Umumiy savol ${quizData.length}ta / To'g'ri javob ${score}</h2>
            <button onclick="location.reload()">Takrorlash</button>
        `
    }
}  
})
 