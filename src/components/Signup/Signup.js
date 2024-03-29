import React, { Component } from "react";
import { Button, Form, Input, Modal, Icon } from "semantic-ui-react";
import styles from "../Header/header.module.scss";

import axios from "axios";

class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordconf: "",
    message: ""
  };

  onFormChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onFormSubmit = async e => {
    e.preventDefault();
    console.log("xD");
    const { name, email, password, passwordconf } = this.state;
    if (password !== passwordconf)
      return this.setState({ message: "confirm password" });

    axios
      .post("/users/", {
        name: name,
        email: email,
        password: password
      })
      .then(response => {
        this.setState({ message: "Success now u can log in!" });
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
        trigger={
          <button className={`${styles.button}`} onClick={this.handleOpen}>
            <Icon name="plus" />
            Sign up
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
                  <i className="at icon"></i>
                </label>
                <Input
                  placeholder="email"
                  name="email"
                  value={this.state.email}
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
            <Form.Field>
              <div className="ui labeled input">
                <label
                  className="ui right pointing label"
                  style={{ width: "40px" }}
                >
                  <i className="lock icon"></i>
                </label>
                <Input
                  placeholder="confirm password"
                  name="passwordconf"
                  value={this.state.passwordconf}
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
                Sign up
              </Button>
              {this.state.message === "Success now u can log in!" ? (
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

export default Signup;
