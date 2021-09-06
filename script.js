const form = document.getElementById("form")
const paragraphAfterSend = document.getElementById("paragraph-after-send")
const buttonAfterSend = document.getElementById("button-after-send")

form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    event.preventDefault()

}

const btn = document.getElementById('submit')
counter = 0


btn.addEventListener('click',change,true)

function change(){
    if(counter==0)
    {
        form.classList.add('displaynone')
        paragraphAfterSend.classList.toggle('disappear')
        buttonAfterSend.classList.toggle('disappear')
        counter = 1
    }

}