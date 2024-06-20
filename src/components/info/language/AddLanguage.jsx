"use client"
import { useRef, useState } from "react"

const AddLanguage = () => {

  const languageRef = useRef(null)
  const proficiencyRef = useRef(null)


  const [loading, setLoading] = useState(false)

  function _addLanguage(e) {
    e.preventDefault()
  }

  return (
    <>
      <form onSubmit={_addLanguage} className="form-control">


        {/* submit button */}
        <div>
          <button
            className="w-full app-bg-primary duration-300 hover:app-bg-primary-dark btn btn-md text-white"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="loading loading-dots loading-xs"></span>
              </>
            ) : (
              "Add"
            )}
          </button>
        </div>
      </form>
    </>
  )
}

export default AddLanguage