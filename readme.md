# yet-another-react-modal-component

[![](https://img.shields.io/npm/v/yet-another-react-modal-component)](https://www.npmjs.com/package/yet-another-react-modal-component)
[![GitHub](https://img.shields.io/static/v1?message=GitHub&color=181717&logo=GitHub&logoColor=FFFFFF&label=)](https://github.com/Mikgamer/yet-another-react-modal-component)
[![](https://img.shields.io/npm/l/yet-another-react-modal-component)](https://opensource.org/licenses/MIT)
[![](https://img.shields.io/github/package-json/dependency-version/mikgamer/yet-another-react-modal-component/dev/react)](https://reactjs.org/)
![](https://img.shields.io/snyk/vulnerabilities/npm/yet-another-react-modal-component)

Yet Another [React](https://reactjs.org/) Modal Component

## Table of content

- [Installation](#installation)
- [Example](#example)
- [Functions](#functions)
  - [openModal](#openmodal)
  - [closeModal](#closemodal)
  - [toggleModal](#togglemodal)
- [Options](#options)
  - [noCloseButton](#noclosebutton)
  - [noBackdropClose](#nobackdropclose)
  - [defaultOpen](#defaultopen)
  - [Other props](#other-props)
- [Accessibility](#accessibility)

## Installation

### With [npm](https://npmjs.org/) :

```
npm install @mikgamer/yet-another-react-modal-component
```

### With [yarn](https://yarnpkg.com) :

```
yarn add @mikgamer/yet-another-react-modal-component
```

## Example

```JSX
import React from 'react'
import Modal, { openModal }

const App = () => {
  return (
    <>
      <button onClick={() => openModal("#example") } >
        Open Modal
      </button>

      <Modal id="example">
        <h1>Title</h1>
        Example text
      </Modal>
    </>
  )
}
```

## Functions

There is 3 function : `openModal`, `closeModal` and `toggleModal` :

### `openModal`

Use `openModal` to strictly open a modal :

```JSX
import React from 'react'
import Modal, { openModal }

const App = () => {
  return (
    <>
      <button onClick={() => openModal("#example") } >
        Open Modal
      </button>

      <Modal id="example">
        <h1>Title</h1>
        Example text
      </Modal>
    </>
  )
}
```

### `closeModal`

Use `closeModal` to strictly close a modal :

```JSX
import React from 'react'
import Modal, { openModal, closeModal }

const App = () => {
  return (
    <>
      <button onClick={() => openModal("#example") } >
        Open Modal
      </button>

      <Modal id="example">
        <h1>Title</h1>
        Example text
        <button onClick={() => closeModal("#example") } >
          Close Modal
        </button>
      </Modal>
    </>
  )
}
```

### `toggleModal`

Use `toggleModal` to toggle a modal :

```JSX
import React from 'react'
import Modal, { toggleModal }

const App = () => {
  return (
    <>
      <button onClick={() => toggleModal("#example") } >
        toggleModal the Modal
      </button>

      <Modal id="example">
        <h1>Title</h1>
        Example text
        <button onClick={() => toggleModal("#example") } >
          toggleModal the Modal
        </button>
      </Modal>
    </>
  )
}
```

## Options

### `noCloseButton`

The modal come with a close button that can be disabled with `noCloseButton` :

```html
<Modal noCloseButton>
  <h1>Title</h1>
  Example text
</Modal>
```

### `noBackdropClose`

The modal backdrop can be closed on click, it can be disabled with `noBackdropClose` :

```html
<Modal noBackdropClose>
  <h1>Title</h1>
  Example text
</Modal>
```

### `defaultOpen`

The modal can be opened by default with `defaultOpen` :

```html
<Modal defaultOpen>
  <h1>Title</h1>
  Example text
</Modal>
```

### Other props

You can also add any other props :

```html
<Modal id="example" className="example">
  <h1>Title</h1>
  Example text
</Modal>
```

## Accessibility

The modal use the `<dialog>` element, `aria-modal` is handled automatically. If you wish to know more about dialog accessibility, you can read [W3C aria practices for modal](https://w3c.github.io/aria-practices/#dialog_modal).
