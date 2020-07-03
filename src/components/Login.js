import React, { Component } from "react";
import { Button, Form, Input, Modal, Icon } from "semantic-ui-react";
import styles from "./header.module.scss";

import axios from "axios";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      modalOpen: false,
      request: "",
      endmessage: "",
      borderColor: "",
      errors: {}
    };
  }
  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password} = this.state;
    const imageFormData = new FormData();
    imageFormData.set("email", email);
    imageFormData.set("password", password);
    const headers = {
      "Content-Type": "multipart/form-data",
    };
    axios({
      method: "post",
      url: "/users/login",
      headers: headers,
    })
      .then((res) => {
        console.log(res.data);
        this.setState({
          endmessage: "Login succes!",
        });
        console.log(this.state.request);
      })
      .catch((err) => {
        this.setState({
          endmessage: err.response.data.message,
        });
      });
  };

  render() {
    return (
      <Modal
        className="entrance-center"
        size={"mini"}
        trigger={
          <button
            className={`${styles.button} ${styles.buttonLogin}`}
            onClick={this.handleOpen}
          >
            <Icon name="user" />
            Login
          </button>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
       
        <Modal.Content>
          <Form onSubmit={this.handleSubmit} style={{ padding: "5px" }}>
            <Form.Field>
              <div className="ui labeled input">
                <label
                  className="ui right pointing label"
                  style={{ width: "40px" }}
                >
                  <i className="user icon"></i>
                </label>
                <Input
                  placeholder="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
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
              {this.state.endmessage === "Login succes!" ? (
                <h5
                  style={{
                    color: "green",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {this.state.endmessage}
                </h5>
              ) : (
                <h5
                  style={{
                    color: "red",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {this.state.endmessage}
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
