 //import { useLocation } from "react-router-dom";
import './User.css';

// export default User;

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export const User = () => {
  const initialProfile = {
    username: 'Yash',
    email: 'yash@gmail.com',
    mobile: '', // Added empty string for mobile
    bio: 'Hello, I am Yash.',
  };

  const [profile, setProfile] = useState(initialProfile);
  const [editing, setEditing] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState({ ...initialProfile });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile({
      ...updatedProfile,
      [name]: value,
    });
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setProfile({ ...updatedProfile });
    setEditing(false);
  };

  const handleCancelClick = () => {
    setUpdatedProfile({ ...profile });
    setEditing(false);
  };

  return (
    <div className="profile-container">
      {editing ? (
        <div>
        <div className="text">Edit Profile</div>
        <div className="underline"></div>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={updatedProfile.username}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={updatedProfile.email}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formMobile">
              <Form.Label>Mobile No:</Form.Label>
              <Form.Control
                type="text"
                name="mobile"
                value={updatedProfile.mobile}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formBio">
              <Form.Label>Bio:</Form.Label>
              <Form.Control
                as="textarea"
                name="bio"
                value={updatedProfile.bio}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button variant="primary" onClick={handleSaveClick}>
              Save
            </Button>
            <Button variant="secondary" onClick={handleCancelClick}>
              Cancel
            </Button>
          </Form>
        </div>
      ) : (
        <div>
        <div className="text">User Profile</div>
        <div className="underline"></div>
        <p></p>
          <p>
            <strong>Username:</strong> {profile.username}
          </p>
          <p>
            <strong>Email:</strong> {profile.email}
          </p>
          <p>
            <strong>Mobile No:</strong> {profile.mobile}
          </p>
          <p>
            <strong>Bio:</strong> {profile.bio}
          </p>
          <Button variant="primary" onClick={handleEditClick}>
            Edit
          </Button>
        </div>
      )}
    </div>
  );
};

export default User;


