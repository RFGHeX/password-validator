const validatePassword = (pass) => {

  const isLong = checkLength(pass)
  const isLower = checkLower(pass)
  const isUpper = checkCaps(pass)
  const isNum = checkNum(pass)
  const isSpecial = checkSpecial(pass)

  if (isLong && isLower && isUpper && isNum && isSpecial) return true

  return false
}

const checkLength = (pass) => pass.length >= 8 ? true : false

const checkLower = (pass) => {
  for (let i = 0; i < pass.length; i++) {
    if (pass.charCodeAt(i) >= 97 && pass.charCodeAt(i) <= 122) return true

  }
  return false
}

const checkCaps = (pass) => {
  for (let i = 0; i < pass.length; i++) {
    if (pass.charCodeAt(i) >= 65 && pass.charCodeAt(i) <= 90) return true

  }
  return false
}

const checkNum = (pass) => {
  for (let i = 0; i < pass.length; i++) {
    if (pass.charCodeAt(i) >= 48 && pass.charCodeAt(i) <= 57) return true

  }
  return false
}

const checkSpecial = (pass) => {
  for (let i = 0; i < pass.length; i++) {

    if (pass.charCodeAt(i) >= 33 && pass.charCodeAt(i) <= 47
      || pass.charCodeAt(i) >= 58 && pass.charCodeAt(i) <= 64
      || pass.charCodeAt(i) >= 91 && pass.charCodeAt(i) <= 96
      || pass.charCodeAt(i) >= 123 && pass.charCodeAt(i) <= 126) return true

  }
  return false
}


module.exports = validatePassword