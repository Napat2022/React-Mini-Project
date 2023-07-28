import React from "react";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import '../index.css';
import ReactPlayer from 'react-player/youtube';


const Contact =() => {
    return(
        <div className="bgContact">
        <dir> 
        <Navbar />
       
            <div className="container" >
                <p className="text-light">
                    <h1>Contact Creator</h1>
                </p>
            
                    <div className="content">
                        <div className="container-xl">
                            <p className="text-light">
                            <h5>
                                Facebook: Napat Parkdee
                            </h5>
                            </p>
                            <p className="text-light">
                                <h5>Youtube: Yukagi Ch</h5>
                            </p>
                            <p className="text-light">
                                <h5>DeviantArt: YukagiChan</h5>
                            </p>
                            <p className="text-light">
                                <h5>Patreon: Yukagi Kiyuri</h5>
                            </p>
                            <p>
                                <div className="text-center">                       
                                    <img src ="/images/logo/kiyuri_chibi.png" aly=""></img>     
                                </div>
                            </p>
                            <p>
                                <div>
                                <ReactPlayer url="https://www.youtube.com/watch?v=fUN8cLjpVC8" controls={true} />
                                </div>
                            </p>
                        </div>

                    </div>
                
                    <hr />
                    </div>
                <Footer />                
                
                </dir>
            </div>
      
    )
}
export default Contact;