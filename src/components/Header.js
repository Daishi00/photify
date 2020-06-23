import React from "react";
import styles from "./header.module.scss";
import PersonIcon from "@material-ui/icons/Person";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import AddIcon from "@material-ui/icons/Add";
import Modal from "react-modal";

const Header = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <header>
        <div className={styles.logoContainer}>
          <h1>photify</h1>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={() => openModal()}>
            <AddAPhotoIcon className={styles.icon} />
            Add photo
          </button>
          <button className={styles.button} onClick={() => openModal()}>
            <PersonIcon className={styles.icon} />
            Login
          </button>
          <button className={styles.button} onClick={() => openModal()}>
            <AddIcon className={styles.icon} />
            Sign up
          </button>
        </div>
      </header>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
};

export default Header;
