const patternUnformater = (pattern, data) => {

  if (pattern[0] === '#' && data) {

    console.log('patternUnformater:')
    console.log(data)
    console.log(data.replace(/\./g, ""))
    console.log(data.replace(/,/g, "."))
    return String(data).replace(/\./g, "").replace(/\,/g, ".")

  }
}

export default patternUnformater;
