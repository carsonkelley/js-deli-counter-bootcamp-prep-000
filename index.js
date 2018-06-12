var katzDeli = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(line) {
  if(array.length > 0) {
    return array.shift()
  } else {
    return "There is nobody waiting to be served!"
  }
}