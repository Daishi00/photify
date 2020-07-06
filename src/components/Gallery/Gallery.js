// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import styles from "./gallery.module.scss";
// import Photo from "../Photo/Photo";
// const Gallery = () => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     axios({
//       method: "GET",
//       url: `/photos`
//     })
//       .then(async res => {
//         await setData(res.data.reverse());
//         {
//           console.log(res.data);
//         }
//       })
//       .catch(err => console.log(err));
//   }, []);

//   return (
//     <div className={styles.container}>
//       {data.map(item => (
//         <Photo
//           imgURL={item.imgURL}
//           user={item.user}
//           description={item.description}
//           likes={item.likes}
//         />
//       ))}
//     </div>
//   );
// };

// export default Gallery;
