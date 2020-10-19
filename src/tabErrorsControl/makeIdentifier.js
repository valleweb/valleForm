const makeIdentifier = (text, hash) => {
  return `${text.replace(/\s+/g, '')}_${hash}`;
}

export default makeIdentifier;