import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"

import Modal, { openModal, closeModal, toggleModal } from "./index.js"

HTMLDialogElement.prototype.showModal = jest.fn()
HTMLDialogElement.prototype.close = jest.fn()
const showModalSpy = jest.spyOn(HTMLDialogElement.prototype, "showModal")
const closeModalSpy = jest.spyOn(HTMLDialogElement.prototype, "close")

afterEach(() => {jest.clearAllMocks()})

describe("Modal", () => {
  test("have childs", () => {
    render(<Modal id="example"><h1>Title</h1>Example text</Modal>)
    expect(screen.getByText(/Title/) && screen.getByText(/Example text/i))
  })

  test("is closed by default", () => {
    render(<Modal>Example text</Modal>)
    expect(screen.getByText(/Example text/)).toHaveAttribute("aria-modal", "false")
    expect(screen.getByText(/Example text/)).not.toHaveAttribute("open")
  })

  test("have 'defaultOpen' open the modal", () => {
    render(<Modal defaultOpen>Example text</Modal>)
    expect(showModalSpy).toHaveBeenCalled()
  })

  test("have a close button by default", () => {
    render(<Modal>Example text</Modal>)
    expect(screen.queryByText(/❌/)).toBeTruthy()
  })

  test("have no close button with 'noCloseButton'", () => {
    render(<Modal noCloseButton>Example text</Modal>)
    expect(screen.queryByText(/❌/)).toBeNull()
  })

  test("have its default className", () => {
    render(<Modal id="example">Example text</Modal>)
    expect(screen.getByText(/Example text/)).toHaveClass("yetAnotherReactModalComponent")
  })

  test("have 'className' working", () => {
    render(<Modal id="example" className="test">Example text</Modal>)
    expect(screen.getByText(/Example text/)).toHaveClass("yetAnotherReactModalComponent test")
  })
})

describe("Functions", () => {
  test("'openModal' open the modal", () => {
    render(<Modal id="example">Example text</Modal>)
    openModal("#example")
    expect(showModalSpy).toHaveBeenCalled()
  })

  test("'closeModal' close the modal", () => {
    render(<Modal id="example">Example text</Modal>)
    closeModal("#example")
    expect(closeModalSpy).toHaveBeenCalled()
  })

  test("'toggleModal' toggle the modal", () => {
    const result = render(<Modal id="example">Example text</Modal>)
    toggleModal("#example")
    expect(showModalSpy).toHaveBeenCalled()
    expect(closeModalSpy).not.toHaveBeenCalled()
    jest.clearAllMocks()
    result.rerender(<Modal id="example" open>Example text</Modal>)
    toggleModal("#example")
    expect(showModalSpy).not.toHaveBeenCalled()
    expect(closeModalSpy).toHaveBeenCalled()
  })
})