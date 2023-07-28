import React from 'react';
import './Navbar.css';

const Footer = () => { 
    return ( 
        <div className="bgFooter">
            <div className="container">
                <div className="row">
                    {/* Colum1 */ }
                    <div className="col"> 
                        <h4>Teyvat company</h4>
                        <ul className="list-unstyled">
                            <li>Tel: 987 456 1226</li>
                            <li>Address: 956 Street North, </li>
                            <li>Teyvat, Celestia 70123</li>
                        </ul>
                    </div>
                    {/* Colum2 */ }
                    <div className="col"> 
                        <h4> CREATED BY </h4>
                        <ul className="list-unstyled">
                            <li>Name: Napat Parkdee </li>
                            <li>ID: 6321600270  </li>
                            <li> ภาคปกติ </li>
                            <li>สาขา: เทคโนโลยีสารสนเทศ </li>
                            <li>มหาวิทยาลัยเกษตรศาสตร์</li>
                        </ul>
                    </div>
                    {/* Colum3 */ }
                    <div className="col">
                        <h4> CONTACT</h4>
                        <ul className="list-unstyled">
                            <li> E-mail: napat.par@ku.th </li>
                            <li>Facebook: Naphat Parkdee </li>
                            <li>DeviantArt: YukagiChan</li>
                            <li>Patreon: Yukagi Kiyuri </li>
                        </ul>
                    </div>                    
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear} Tayvat Company | All Right Reserved | Terms of Service | Privacy
                    </p>

                </div>
            </div>
        </div>
        
        )
}

export default Footer;