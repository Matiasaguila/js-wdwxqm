for (let i=1; i <= 6 ; i++){
  let resultado = "";
  if (i%2===0){
      for (let j= 1; j<=i; ++j){
          resultado += '* '
      }   
  }else if  (i%2!=0) {
      for (let j= 1; j<=i; ++j){
          resultado += '- '
      }  
  }
  
  console.log(resultado)
  }