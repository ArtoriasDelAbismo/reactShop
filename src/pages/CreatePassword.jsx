import React from 'react';
import '@styles/CreatePassword.scss';
import logo from '@logos/logo_yard_sale.svg';

const CreatePassword = () => {
  return (
    <div className="CreatePassword" >
        <div className="form-container" />
            <img src= {logo} alt="logo" className="logo" />

            <h1 className="title">Create a new password</h1>
            <p className="subtitle">Enter a new password for your account</p>

            <form action="/" className="form">
                <label for="password" className="label">Password</label>
                <input type="password" id="password" placeholder="*********" className="input input-password" />

                <label for="new-password" className="label">Password</label>
                <input type="password" id="new-password" placeholder="*********" className="input input-password" />

                <input type="submit" value="Confirm" className="primary-button login-button" />
            </form>
        <div/>
    </div>

  );
}

export default CreatePassword;