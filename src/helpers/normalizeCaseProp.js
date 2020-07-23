const normalizeCaseProp = prop => {
  const booleanProp = {};
  booleanProp[prop] = true; // Set any other boolean (case) prop

  return booleanProp;
};

export default normalizeCaseProp;
