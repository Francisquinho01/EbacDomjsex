
const form= document.getElementById('Form')

function valida(A,B){
if(B>A){
  return true;

}else
{
  return false;

}
}
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const msg=('Mensagem Validada O Número B é maior que o Número A');
    const msg1=('Mensagem Invalida O Número A é maior que o Número B');
if (valida(document.getElementById('A').value,document.getElementById('B').value)==false){
  
  const men= document.querySelector('.ms3').innerHTML=msg1;
  document.querySelector('.ms3').style.display ='block';
  document.querySelector('.ms2').style.display = 'none';

  document.querySelector.getElementById('A').value='';
  document.querySelector.getElementById('B').value='';
  

  
   
  }else
  {
   
    const men= document.querySelector('.ms2').innerHTML=msg;
    document.querySelector('.ms2').style.display ='block';
    document.querySelector('.ms3').style.display = 'none';
    document.querySelector.getElementById('A').value='';
    document.querySelector.getElementById('B').value='';

    
  
  
  };



  form.reset();

    
});





