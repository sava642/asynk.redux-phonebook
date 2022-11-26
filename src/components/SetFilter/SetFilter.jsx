import React from "react"
import { useDispatch } from "react-redux"
import { setStatusFilter } from "../redux/filtersSlice/filtersSlice"

export const SetFilter = () => {

	const handleSubmit = (e) => {
		e.preventDefault()
		const form = e.currentTarget
		const filter = form.elements.filter.value
		dispatch(setStatusFilter(filter))
		//form.reset()
	}

	const dispatch = useDispatch()

	return (

		<form onSubmit={handleSubmit}>
			<h4 className="mb-4 pb-3">Find contacts by name</h4>
			<div className="form-group">
				<input
					type="text"
					name="filter"
					className="form-style"
					placeholder="Find contacts"
					id="logname"
				/>
				<i className="input-icon uil uil-user"></i>
			</div>
			<div className="form-link">
				<button type="submit" className="btn mt-4">find</button>
			</div>
		</form>
	)
}

