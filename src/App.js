import './App.css';
import { useEffect, useState } from 'react';
import { getBillings, getCreditNotes } from './api/api';
import InvoiceList from './components/InvoiceList';
import AssignButton from './components/AssignButton';
import CreditNoteModal from './components/CreditNoteModal';

function App() {

  const [billings, setBillings] = useState([]);
  const [selectedBillingId, setSelectedBillingId] = useState();

  const [creditNotes, setCreditNotes] = useState([]);
  const [selectedCreditNoteId, setSelectedCreditNoteId] = useState();

  const [showModal, setShowModal] = useState(false);

  const reloadPage = async () => {
    const billingsList = await getBillings();
    setSelectedBillingId(null);
    setSelectedCreditNoteId(null);
    setBillings(billingsList);
    setCreditNotes([])
  }

  useEffect(() => {
    reloadPage();
  }, [])

  useEffect(() => {
    const getCreditNotesData = async () => {
      if (selectedBillingId) {
        const creditNotesList = await getCreditNotes(selectedBillingId)
        console.log(creditNotesList)
        setCreditNotes(creditNotesList);
      } else {
        setCreditNotes([])
      }
    }

    getCreditNotesData();
  }, [selectedBillingId]);

  return (
    <div className="font-sans w-full justify-center content-center items-center">
      <InvoiceList invoiceName="factura" invoices={billings} selectedInvoiceId={selectedBillingId} setSelectedInvoiceId={setSelectedBillingId}/>
      {
        selectedBillingId && (<InvoiceList invoiceName="nota de crédito" invoices={creditNotes} selectedInvoiceId={selectedCreditNoteId} setSelectedInvoiceId={setSelectedCreditNoteId} />)
      }
      {
        selectedCreditNoteId && (<AssignButton setShowModal={setShowModal}/>)
      }
      {
        showModal && (<CreditNoteModal setShowModal={setShowModal} reloadPage={reloadPage} invoices={[...creditNotes, ...billings]} selectedBillingId={selectedBillingId} selectedCreditNoteId={selectedCreditNoteId} />)
      }
    </div>
  );
}

export default App;
