import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { addContact } from "../redux/operations"
import shortid from 'shortid';
import Swal from 'sweetalert2'
import './LoginForm.css';
import { selectContacts } from "components/redux/selectors";


export const LoginForm = () => {
	const arrayContacts = useSelector(selectContacts)
	const handleSubmit = (e) => {
		e.preventDefault()
		const form = e.currentTarget
		const nameContact = form.elements.name.value
		const numberContact = form.elements.tel.value
		if (nameContact === "") {
			Swal.fire('Enter name')
			return
		}
		if (numberContact === "") {
			Swal.fire('Enter number')
			return
		}
		const validCurrentNum = arrayContacts.find(el => el.number === numberContact);
		if (validCurrentNum) {
			Swal.fire(`Number ${numberContact} is already in contacts`)
			form.reset()
			return
		} else {
			const state = {
				id: shortid.generate(),
				name: nameContact,
				number: numberContact,
			}
			dispatch(addContact(state))
		}
		form.reset()
	}

	const dispatch = useDispatch()


	return (
		<div className="card-front">
			<div className="center-wrap">
				<div className="section text-center">
					<h4 className="mb-4 pb-3">Add contact</h4>
					<form onSubmit={handleSubmit}>
						<div className="form-group">
							<input
								type="text"
								name="name"
								className="form-style"
								placeholder="Add name"
								id="logemail"
							/>
							<i className="input-icon uil uil-at"></i>
						</div>
						<div className="form-group mt-2">
							<input
								type="tel"
								name="tel"
								className="form-style"
								placeholder="Add number"
								id="logpass"
							/>
							<i className="input-icon uil uil-lock-alt"></i>
						</div>
						<div className="form-link">
							<button type="submit" className="btn mt-4" >
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}