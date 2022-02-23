'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render() { 

        return (
            <div >
               <ul>
                   <li>Hello World</li>
                   <li>Hello World</li>
                   <li>Hello World</li>
               </ul>
            </div>
          );
        }
      }
      
      let domContainer = document.querySelector('#Navbar');
      ReactDOM.render(<LikeButton />, domContainer);