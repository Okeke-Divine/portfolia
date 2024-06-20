"use client"
import { useRef, useState } from "react"

const AddLanguage = () => {

  const languageRef = useRef(null)
  const proficiencyRef = useRef(null)

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