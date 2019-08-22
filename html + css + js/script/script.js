const cardReg = /^\d{12}$/;
const nameReg = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;

const validate = () => {
	const card = document.querySelector("#card");
	const name = document.querySelector("#name");	
	const lastName = document.querySelector("#lastName");
	
	if (nameReg.test(lastName.value)
		&& nameReg.test(name.value)
		&& cardReg.test(card.value)) {
		document.getElementById('confirm').disabled = false;
		document.getElementById('confirm').style.opacity = "1";
	} else {
		document.getElementById('confirm').disabled = true;
		document.getElementById('confirm').style.opacity = ".6";
	}
};

function card(){
    const card = document.querySelector("#card");
  
    card.addEventListener("blur", function(){
		validate();
		
        if(cardReg.test(card.value) === true){
            document.querySelector("#cardSucces").style.display = "block";
            document.querySelector("#cardWrong").style.display = "none";
            document.querySelector("#lowNumber").style.display = "none";
            card.style.width = "219px";
            document.querySelector(".date").style.marginLeft = "28px";
            document.querySelector(".select_cancel").style.display = "block";
            document.querySelector(".minimum_select").style.display = "block"
        }else{
            document.querySelector("#cardWrong").style.display = "block";
            document.querySelector("#cardSucces").style.display = "none";
            document.querySelector("#lowNumber").style.display = "block";
            card.style.width = "219px";
            document.querySelector(".date").style.marginLeft = "28px";
            document.querySelector(".select_cancel").style.display = "block";
            document.querySelector(".minimum_select").style.display = "block"
        }
    })
}

$( "#dayMonth" ).change(function() {
    $(".select_main").css("width" , "120px");
    $( "#year" ).change(function() {
        $(".select_main_second").css("width" , "80px");
        $(".minimum_select").css("display" , "none");
        $(".select_cancel").css("display" , "none")
        $(".select_succes").css("display" , "block")
    });
});

function firstName(){
    const name = document.querySelector("#name");
    name.addEventListener("blur", function(){
		validate();
		
        if(nameReg.test(name.value) === true){
            document.querySelector("#succes_name").style.display = "block";
            document.querySelector(".minimum_name").style.display = "none";
            document.querySelector("#wrong_name").style.display = "none";
            name.style.width = "219px";
            document.querySelector(".input_last_name").style.marginLeft = "28px";
        }else{
            document.querySelector(".minimum_name").style.display = "block";
            document.querySelector("#succes_name").style.display = "none";
            document.querySelector("#wrong_name").style.display = "block";
            name.style.width = "219px";
            document.querySelector(".input_last_name").style.marginLeft = "28px";
        }
    })
}

function lastName(){
const lastName = document.querySelector("#lastName");
lastName.addEventListener("blur", function(){
	validate();
	
    if(nameReg.test(lastName.value) === true){
        document.querySelector("#succesLastName").style.display = "block";
        document.querySelector("#minimumLastName").style.display = "none";
        document.querySelector("#wrongLastName").style.display = "none";
        lastName.style.width = "219px";
    }else{
        document.querySelector("#succesLastName").style.display = "none";
        document.querySelector("#minimumLastName").style.display = "block";
        document.querySelector("#wrongLastName").style.display = "block";
        lastName.style.width = "219px";
    }
})
}
card();
firstName();
lastName();