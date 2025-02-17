import {ReactComponent as CheckMark} from '../checkmark.svg'


const CreditNoteModal = (props) => {
  const {setShowModal, reloadPage} = props;

  const handleClick = () => {
    setShowModal(false);
    reloadPage();
  }
  return (
    <div className="absolute w-full h-full bg-opacity-50 bg-slate-900 top-0 content-center justify-center">
      <div className="flex flex-col bg-opacity-100 bg-white shadow-sm w-1/4 justify-self-center content-center justify-center items-center rounded-md">
        <div className=" rounded-full h-16 w-16 bg-green-100 m-5 justify-center content-center items-center">
          <CheckMark className='justify-self-center h-1/2 w-1/2'/>
        </div>
        <p className="font-semibold m-10 text-center">Nota de crédito asignada correctamente</p>
        <div className=" m-5 p-1 rounded-md hover:border-violet-700 hover:border hover:border-2">
          <button onClick={handleClick} className="bg-violet-700 p-2 px-16 rounded-md text-white"> Seguir asignando</button>
        </div>
      </div>
    </div>
  )
}

export default CreditNoteModal;