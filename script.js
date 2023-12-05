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
  return args.toUpperCase ()
}

export function exercise03(args) {
  const input = args
  const result = []
  let count = 0
 
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Should only include 'e' 
if (currentElement === 'e'){
  count = count + 1
}
// Should include large 'E' 
else if (currentElement === 'E'){
  count = count + 1
}
  }
  return count
}