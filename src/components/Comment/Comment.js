import * as React from "react";
import axios from "axios";
import getToken from "../utils/getToken";
import {
  Button,
  Form,
  Input,
  Modal,
  Icon,
  TextArea,
  Divider,
} from "semantic-ui-react";
import { findLastIndex } from "lodash";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      text: "",
      photo: "",
      message: "",
    };
  }

  handleSubmit = async (e) => {
    const user = localStorage.getItem("name");
    const text = this.state.text;
    const photo = this.props.imgURL;
    axios
      .post("/comment", {
        user: user,
        text: text,
        photo: photo,
      })
      .then((response) => {
        console.log(response.data);
        this.setState({ message: "Submited!" });
      })
      .catch((error) => {
        this.setState({ message: "something went wrong" });
      });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(() => {
      return { [name]: value };
    });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit} style={{ padding: "5px" }}>
          <Form.Field
            control={TextArea}
            placeholder="Submit a comment !"
            style={{ maxHeight: "90px" }}
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
          ></Form.Field>
          <Button type="submit" floated="right">
            Submit
          </Button>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "green",
              fontSize: "16px",
            }}
          >
            {this.state.message}
          </div>
        </Form>
      </div>
    );
  }
}

export default Comment;
