import React, { useState } from 'react';
import UserService from '../services/UserService';

function UpdateForm(props) {
    const [firstName, setFirstName] = useState(props.userData.firstName);
    const [lastName, setLastName] = useState(props.userData.lastName);
    const [graduation, setGraduation] = useState(props.userData.graduation);
    const [gradMarks, setgradMarks] = useState(props.userData.gradMarks);
    const [marks10, setMarks10] = useState(props.userData.marks10);
    const [marks12, setmarks12] = useState(props.userData.marks12);
    const [city, setCity] = useState(props.userData.city);
    const [state, setState] = useState(props.userData.state);
    const [contry, setcontry] = useState(props.userData.contry);

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleGraduation = (event) => {
        setGraduation(event.target.value);
    };

    const handleGradMarks = (event) => {
        setgradMarks(event.target.value);
    };
    
    const handleMarks10 = (event) => {
        setMarks10(event.target.value);
    };

    const handleMarks12 = (event) => {
        setmarks12(event.target.value);
    };

    const handleCity = (event) => {
        setCity(event.target.value);
    };

    const handleState = (event) => {
        setState(event.target.value);
    };

    const handleContry = (event) => {
        setcontry(event.target.value);
    };


    const handleSubmit = (event) => {

        const storedUserName = localStorage.getItem('user');
        const userId = JSON.parse(storedUserName);
        event.preventDefault();

        const updatedUserData = {
            firstName: firstName,
            lastName: lastName,
            graduation: graduation,
            gradMarks: gradMarks,
            marks10: marks10,
            marks12: marks12,
            city: city,
            state: state,
            contry: contry

            // Add more fields as needed
        };

        UserService.updateUser(userId, updatedUserData)
            .then((response) => {
                // Handle success, e.g. display a success message or update the UI
                console.log('User data updated:', response.data);
                // Close the update form after successful update
                props.onClose();
            })
            .catch((error) => {
                // Handle error, e.g. display an error message
                console.error('Error updating user data:', error);
            });
    };

    return (
        <div className="update-form col-lg-6">
            <div className="card ">
                <div className="card-header">
                    <h5 className="card-title">Update Profile</h5>
                    <button type="button" className="btn-close" onClick={props.onClose} ></button>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-1">
                            <label htmlFor="firstName" className="form-label">
                                First Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                value={firstName}
                                onChange={handleFirstNameChange}
                            />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="lastName" className="form-label"
                                id="lastName"
                                value={lastName}
                                onChange={handleLastNameChange}>
                                Last Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                value={lastName}
                                onChange={(event) => setLastName(event.target.value)}
                            />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="lastName" className="form-label"
                                id="graduation"
                                value={graduation}
                                onChange={handleGraduation}>
                                Graduation
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="graduaton"
                                value={graduation}
                                onChange={(event) => setGraduation(event.target.value)}
                            />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="lastName" className="form-label"
                                id="gradmarks"
                                value={gradMarks}
                                onChange={handleGradMarks}>
                                Graduation Marks
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="gradMarks"
                                value={gradMarks}
                                onChange={(event) => setgradMarks(event.target.value)}
                            />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="lastName" className="form-label"
                                id="lastName"
                                value={marks12}
                                onChange={handleMarks12}>
                                12th Marks
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                value={marks12}
                                onChange={(event) => setmarks12(event.target.value)}
                            />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="lastName" className="form-label"
                                id="lastName"
                                value={marks10}
                                onChange={handleMarks10}>
                                10th Marks
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                value={marks10}
                                onChange={(event) => setMarks10(event.target.value)}
                            />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="lastName" className="form-label"
                                id="lastName"
                                value={city}
                                onChange={handleCity}>
                                City
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                value={city}
                                onChange={(event) => setCity(event.target.value)}
                            />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="lastName" className="form-label"
                                id="lastName"
                                value={state}
                                onChange={handleState}>
                                State
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                value={state}
                                onChange={(event) => setState(event.target.value)}
                            />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="lastName" className="form-label"
                                id="lastName"
                                value={contry}
                                onChange={handleContry}>
                                Contry
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                value={contry}
                                onChange={(event) => setcontry(event.target.value)}
                            />
                        </div>
                        {/* Add more form fields here */}
                        <button type="submit" className="btn btn-primary">
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateForm;
