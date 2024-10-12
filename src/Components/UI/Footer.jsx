import { NavLink } from "react-router-dom";
import footerContact from "../../api/footerApi.json";


export const Footer = () => {
    
    return (
        <footer className="footer-section">
      <div className="container grid grid-three-cols">
        {footerContact.map((curData, index) => {
          const { icon, title, details,icons } = curData;
          return (
            <div className="footer-contact" key={index}>
              {/* <div className="icon">{icons}</div> */}
              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2024, All Right Reserved
                
              </p>
            </div>

            <div className="footer-menu">
              <ul>
                

                <li>
                  
                    Social
                
                </li>
                <li>
                  
                    Media
                 
                </li>
                <li>
                     Contact
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    )
}