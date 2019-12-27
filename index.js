const findMatching = (arr, str) => {
  return arr.filter(el => el.toLowerCase().includes(str.toLowerCase()))
}

const fuzzyMatch = (arr, str) => {
  return arr.filter(el => el[0] === str[0])
}

const matchName = (arr, str) => {
  return arr.filter(el => el.name === str)
}
