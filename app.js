/*--Functions--*/
async function submitForm(e, form) {
    // 1. Prevent reloading page
    e.preventDefault();
    // 2. Submit the form
    // 2.1 User Interaction
    const btnSubmit = document.getElementById('btnSubmit');
    btnSubmit.disabled = true;
    setTimeout(() => btnSubmit.disabled = false, 2000);
    // 2.2 Build JSON body
    const jsonFormData = buildJsonFormData(form);
    console.log(jsonFormData);
    // 2.3 Request & Response

    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'https://movistarmoney.secure.force.com/leads/services/apexrest/webToLead/v1/', true);

    // Envia a informação do cabeçalho junto com a requisição.
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() { // Chama a função quando o estado mudar.
        if (this.status === 200) {
            //Caso sucesso
        }
        else
        {
            console.log(xhr.responseText);
        }
        
    }
    xhr.send(JSON.stringify(jsonFormData));

   
}

function buildJsonFormData(form) {
    const jsonFormData = { };
    for(const pair of new FormData(form)) {
        if((pair[0] == 'lead_equipment_credit' || pair[0] == 'lead_free_investment_credit' || pair[0] == 'lead_authorize_receive_commercial_info') && pair[1] == 'on' ){
            jsonFormData[pair[0]] = true;
        }else{
            jsonFormData[pair[0]] = pair[1];
        }
    }
    return jsonFormData;
}
/*--/Functions--*/

/*--Event Listeners--*/
const sampleForm = document.querySelector("#sampleForm");
if(sampleForm) {
    sampleForm.addEventListener("submit", function(e) {
        submitForm(e, this);
    });
}
/*--/Event Listeners--*/
