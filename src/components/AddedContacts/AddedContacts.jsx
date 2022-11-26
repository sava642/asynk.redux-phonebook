import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteContact } from "../redux/operations"
import IconButton from "./IconButton";
import { IoMdClose } from "react-icons/io";
import { SetFilter } from "../SetFilter/SetFilter";
import Swal from 'sweetalert2'
import './AddedContacts.css';
import { selectContacts, selectStatusFilter } from "components/redux/selectors";


export const AddedContacts = () => {

	const dispatch = useDispatch()
	const arrayContacts = useSelector(selectContacts)
	const filter = useSelector(selectStatusFilter)
	const getVisiblContacts = arrayContacts.filter(contact =>
		contact.name.toLowerCase().includes(filter.toLowerCase()))
	if (filter.length && getVisiblContacts.length === 0) {
		Swal.fire('Contact not found')
	}

	return (
		<div className="card-back">
			<div className="center-wrap">
				<div className="section text-center">
					<SetFilter />
					<ul className="ul-list-contacts">
						{getVisiblContacts.map(({ id, name, number }, index) => (
							<li key={id}>
								<span style={{ marginRight: 15, textAlign: "center" }}>{index + 1}</span>
								<span style={{ marginRight: 15, textAlign: "center", color: "red" }}>{name}:</span>
								<span style={{ marginRight: 15, textAlign: "center" }}>{number}</span>
								<IconButton aria-label="delet" onClick={() => dispatch(deleteContact(id))}><IoMdClose /></IconButton>
							</li>
						)
						)}
					</ul>
				</div>
			</div>
		</div>
	)
}





