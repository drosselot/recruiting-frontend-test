

const AssignButton = (props) => {
  const {setShowModal} = props;
  
  return (
    <div className="justify-self-center m-5">
      <button className="rounded-md p-2 align-self-center bg-purple-700 text-white" onClick={() => (setShowModal(true))}>
        Asignar
      </button>
    </div>
  )
}

export default AssignButton;