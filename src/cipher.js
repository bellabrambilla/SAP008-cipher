const cipher = {

  encode: function (input, msg) {
    if (
      (input === null || input === 0) &&
      (msg === [] || msg === "" || msg === null)
    ) {
      throw new TypeError();
    }

    let resultado = "";
    msg = msg.toUpperCase();

    for (let i = 0; i < msg.length; i++) {
      let codigo = msg.charCodeAt(i);

      if (codigo >= 65 && codigo <= 90) {
        resultado += String.fromCharCode(((codigo - 65 + input) % 26) + 65); 
      } else if (msg.charCodeAt(i) >= 32 && msg.charCodeAt(i) <= 64) {
        resultado += msg.charAt(i);
      }
    }
    return resultado;
  },

  decode: function (input, msg) {
    if (
      (input === null || input === 0) &&
      (msg === [] || msg === "" || msg === null)
    ) {
      throw new TypeError();
    }

    let resultado = "";
    msg = msg.toUpperCase();

    for (let i = 0; i < msg.length; i++) {
      let codigo = msg.charCodeAt(i);

      if (codigo >= 65 && codigo <= 90) {
        resultado += String.fromCharCode(((codigo - 90 - input) % 26) + 90);
      } else if (msg.charCodeAt(i) == 32) {
        resultado += msg.charAt(i);
      }
    }
    return resultado;
  },
};

export default cipher;
