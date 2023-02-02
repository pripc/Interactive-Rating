let selectItem= [] 
function checkAndVerify(value){
  
  if(value==1){
    document.getElementById('num1').style.backgroundColor="#FB7718"
    document.getElementById('num1').style.color = `white`
    document.getElementById('num2').style.backgroundColor = 'rgba(124, 135, 152, 0.192)'
    document.getElementById('num2').style.color = `gray`
    document.getElementById('num3').style.backgroundColor = 'rgba(124, 135, 152, 0.192)'
    document.getElementById('num3').style.color = `gray`
    document.getElementById('num4').style.backgroundColor = 'rgba(124, 135, 152, 0.192)'
    document.getElementById('num4').style.color = `gray`
    document.getElementById('num5').style.backgroundColor = 'rgba(124, 135, 152, 0.192)'
    document.getElementById('num5').style.color = `gray`}
  if(value==2){
    document.getElementById('num2').style.backgroundColor="#FB7718"
    document.getElementById('num2').style.color = `white`
    document.getElementById('num1').style.backgroundColor = 'rgba(124, 135, 152, 0.192)'
    document.getElementById('num1').style.color = `gray`
    document.getElementById('num3').style.backgroundColor = 'rgba(124, 135, 152, 0.192)'
    document.getElementById('num3').style.color = `gray`
    document.getElementById('num4').style.backgroundColor = 'rgba(124, 135, 152, 0.192)'
    document.getElementById('num4').style.color = `gray`
    document.getElementById('num5').style.backgroundColor = 'rgba(124, 135, 152, 0.192)'
    document.getElementById('num5').style.color = `gray`}
  if(value==3){
    document.getElementById('num3').style.backgroundColor="#FB7718"
    document.getElementById('num3').style.color = `white`
    document.getElementById('num1').style.backgroundColor = 'rgba(124, 135, 152, 0.192)'
    document.getElementById('num1').style.color = `gray`
    document.getElementById('num2').style.backgroundColor = 'rgba(124, 135, 152, 0.192)'
    document.getElementById('num2').style.color = `gray`
    document.getElementById('num4').style.backgroundColor = 'rgba(124, 135, 152, 0.192)'
    document.getElementById('num4').style.color = `gray`
    document.getElementById('num5').style.backgroundColor = 'rgba(124, 135, 152, 0.192)'
    document.getElementById('num5').style.color = `gray`}
  if(value==4){
    document.getElementById('num4').style.backgroundColor="#FB7718"
    document.getElementById('num4').style.color = `white`
    document.getElementById('num1').style.backgroundColor = 'rgba(124, 135, 152, 0.192)'
    document.getElementById('num1').style.color = `gray`
    document.getElementById('num2').style.backgroundColor = 'rgba(124, 135, 152, 0.192)'
    document.getElementById('num2').style.color = `gray`
    document.getElementById('num3').style.backgroundColor = 'rgba(124, 135, 152, 0.192)'
    document.getElementById('num3').style.color = `gray`
    document.getElementById('num5').style.backgroundColor = 'rgba(124, 135, 152, 0.192)'
    document.getElementById('num5').style.color = `gray`}
  if(value==5){
    document.getElementById('num5').style.backgroundColor="#FB7718"
    document.getElementById('num5').style.color = `white`
    document.getElementById('num1').style.backgroundColor = 'rgba(124, 135, 152, 0.192)'
    document.getElementById('num1').style.color = `gray`
    document.getElementById('num2').style.backgroundColor = 'rgba(124, 135, 152, 0.192)'
    document.getElementById('num2').style.color = `gray`
    document.getElementById('num3').style.backgroundColor = 'rgba(124, 135, 152, 0.192)'
    document.getElementById('num3').style.color = `gray`
    document.getElementById('num4').style.backgroundColor = 'rgba(124, 135, 152, 0.192)'
    document.getElementById('num4').style.color = `gray`}
    selectItem.push(value)
      
}

  function submit(){
    var submitBtn = document.getElementById('submitBtn')
    if(selectItem.length == 0){
      submitBtn.classList.add('hidden') //se nenhum dos números for selecionado o botão submit fica desabilitado//
      window.alert('You must informe a rating in order to continue') 
    }
    else{
      let number = (selectItem[selectItem.length - 1])
      window.location.href = `thanksPage.html?number=${number}`
    } 
  }
    function showOnScreen(){
    let params = (new URL(document.location)).searchParams;
    let number = params.get('number')
    console.log(number)
    window.document.getElementById('result').innerHTML = `You selected ${number} out of 5`
  } 
  
  showOnScreen()