var questionLine=[]
var operator=[]
var operand=[]
var newOperand=[]
var answerLine=[]
//var num1=Number(operand.join(""))
//var num2=Number(newOperand.join(""))

function addition(){
	if(newOperand.length==0){
		newOperand=[0]
		num1=Number(operand.join(""))
		num2=newOperand[0]	
	} else{
		num1=Number(operand.join(""))
		num2=Number(newOperand.join(""))	
	}	

	var answer= num1 + num2 //stores the answer
	newOperand.splice(0,newOperand.length) //removes the content od newoperand array
	operand.splice(0,operand.length)//removes the content of operand array
	operand.push(answer) //stores the answer as a new item in the operand array
	answerLine.push(answer)
	//alert(answer)

}

function subtraction(){
	if(newOperand.length==0){
		newOperand=[0]
		num1=Number(operand.join(""))
		num2=newOperand[0]	
	} else{
		num1=Number(operand.join(""))
		num2=Number(newOperand.join(""))	
	}

	var answer= num1 - num2 
	newOperand.splice(0,newOperand.length) //removes the content od newoperand array
	operand.splice(0,operand.length)//removes the content of operand array
	operand.push(answer) //stores the answer as a new item in the operand array
	answerLine.push(answer)
	//alert(answer)

}

function division(){
	if(newOperand.length==0){
		newOperand=[1]
		num1=Number(operand.join(""))
		num2=newOperand[0]	
	} else{
		num1=Number(operand.join(""))
		num2=Number(newOperand.join(""))	
	}

	var answer= num1 / num2 
	newOperand.splice(0,newOperand.length) //removes the content od newoperand array
	operand.splice(0,operand.length)//removes the content of operand array
	operand.push(answer) //stores the answer as a new item in the operand array
	answerLine.push(answer)
	//alert(answer)
}

function multiply(){
	if(newOperand.length==0){
		newOperand=[1]
		num1=Number(operand.join(""))
		num2=newOperand[0]	
	} else{
		num1=Number(operand.join(""))
		num2=Number(newOperand.join(""))	
	}

	var answer= num1 * num2 
	newOperand.splice(0,newOperand.length) //removes the content od newoperand array
	operand.splice(0,operand.length)//removes the content of operand array
	operand.push(answer) //stores the answer as a new item in the operand array
	answerLine.push(answer)
	//alert(answer)
}

function mod(){
	if(newOperand.length==0){
		num1=Number(operand.join(""))
		num2=num1*2
		newOperand=[num2]	
	} else{
		num1=Number(operand.join(""))
		num2=Number(newOperand.join(""))	
	}	

	var answer= num1 % num2 
	newOperand.splice(0,newOperand.length) //removes the content od newoperand array
	operand.splice(0,operand.length)//removes the content of operand array
	operand.push(answer) //stores the answer as a new item in the operand array
	answerLine.push(answer)
	//alert(answer)
}

function displayOnScreen(e){	
	number=(e.target.id)
	questionLine.push(number)	
	newSpan=""
	var y=questionLine.length	
	for(x=0; x<y; x++){
		newSpan+= `<span>${questionLine[x]}&nbsp;</span>`	
	}

	document.getElementById("question").innerHTML= newSpan
	
	if(number=="+"||number=="-"||number=="*"||number=="/"||number=="%"||number=="^2"){

		operator.push(number)

		if(operator[operator.length-1]=="+"){
			addition()
		}
		else if(operator[operator.length-1]=="-"){
			subtraction()
		}
		else if(operator[operator.length-1]=="/"){
			division()
		}
		else if(operator[operator.length-1]=="*"){
			multiply()
		}
		else if(operator[operator.length-1]=="%"){
			mod()
		}
		else if(operator[operator.length-1]=="^2"){
			squared()
		}
	}
	else{
		if(operator.length==0){
			operand.push(number)
		} 
		else{
			newOperand.push(number)
		}
	}
		
		
}

async function clearScreen(){
	document.getElementById("question"). innerText=""
	document.getElementById("answer"). innerText=""
	var y=questionLine.length	
	//empties the contents of the arrays
	await questionLine.splice(0,y)
	operator.splice(0,operator.length)
	operand.splice(0,operand.length)
	newOperand.splice(0,newOperand.length)
	answerLine.splice(0, answerLine.length)
	//alert(questionLine)
}

function squared(){

	if(newOperand.length==0){
		num1=Number(operand.join(""))
		answer= num1 * num1
		answerLine.push(answer)
	} else{
		answerLine.push("Syntax error")	
	}	

	operand.splice(0,operand.length)//removes the content of operand array	
	alert(answerLine)

}

function printAnswer(){
	if(operator[operator.length-1]=="+"){
		addition()
	}
	else if(operator[operator.length-1]=="-"){
		subtraction()
	}
	else if(operator[operator.length-1]=="/"){
		division()
	}
	else if(operator[operator.length-1]=="*"){
		multiply()
	}
	else if(operator[operator.length-1]=="%"){
		mod()
	}
	else{
	 	answerLine.push(operand.join(""))
	}

	var y=answerLine.length
	//alert(answerLine[y-1])
	document.getElementById("answer").innerHTML= `<span>${answerLine[y-1]}</span>`
}
