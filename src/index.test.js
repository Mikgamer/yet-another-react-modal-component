import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"

import Modal, { openModal, closeModal, toggleModal } from "./index.js"

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

  // test("is open with 'defaultOpen'", () => {
  //   render(<Modal defaultOpen>Example text</Modal>)
  //   expect(screen.getByText(/Example text/)).toHaveAttribute("aria-modal", "true")
  //   expect(screen.getByText(/Example text/)).toHaveAttribute("open")
  // })

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
  // test("'openModal' open modal", () => {
  //   render(<>
  //     <button onClick={() => openModal("#example") }>Open Modal</button>
  //     <Modal id="example">Example text</Modal>
  //   </>)
  //   expect(screen.getByText(/Example text/)).toHaveAttribute("aria-modal", "false")
  //   expect(screen.getByText(/Example text/)).not.toHaveAttribute("open")
  //   fireEvent.click(screen.getByText(/Open Modal/))
  //   expect(screen.getByText(/Example text/)).toHaveAttribute("aria-modal", "true")
  //   expect(screen.getByText(/Example text/)).toHaveAttribute("open")
  // })

  // test("'openModal' does not close modal", () => {
  //   render(<>
  //     <button onClick={() => openModal("#example") }>Open Modal</button>
  //     <Modal id="example" defaultOpen>Example text</Modal>
  //   </>)
  //   expect(screen.getByText(/Example text/)).toHaveAttribute("aria-modal", "true")
  //   expect(screen.getByText(/Example text/)).toHaveAttribute("open")
  //   fireEvent.click(screen.getByText(/Open Modal/))
  //   expect(screen.getByText(/Example text/)).toHaveAttribute("aria-modal", "true")
  //   expect(screen.getByText(/Example text/)).toHaveAttribute("open")
  // })

  // test("'closeModal' close modal", () => {
  //   render(<>
  //     <button onClick={() => closeModal("#example") }>Close Modal</button>
  //     <Modal id="example" defaultOpen>Example text</Modal>
  //   </>)
  //   expect(screen.getByText(/Example text/)).toHaveAttribute("aria-modal", "true")
  //   expect(screen.getByText(/Example text/)).toHaveAttribute("open")
  //   fireEvent.click(screen.getByText(/Close Modal/))
  //   expect(screen.getByText(/Example text/)).toHaveAttribute("aria-modal", "false")
  //   expect(screen.getByText(/Example text/)).not.toHaveAttribute("open")
  // })

  // test("'closeModal' does not open modal", () => {
  //   render(<>
  //     <button onClick={() => closeModal("#example") }>Close Modal</button>
  //     <Modal id="example">Example text</Modal>
  //   </>)
  //   expect(screen.getByText(/Example text/)).toHaveAttribute("aria-modal", "false")
  //   expect(screen.getByText(/Example text/)).not.toHaveAttribute("open")
  //   fireEvent.click(screen.getByText(/Close Modal/))
  //   expect(screen.getByText(/Example text/)).toHaveAttribute("aria-modal", "false")
  //   expect(screen.getByText(/Example text/)).not.toHaveAttribute("open")
  // })

  // test("'toggleModal' toggle modal", () => {
  //   render(<>
  //     <button onClick={() => toggleModal("#example") }>Toggle Modal</button>
  //     <Modal id="example">Example text</Modal>
  //   </>)
  //   expect(screen.getByText(/Example text/)).toHaveAttribute("aria-modal", "false")
  //   expect(screen.getByText(/Example text/)).not.toHaveAttribute("open")
  //   fireEvent.click(screen.getByText(/Toggle Modal/))
  //   expect(screen.getByText(/Example text/)).toHaveAttribute("aria-modal", "true")
  //   expect(screen.getByText(/Example text/)).toHaveAttribute("open")
  //   fireEvent.click(screen.getByText(/Toggle Modal/))
  //   expect(screen.getByText(/Example text/)).toHaveAttribute("aria-modal", "false")
  //   expect(screen.getByText(/Example text/)).not.toHaveAttribute("open")
  // })
})