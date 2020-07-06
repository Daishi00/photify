import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Comment, Form, Header } from "semantic-ui-react";
import styles from "./listComments.modules.scss";
const ListComments = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `/comment`,
    })
      .then(async (res) => {
        await setData(res.data);
        {
          console.log(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {data.map((item) => (
        <div style={{}}>
          {item.photo === props.imgURL && (
            <Comment className={styles.comment}>
              <Comment.Content>
                <Comment.Author as="a">{item.user}</Comment.Author>
                <Comment.Text>{item.text}</Comment.Text>
              </Comment.Content>
            </Comment>
          )}
        </div>
      ))}
    </>
  );
};

export default ListComments;
