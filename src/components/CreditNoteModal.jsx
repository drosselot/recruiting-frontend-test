// import checkmark from './checkmark.svg'


const CreditNoteModal = (props) => {
  const {setShowModal, reloadPage} = props;

  const handleClick = () => {
    setShowModal(false);
    reloadPage();
  }
  return (
    <div className="absolute w-full h-full bg-opacity-50 bg-slate-900 top-0 content-center justify-center">
      <div className="flex flex-col bg-opacity-100 bg-white shadow-sm w-1/4 justify-self-center content-center justify-center items-center rounded-md">
        <div className=" rounded-full h-16 w-16 bg-green-100 m-5">
          {// <img src={checkmark} alt="check-icon"/>
          }
        </div>
        <p className="font-semibold m-10 text-center">Nota de crédito asignada correctamente</p>
        <button onClick={handleClick} className="bg-violet-700 m-5 p-2 px-16 rounded-md text-white"> Seguir asignando</button>
      </div>
    </div>
  )
}

export default CreditNoteModal;