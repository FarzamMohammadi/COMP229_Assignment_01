// IIFE -- imediately incove function expression
(function(){

    function start()
    {
        console.log("App Started...");
        if(document.title == "Contact")
        {
            let sendButton = document.getElementById("sendButton");
            let cancelButton = document.getElementById("resetButton");

            sendButton.addEventListener("click", (event) => {
                event.preventDefault();
                
                let fullName = document.getElementById("name").value;
                let emailAddress = document.getElementById("emailAddress").value;
                let phoneNumber = document.getElementById("tel").value;
                let message = document.getElementById("message").value;

                console.info(`Full Name: ${fullName} 
                Email: ${emailAddress}
                Phone Number: ${phoneNumber}
                Your Message: ${message}`)

                format.reset();
            })

            cancelButton.addEventListener("click", (event) => {
                event.preventDefault();
                if(confirm("Sure?"))
                {
                    location.href = "/home";
                }
            });
        }
    }

    window.addEventListener("load", start);
})();