// COMP229_Assignment_01, Farzam Mohammadi Assad, 301109706, Oct/09/2020

// IIFE -- imediately invoke function expression
(function(){

    function start()
    {
        //indicate when app is functional
        console.log("App Started...");

        //Form setup
        if(document.title == "Contact Us"){
            formHandler();
        }

        //Prevention  of irreversible button functions 
        irreversibleButtons();
    }
    window.addEventListener("load", start);
})();

//Prevents default button functions
function irreversibleButtons(){
    let dangerButtons = document.getElementsByName('.btn-danger');
        for(button of dangerButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("ARE YOU SURE?"))
                {
                    event.preventDefault();
                    window.location.assign('/contacts-list');
                }
            });
        }
};

//Contact form functions
function formHandler(){
        let sendButton = document.getElementById("sendButton");
        let cancelButton = document.getElementById("resetButton");

        sendButton.addEventListener("click", (event) => {
            event.preventDefault();
            
            let fullName = document.getElementById("name").value;
            let emailAddress = document.getElementById("emailAddress").value;
            let phoneNumber = document.getElementById("tel").value;
            let message = document.getElementById("message").value;

            if(fullName == "") {
                alert(' please fill in all required fields!');
            }
            else if (emailAddress.includes("@", 1) != true)
            {

                alert('Please enter a valid email!');
            }
            else{
                //info capture
                console.info(`Full Name: ${fullName} 
                Email: ${emailAddress}
                Phone Number: ${phoneNumber}
                Your Message: ${message}`);
                
                document.getElementById("name").value = "";
                document.getElementById("emailAddress").value = "";
                document.getElementById("tel").value = "";
                document.getElementById("message").value = "";
                alert('Your message has been sent!');
            }
   
        });
        //redirect -> home page
        cancelButton.addEventListener("click", (event) => {
            event.preventDefault();
            if(confirm("Sure?"))
            {
                location.href = "/home";
            }
        });
};