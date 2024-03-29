export function exercise01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      result.push("")
    } else if (currentElement === "E") {
      result.push("")
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}

export function exercise02(args) {
  return args.toUpperCase()
}

export function exercise03(args) {
  const input = args
  const result = []
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Should only include 'e'
    if (currentElement === "e") {
      count = count + 1
    }
    // Should include large 'E'
    else if (currentElement === "E") {
      count = count + 1
    }
  }
  return count
}

export function exercise04(args) {
  const input = args
  let count = 1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const previousElement = input[i - 1]

    if (currentElement === " " && previousElement != "-") {
      count = count + 1
    } else if (currentElement === "0") {
      count = count - 1
    }
  }
  return count
}
export function exercise05(args) {
  const input = args
  for (let i = 0; i < input.length; i++) {
    const capitalLetter = input[i].charCodeAt()
    if (capitalLetter >= 65 && capitalLetter <= 90) {
      return true
    }
  }
  return false
}
export function exercise06(args) {
  const input = args
  for (let i = 3; i < input.length; i++) {
    const specialCharacter = input[i].charCodeAt()
    if (
      (specialCharacter >= 33 && specialCharacter <= 47) ||
      (specialCharacter >= 58 && specialCharacter <= 64) ||
      (specialCharacter >= 91 && specialCharacter <= 96) ||
      (specialCharacter >= 123 && specialCharacter <= 126)
    ) {
      return true
    }
  }
  return false
}
