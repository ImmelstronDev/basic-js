const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let emersions = domains.map(emersion => emersion.split('.').reverse())
  let result = {};
  let uniqAddressesList = new Set();

  let reverseDomains = domains.map(domain => {
    return '.' + domain.split('.').reverse().join('.');
  });

  emersions.forEach(emersion => emersion.reduce((address, domain) => {
    uniqAddressesList.add(address + '.' + domain);
    return address + '.' + domain;
  }, ''));

  uniqAddressesList.forEach(address =>{
    reverseDomains.forEach(domain => {
      if(result[address]){
        domain.includes(address) ? result[address]++ : '';
      }else{
        domain.includes(address) ? result[address] = 1 : '';
      }
    })
  });
  return result;
}

module.exports = {
  getDNSStats
};
