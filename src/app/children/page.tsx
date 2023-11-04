'use client'
import { PropsWithChildren} from 'react'

type myPropsType = {
    isOpen: boolean,
    onClose: ()=> void 
}

function Modal({ isOpen, onClose, children }: PropsWithChildren<myPropsType>) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        {children}
      </div>
      <button onClick={onClose} className="modal-close-button">
        Close
      </button>
    </div>
  );
}

export default function Home(){
  const showLoginFormModal = false;
  const showRegistrationFormModal = true;

  return (
    <div>
      <Modal isOpen={showLoginFormModal} onClose={() => console.log("Login modal closed")}>
        <h2>Login</h2>
        <form>
          {/* Form fields for login */}
          Login form fields
        </form>
      </Modal>

      <Modal isOpen={showRegistrationFormModal} onClose={() => console.log("Registration modal closed")}>
        <h2>Register</h2>
        <form>
          {/* Form fields for registration */}
          Registration form fields
        </form>
      </Modal>
    </div>
  );
}

