let amount = prompt('Amount ');
let currency = prompt('Currency ');

if (amount == '' || currency == '') {

  alert('All fields are required !');

}else{
       
   if( currency == 'dollar' ){
       console.log(` ${amount} ${currency} = ${ amount * 86.2 } BDT`);
   }else if(currency == 'pound'){
       console.log(` ${amount} ${currency} = ${ amount * 115.32 } BDT`);    
   }else if(currency == 'euro'){
    console.log(` ${amount} ${currency} = ${ amount * 98.32 } BDT`);    
  }
         
}