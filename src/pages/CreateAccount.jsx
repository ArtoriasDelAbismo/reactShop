import React, {useRef} from "react";
import '@styles/CreateAccount.scss'
const CreateAccount = () => {
  const inputRef = useRef()

  function focus(){
    inputRef.current.focus();
  }

    return (
      <div className="login">
        <div className="form-container">
          <h1 className="title" onClick={focus}>My account</h1>

          <form action="/" className="form">
            <div className="form">
              <label for="name" className="label">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Teff"
                className="input input-name"
                ref={inputRef}
              />

              <label for="email" className="label">
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="platzi@example.com"
                className="input input-email"
              />

              <label for="password" className="label">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="*********"
                className="input input-password"
              />
            </div>

            <input
              type="submit"
              value="Create"
              className="primary-button login-button"
            />
          </form>
        </div>
      </div>
    );
}

export default CreateAccount;