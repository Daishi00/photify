import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Comment, Form, Header, Divider } from "semantic-ui-react";
import styles from "./listComments.modules.scss";
import Avatar from "react-avatar";

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
                <Avatar
                  name={item.user
                    .split(" ")
                    .map((n) => n[0])
                    .join(".")}
                  className={styles.avatar}
                  size="30px"
                />
                <Comment.Author
                  as="a"
                  style={{ marginLeft: "5px", fontSize: "17px" }}
                >
                  {item.user}
                </Comment.Author>
                <Comment.Text
                  style={{
                    marginTop: "5px",
                    wordWrap: "break-word",
                  }}
                >
                  {item.text}
                </Comment.Text>
                <Divider />
              </Comment.Content>
            </Comment>
          )}
        </div>
      ))}
    </>
  );
};

export default ListComments;
