function send(form)
{
    const nombre = document.getElementById('last_name')
    const email = document.getElementById('email')
    const mobile = document.getElementById('00N5e00000bDrUC')
    const creditDevices = document.getElementById('00N5e00000eRocs')
    const creditFree = document.getElementById('00N5e00000eRoct') 
    const acceptTerms = document.getElementById('accept-terms')
    const authorization = document.getElementById('00N5e00000eRNZb')

    const dataSend = 'nombre' + nombre + '&email' + email + '&mobile' + mobile + '&creditDevices' + creditDevices + '&creditFree' + creditFree + '&acceptTerms' + acceptTerms + '&authorization' + authorization 

    $.ajax({
        type:'post',
        url: 'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8',
        data: dataSend,
        succes: function(ans){
            console.log('succes')
            form.reset()

        }
    })

    return false
}