var React = require ('react');
var Nav = require ('Nav');

var Main = (props)=> {
  return (
    <div>

      <div >
        <div>
            <Nav/>
          <p> main.jsx rendered</p>
            {props.children}
        </div>
      </div>
    </div>
);
};
module.exports = Main;




// var Main = React.createClass ({
//   render: function() {
//     return (
//       <div>
//         <Nav/>
//         <h2>
//           Main component
//         </h2>
//         {this.props.children}
//       </div>
// );
//
// }
//
// });
