// import React, { Component } from "react";
// import axios from "axios";

// class Details extends Component {
//   constructor() {
//     super();

//     this.state = {
//       item: {}
//     };
//   }

//   componentDidMount() {
//     axios.get("/api/movie").then(res => {
//       this.setState({ item: res.data });
//     });
//   }

//   render() {
//     let Dets = this.state.item.map((item, i) => {
//       return (
//         <div key={i}>
//           <div>
//             <h3>{item.title}</h3>
//             <img
//               width="200"
//               src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
//             />

//             <h5> Popularity: {item.popularity} views</h5>
//             <h5>
//               Votes: {item.vote_count} vote Average: {item.vote_average}
//             </h5>
//             <h5> Released: {item.release_date} </h5>
//           </div>
//         </div>
//       );
//     });

//     return;
//   }
// }

// export default Details;
