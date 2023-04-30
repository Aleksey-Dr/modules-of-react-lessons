import React from 'react';
import ReactDOM from 'react-dom';
// import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// const profile = (
//     <div className="profile">
//         <div className="description">
//             <img
//             src={ user.avatar }
//             alt="User avatar"
//             className="avatar"
//             />
//                 <p className="name">{ user.username }</p>
//             <p className="tag">{ user.tag }</p>
//             <p className="location">{ user.location }</p>
//         </div>

//         <ul className="stats">
//             <li>
//                 <span className="label">Followers</span>
//                 <span className="quantity">{ user.stats.followers }</span>
//             </li>
//             <li>
//                 <span className="label">Views</span>
//                 <span className="quantity">{ user.stats.views }</span>
//             </li>
//             <li>
//                 <span className="label">Likes</span>
//                 <span className="quantity">{ user.stats.likes }</span>
//             </li>
//         </ul>
//     </div>
// );

// ReactDOM.render(<Users
    //     avatar={user.avatar}
    //     name={user.username}
    //     tag={user.tag}
    //     location={user.location}
    //     stats={user.stats}
//     />,
//     document.querySelector('#root'));

// const link = <a href="https://reactjs.org/">React website</a>;

const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
   <React.StrictMode>
     <App />
   </React.StrictMode>
 );