
    const cipher = {

        encode: function(input, msg){
          if ((input === null || input === 0) && (msg === [] || msg === "" || msg === null )){
            throw new TypeError

        }
          let resultado = "";  
          msg = msg.toUpperCase();

          for (let i = 0; i < msg.length; i++) { 
        
            let codigo = msg.charCodeAt(i);  
        
            if( codigo >= 65 && codigo <= 90 ){ 
              resultado += String.fromCharCode((codigo - 65 + input) %26 + 65); //pega o código ASCII e transformar em letra de novo
          }   
            else if (msg.charCodeAt(i) == 32){
              resultado += msg.charAt(i)
          }

       }
      console.log(resultado);
      return resultado; 
    },

      decode: function(input, msg){
        if ((input === null || input === 0) && (msg === [] || msg === "" || msg === null )){
          throw new TypeError
        }

        let resultado = ""; 
        msg = msg.toUpperCase();

          for (let i = 0; i < msg.length; i++){

        let codigo = msg.charCodeAt(i);

          if ( codigo >= 65 && codigo <= 90  ){
          resultado += String.fromCharCode((codigo - 90 - input) %26 + 90);
        } 
          else if (msg.charCodeAt(i) == 32){
          resultado += msg.charAt(i)
        }

     }
    console.log(input);
    return resultado; 
  }
  }
export default cipher;
