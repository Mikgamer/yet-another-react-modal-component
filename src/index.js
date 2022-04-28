import React, { useEffect, useRef } from "react"
import "./index.css"

const openModal   = ( selector ) => { document.querySelector(selector).showModal() },
      closeModal  = ( selector ) => { document.querySelector(selector).close() },
      toggleModal = ( selector ) => { 
        document.querySelector(selector).open ? document.querySelector(selector).close() : document.querySelector(selector).showModal()
      }

const Modal = (props) => {
  const { className, defaultOpen, noBackdropClose, noCloseButton, ...otherProps } = props

  const modalRef = useRef(null)
  
  const modalClose = () => modalRef.current.close()
  
  useEffect(() => {
    if ( defaultOpen && !modalRef.current["open"] ) modalRef.current.showModal()
  })

  const closeButton = () => {
    if (noCloseButton) return

    return <button onClick={() => modalClose()} className={"yetAnotherReactModalComponentCloseButton"} aria-label="Close">❌</button>
  }

  const closeWithBackdrop = (e) => {
    if (noBackdropClose) return
    
    const rect = modalRef.current.getBoundingClientRect()
    if (!( rect.top <= e.clientY && e.clientY <= rect.top + rect.height && rect.left <= e.clientX && e.clientX <= rect.left + rect.width )) {
      modalClose()
    }
  }  

  return (
    <dialog
      ref={modalRef}
      aria-modal={modalRef.current?.open ? "true" : "false"}
      className={"yetAnotherReactModalComponent" + ( className ? " " + className : "" ) }
      onClick={(e) => closeWithBackdrop(e)}
      {...otherProps}
    >
      {closeButton()}
      {props.children}
    </dialog>
  )
}

export default Modal
export { openModal, closeModal, toggleModal }