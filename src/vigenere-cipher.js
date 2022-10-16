const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(rvs){
    rvs === false ? this.rvs = true : this.rvs = false;
  }

  encrypt(message, key) {
    if(!message || !key){
      throw new Error ('Incorrect arguments!')
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';

    if(this.rvs){
      message = message.split('').reverse().join('');
    }

    let j = 0;

    for(let i = 0; i <message.length; i++ ){
      if(message[i] >= 'A' && message[i] <= 'Z'){
        result += String.fromCharCode(((message.charCodeAt(i) + key.charCodeAt(j % key.length)) % 26) + 65);
        j++;
      }else{
        result += message[i];
      }
    }

    return result;
    
  }
  decrypt(message, key) {
    if(!message || !key){
      throw new Error ('Incorrect arguments!')
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';

    if(this.rvs){
      message = message.split('').reverse().join('');
    }

    let j = 0;

    for(let i = 0; i <message.length; i++ ){
      if(message[i] >= 'A' && message[i] <= 'Z'){
        result += String.fromCharCode((26 + message.charCodeAt(i) - key.charCodeAt(j % key.length)) % 26 + 65);
        j++;
      }else{
        result += message[i];
      }
    }

    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
