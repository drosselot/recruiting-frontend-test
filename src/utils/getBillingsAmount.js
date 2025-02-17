

const getBillingsAmount = (amount, currency) => {
  const DOLLAR_PRICE_IN_CLP = 944.85;

  if (currency === "USD") {
    return {dollarAmount: amount, chileanPesoAmount: amount*DOLLAR_PRICE_IN_CLP}
  } else if (currency === "CLP") {
    return ({dollarAmount: amount / DOLLAR_PRICE_IN_CLP, chileanPesoAmount: amount});
  } else {
    throw new Error("currency not supported");
  }
}

export {
  getBillingsAmount
}