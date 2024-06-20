"use client"
import { useRef, useState } from "react"

const AddLanguage = () => {

  function _addLanguage(e) {
    e.preventDefault()
  }

  return (
    <>
      <form onSubmit={_addLanguage} className="form-control"></form>
    </>
  )
}

export default AddLanguage