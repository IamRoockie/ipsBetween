/**
 * @param {string} start - Starting ip address (e.c. 0.0.0.0)
 * @param {string} end - End ip address (e.c. 255.255.255.255)
 */
function ipsBetween(start, end) {
  if (!isCorrectIP(start) || !isCorrectIP(end)) {
    throw new SyntaxError('Incorrect ip')
  }
  return getCountIPs(end) - getCountIPs(start);
}

function isCorrectIP(ip) {
  if (!ip.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/)) {
    return false
  }
  if (ip.split('.').some(num => +num < 0 || +num > 255)) {
    return false
  }
  return true
}

function getCountIPs(str) {
  return str.split('.')
    .map(num => parseInt(num))
    .reduce((acc, num) => acc * 256 + num)
}
