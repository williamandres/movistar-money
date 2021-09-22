const form = document.getElementById("sampleForm")
const paragraphAfterSend = document.getElementById("paragraph-after-send")
const buttonAfterSend = document.getElementById("button-after-send")





    // form.addEventListener('submit', handleSubmit)

    // function handleSubmit(event){
    //     event.preventDefault()

    // }
    const btn = document.getElementById('btnSubmit')

    btn.addEventListener('click',change,true)

    function change(){
        
            form.classList.add('displaynone')
            paragraphAfterSend.classList.remove('disappear')
            buttonAfterSend.classList.remove('disappear')
    }


    buttonAfterSend.addEventListener('click',backForm,true) 

    function backForm(){
        paragraphAfterSend.classList.add('disappear')
        buttonAfterSend.classList.add('disappear')
        form.classList.remove('displaynone')
    }



