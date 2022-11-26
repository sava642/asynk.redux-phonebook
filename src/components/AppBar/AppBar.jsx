import React from "react"
import { AddedContacts } from "../AddedContacts/AddedContacts"
import { LoginForm } from "../LoginForm/LoginForm"
import './AppBar.css';
import { useDispatch, useSelector } from "react-redux";
import { handleFrontBack } from "../redux/frontBackSlice/frontBackSlice"
import { selectError, selectIsLoading } from "../redux/selectors";


export const AppBar = () => {

	const dispatch = useDispatch()
	const error = useSelector(selectError)
	const isLoading = useSelector(selectIsLoading)
	const handleChange = (e) => {
		const value = e.target.checked
		dispatch(handleFrontBack(value))
	}

	return (
		<>
			{/* <a href="https://front.codes/" className="logo" target="_blank">
				<img src="https://assets.codepen.io/1462889/fcy.png" alt="" />
			</a> */}
			{error && <p>{error}</p>}

			{isLoading ? <p>Loading data...</p>
				:
				<div className="section">
					<div className="container">
						<div className="row full-height justify-content-center">
							<div className="col-12 text-center align-self-center py-5">
								<div className="section pb-5 pt-5 pt-sm-2 text-center">
									<h6 className="mb-0 pb-3 centre h6">
										<span className="h6 first">Add contact </span>
										<span className="h6 second">Contacts</span>
									</h6>
									<input
										className="checkbox"
										type="checkbox"
										id="reg-log"
										name="reg-log"
										onClick={handleChange}
									/>
									<label htmlFor="reg-log"></label>
									<div className="card-3d-wrap mx-auto">
										<div className="card-3d-wrapper">
											<LoginForm />
											<AddedContacts />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			}
		</>
	)
}
