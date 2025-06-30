// EventForm.js
import React, { useState } from "react";
import "./EventForm.css";
import { X } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EventForm = ({ onClose }) => {
	const [closing, setClosing] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		contact: "",
		course: "",
		roll: "",
		universityEmail: "",
	});

	const [errors, setErrors] = useState({});

	const handleClose = () => {
		setClosing(true);
		setTimeout(() => {
			onClose();
			setClosing(false);
		}, 400);
	};

	const validate = () => {
		const errs = {};
		if (!formData.name.trim()) errs.name = "Name is required";
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
			errs.email = "Valid email required";
		if (!/^\d{10}$/.test(formData.contact))
			errs.contact = "Contact must be 10 digits";
		if (!formData.course.trim()) errs.course = "Course is required";
		if (!/^[A-Za-z0-9]{4,}$/.test(formData.roll))
			errs.roll = "Valid Roll Number required";
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.universityEmail))
			errs.universityEmail = "Valid University Email required";

		setErrors(errs);
		return Object.keys(errs).length === 0;
	};

	const handleChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validate()) {
			console.log(formData); // replace with your file save logic
			toast.success("Registration successful!");
			setFormData({
				name: "",
				email: "",
				contact: "",
				course: "",
				roll: "",
				universityEmail: "",
			});
		} else {
			toast.error("Please fix the errors before submitting.");
		}
	};

	return (
		<>
			<div className={`form-overlay ${closing ? "hidden" : ""}`}>
				<div className={`form-card ${closing ? "hidden" : ""}`}>
					<button className="close-btn" onClick={handleClose}>
						<X size={24} />
					</button>
					<h2>Register Now</h2>
					<p>Fill out the form to participate.</p>
					<form onSubmit={handleSubmit} noValidate>
						{[
							"Name",
							"Email",
							"Contact",
							"Course",
							"University Roll Number",
							"University Email",
						].map((field) => (
							<div className="input-group" key={field}>
								<input
									type="text"
									name={field}
									placeholder={field.replace(
										/([A-Z])/g,
										"$1"
									)}
									value={formData[field]}
									onChange={handleChange}
									className={errors[field] ? "error" : ""}
								/>
								{errors[field] && (
									<span className="error-text">
										{errors[field]}
									</span>
								)}
							</div>
						))}
						<button type="submit">Submit</button>
					</form>
				</div>
			</div>
			<ToastContainer position="top-right" autoClose={3000} />
		</>
	);
};

export default EventForm;
