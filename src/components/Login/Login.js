import React, { Component } from "react";
import { Button, Form, Input, Modal, Icon } from "semantic-ui-react";
import styles from "../Header/header.module.scss";

import axios from "axios";

class Login extends Component {
  state = {
    name: "",
    password: "",
    message: ""
  };

  // pobranie i ustawienie wartości input
  onFormChange = e => {
    const { name, value } = e.target;
    this.setState(() => {
      return { [name]: value };
    });
  };

  refresh = () => {
    setTimeout(function() {
      window.location.reload();
    }, 100);
  };

  //  pobranie danych z formularza
  onFormSubmit = async e => {
    e.preventDefault();
    const { name, password } = this.state;

    localStorage.setItem("name", name);

    axios
      .post("/auth", {
        name: name,
        password: password
      })
      .then(response => {
        // zapisywanie statusu, jako token do localStorage
        localStorage.setItem("status", response.data);

        this.setState({ message: "Success!" });
        this.refresh();
      })
      .catch(error => {
        this.setState({ message: error.response.data });
        console.log(`login error ${error.response.data}`);
      });
  };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    return (
      <Modal
        className={`entrance-center ${styles.slide}`}
        size={"mini"}
        dimmer={"blurring"}
        trigger={
          <button className={`${styles.button}`} onClick={this.handleOpen}>
            <Icon name="user" />
            Log in
          </button>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Content>
          <Form onSubmit={this.onFormSubmit} style={{ padding: "5px" }}>
            <Form.Field>
              <div className="ui labeled input">
                <label
                  className="ui right pointing label"
                  style={{ width: "40px" }}
                >
                  <i className="user icon"></i>
                </label>
                <Input
                  placeholder="name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onFormChange}
                />
              </div>
            </Form.Field>
            <Form.Field>
              <div className="ui labeled input">
                <label
                  className="ui right pointing label"
                  style={{ width: "40px" }}
                >
                  <i className="lock icon"></i>
                </label>
                <Input
                  placeholder="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onFormChange}
                  type="password"
                />
              </div>
            </Form.Field>

            <Modal.Actions>
              <Button
                className="red ui button"
                onClick={this.handleClose}
                style={{ marginLeft: "0px" }}
              >
                <Icon name="external alternate" />
                Leave
              </Button>
              <Button
                className={`ui button ${styles.buttonColor}`}
                type="submit"
                floated="right"
              >
                <Icon name="plus" />
                Login
              </Button>
              {this.state.message === "Success!" ? (
                <h5
                  style={{
                    color: "green",
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  {this.state.message}
                </h5>
              ) : (
                <h5
                  style={{
                    color: "red",
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  {this.state.message}
                </h5>
              )}
            </Modal.Actions>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default Login;
