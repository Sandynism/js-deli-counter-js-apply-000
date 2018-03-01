var katzDeli = []

function takeANumber(katzDeliLine, customerName) {
  katzDeliLine.push(customerName)
  return `Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
  return "There is nobody waiting to be served!"
} else {
  return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine) {
  let peopleArray = []
  for (var i = 0; i < katzDeliLine.length; i++) {
    peopleArray.push(`${i + 1}. ${katzDeliLine[i]}`)
  }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    return `The line is currently: ${peopleArray.join(", ")}`
  }
}
