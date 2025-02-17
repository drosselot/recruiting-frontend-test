import {ReactComponent as CheckMark} from '../checkmark.svg'
import { getBillingsAmount } from '../utils/getBillingsAmount';


const CreditNoteModal = (props) => {
  const {setShowModal, reloadPage, invoices, selectedBillingId, selectedCreditNoteId} = props;

  const handleClick = () => {
    setShowModal(false);
    reloadPage();
  }

  const billing = invoices.find((invoice) => invoice.id === selectedBillingId);
  const creditNote = invoices.find((invoice) => invoice.id === selectedCreditNoteId)
  const billingAmount = getBillingsAmount(billing.amount, billing.currency);
  const creditNoteAmount = getBillingsAmount(creditNote.amount, creditNote.currency);

  return (
    <div className="absolute w-full h-full bg-opacity-50 bg-slate-900 top-0 content-center justify-center">
      <div className="flex flex-col bg-opacity-100 bg-white shadow-sm w-1/3 justify-self-center content-center justify-center items-center rounded-md">
        <div className=" rounded-full h-16 w-16 bg-green-100 m-5 justify-center content-center items-center">
          <CheckMark className='justify-self-center h-1/2 w-1/2'/>
        </div>
        <p className="font-semibold m-10 text-center">Nota de crédito asignada correctamente</p>
        <div>
          <p>Factura: {selectedBillingId} <span className='font-semibold'>(${billingAmount.dollarAmount.toFixed()} USD)</span></p>
          <p>Nota de Crédito: {selectedCreditNoteId} <span className='font-semibold'>(${creditNoteAmount.dollarAmount.toFixed()} USD)</span></p>
          <p>Nuevo monto a pagar: <span className='font-semibold'>${(billingAmount.dollarAmount - creditNoteAmount.dollarAmount).toFixed()} USD</span></p>
        </div>
        <div className=" m-5 p-1 rounded-md hover:border-violet-700 hover:border hover:border-2">
          <button onClick={handleClick} className="bg-violet-700 p-2 px-16 rounded-md text-white"> Seguir asignando</button>
        </div>
      </div>
    </div>
  )
}

export default CreditNoteModal;