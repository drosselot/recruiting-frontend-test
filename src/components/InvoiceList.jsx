import { getBillingsAmount } from "../utils/getBillingsAmount";

const AmountCell = (props) => {
  const {amount, currency} = props;
  const {dollarAmount, chileanPesoAmount} = getBillingsAmount(amount, currency);

  return (<p className="m-2 font-semibold">${chileanPesoAmount.toFixed()} CLP <span className="font-normal">({dollarAmount.toFixed()} USD)</span></p>)
}


const InvoiceList = (props) => {
  const {invoices, invoiceName, selectedInvoiceId, setSelectedInvoiceId} = props;

  return (
    <div className="justify-self-center">
      <h1 className="font-bold my-5 text-center">
        <p>Selecciona una {invoiceName} </p>
      </h1>
      {
        invoices.length > 0 ? (
          <div className="shadow-sm divide-y divide-slate-300 border border-slate-300 min-w-7xl">
            {
              invoices.map((invoice) => {

                const invoiceIsSelected = invoice.id === selectedInvoiceId;

                return (
                  <div className={`flex flex-row p-2 w-full justify-between ${invoiceIsSelected && ("bg-purple-100 text-purple-800")}`} key={invoice.id}>
                    <div className={`flex flex-row`}>
                      <button className="rounded-full border h-5 w-5 p-1 m-2" onClick={() => setSelectedInvoiceId(invoice.id)}>
                        {selectedInvoiceId === invoice.id && (<div className="bg-indigo-700 h-full w-full rounded-full"/>)}
                      </button>
                      <p className="m-2 font-semibold">{invoice.id} <span className="font-normal">({invoice.organization_id})</span></p>
                    </div>
                    <AmountCell amount={invoice.amount} currency={invoice.currency} />
                    <p className="m-2">Recibida</p>
                  </div>
                )
              })
            }
          </div>
          ) : (<div>
            No se encontraron {invoiceName}
          </div>
          )
      }
    </div>
  )
}

export default InvoiceList