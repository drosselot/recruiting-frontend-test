const getBillings = async () => {
  const invoicesResponse = await fetch("https://recruiting.api.bemmbo.com/invoices/pending");
  if (invoicesResponse.ok) {
    const invoices = await invoicesResponse.json();
    return (invoices.filter((billing) => billing.type === "received"));
  }
}

const getCreditNotes = async (billingId) => {
  const invoicesResponse = await fetch("https://recruiting.api.bemmbo.com/invoices/pending");
  if (invoicesResponse.ok) {
    const invoices = await invoicesResponse.json();
    return (invoices.filter((invoice) => invoice.type === "credit_note" && invoice.reference === billingId));
  }
}

export {
  getBillings,
  getCreditNotes
}