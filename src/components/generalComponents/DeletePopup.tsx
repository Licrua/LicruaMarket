// function DeletePopup() {
// 	return (
// 	  <dialog id="my_modal_2" className="modal">
// 		<div className="modal-box">
// 		  <h3 className="font-bold text-lg">Вы уверены, что хотите удалить товар?</h3>
// 		  <p className="py-4">Это действие невозможно отменить.</p>
// 		  <div className="flex justify-end space-x-4">
// 			<button className="btn btn-secondary" method="dialog">Отмена</button>
// 			<button  className="btn btn-danger">Удалить</button>
// 		  </div>
// 		</div>
// 		<form method="dialog" className="modal-backdrop">
// 		  <button>Закрыть</button>
// 		</form>
// 	  </dialog>
// 	)
//   }

//   export default DeletePopup

import { useOrderStore } from '@/storage/OrderStorage'
import { useRef } from 'react'

function DeletePopup({ openModal, closeModal }) {
  //   const dialogRef = useRef<HTMLDialogElement>(null)

  //   const openModal = () => {
  //     if (dialogRef.current) {
  //       dialogRef.current.showModal() // Показываем модальное окно
  //     }
  //   }

  //   const closeModal = () => {
  //     if (dialogRef.current) {
  //       dialogRef.current.close() // Закрываем модальное окно
  //     }
  //   }

  return (
    <>
      <dialog ref={dialogRef} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Вы уверены, что хотите удалить товар?
          </h3>
          <p className="py-4">Это действие невозможно отменить.</p>
          <div className="flex justify-end space-x-4">
            <button className="btn btn-secondary" onClick={closeModal}>
              Отмена
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                closeModal()
              }}
            >
              Удалить
            </button>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default DeletePopup
