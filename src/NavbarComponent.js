
import './NavbarComponent.css';

function NavbarComponent() {
  return (
    <div className="navbar">
       <h4>Navabr</h4>
       <div className="">
         <ul className="nabar_list">
            <li>My Campaigns</li>
            <li>Inbox <span>156</span></li>
            <li className="active">Notification</li>
            <li>Stats</li>
            <li>Supply</li>
         </ul>

         <button className="default_btn" type="button">Reject</button>
         <button className="default_btn" type="button">Approve</button>
       </div>
    </div>
  );
}

export default NavbarComponent;
