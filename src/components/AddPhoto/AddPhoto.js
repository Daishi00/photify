import React, { Component } from "react";
import { Button, Form, Input, Modal, Icon } from "semantic-ui-react";
import styles from "../Header/header.module.scss";

import axios from "axios";

class AddPhoto extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      description: "",
      image: null,
      tags: "",
      modalOpen: false,
      request: "",
      endmessage: "",
      borderColor: ""
    };
  }
  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleUpload = e => {
    const { name, files } = e.target;
    console.log(files);
    this.setState({
      [name]: files[0]
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { user, description, image, tags } = this.state;
    const imageFormData = new FormData();
    imageFormData.set("user", user);
    imageFormData.set("description", description);
    imageFormData.set("image", image);
    imageFormData.set("tags", tags);
    const headers = {
      "Content-Type": "multipart/form-data"
    };
    axios({
      method: "post",
      url: "/photos/",
      data: imageFormData,
      headers: headers
    })
      .then(res => {
        console.log(res.data);
        this.setState({
          endmessage: "Success!"
        });
        console.log(this.state.request);
      })
      .catch(err => {
        this.setState({
          endmessage: err.response.data.message
        });
      });
  };

  render() {
    return (
      <Modal
        className={`entrance-center ${styles.slide}`}
        size={"mini"}
        trigger={
          <button
            className={`${styles.button} ${styles.buttonUpload}`}
            onClick={this.handleOpen}
          >
            <i className="cloud upload icon"></i>Upload
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
                  placeholder="user"
                  name="user"
                  value={this.state.user}
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
                  <i className="list alternate outline icon"></i>
                </label>
                <Input
                  placeholder="description"
                  name="description"
                  value={this.state.description}
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
                  <i className="list icon"></i>
                </label>
                <Input
                  placeholder="tags"
                  name="tags"
                  value={this.state.tags}
                  onChange={this.handleChange}
                />
              </div>
            </Form.Field>
            <Form.Field>
              <h5 style={{ margin: "10px 0px 6px 0px" }}>Image (JPEG/PNG)</h5>
              <Input
                type="file"
                name="image"
                icon="file image"
                onChange={this.handleUpload}
              />
            </Form.Field>

            <Modal.Actions>
              <Button
                className="red ui button"
                onClick={this.handleClose}
                style={{ marginLeft: "0px" }}
              >
                Leave
              </Button>
              <Button
                className={`ui button ${styles.buttonColor}`}
                type="submit"
                floated="right"
              >
                Upload
              </Button>
              {this.state.endmessage === "Success!" ? (
                <h5
                  style={{
                    color: "green",
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  {this.state.endmessage}
                </h5>
              ) : (
                <h5
                  style={{
                    color: "red",
                    display: "flex",
                    justifyContent: "center"
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

export default AddPhoto;
