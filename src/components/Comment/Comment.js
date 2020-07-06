import * as React from "react";
import axios from "axios";
import getToken from "../utils/getToken";
import { Button, Form, Input, Modal, Icon } from "semantic-ui-react";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      text: "",
      photo: "",
      message: ""
    };
  }

  handleSubmit = async e => {
    const user = localStorage.getItem("name");
    const text = this.state.text;
    const photo = this.props.imgURL;
    axios
      .post("/comment", {
        user: user,
        text: text,
        photo: photo
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        this.setState({ message: error.response.data });
        console.log(`login error ${error.response.data}`);
      });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(() => {
      return { [name]: value };
    });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit} style={{ padding: "5px" }}>
          <Form.Field>
            <div className="ui labeled input">
              <label
                className="ui right pointing label"
                style={{ width: "40px" }}
              >
                <i className="list alternate outline icon"></i>
              </label>
              <Input
                placeholder="text"
                name="text"
                value={this.state.text}
                onChange={this.handleChange}
              />
            </div>
          </Form.Field>
        </Form>
      </div>
    );
  }
}

export default Comment;
