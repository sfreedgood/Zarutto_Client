import React from "react"


import "./contact.css"
import IframeComponent from "./map";

const Contact = () => {


    return(
        <div id="contact" className="contact">
        <br/>

            <div className = "address">
            <p className ="located">Zurutto is located on the Upper West Side of NYC at:</p>
            <h1 className="street"> <a href="https://www.google.com/maps/place/Zurutto/@40.7777973,-73.9826894,17z/data=!4m13!1m7!3m6!1s0x89c2588a4ebcd353:0xf86c6f4dfde33487!2s142+W+72nd+St,+New+York,+NY+10023!3b1!8m2!3d40.7777973!4d-73.9805007!3m4!1s0x89c2588a4ebd7c1b:0x1a8f7a6996d044ae!8m2!3d40.7778157!4d-73.9804876" target="_blank" >142 W72 ST NYC 10023</a></h1>
            </div>
            <div className="map">
            <div className="googleMap">
        <IframeComponent className="" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.2825814158014!2d-73.98269474949848!3d40.77780134142368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588a4ebcd353%3A0xf86c6f4dfde33487!2s142+W+72nd+St%2C+New+York%2C+NY+10023!5e0!3m2!1sen!2sus!4v1550452355621" width="600"height="450" frameborder="0" style="border:0"/>
        </div>

            </div>
            <div className = "hoursPhone">
            <p className="hours"><a href="https://www.google.com/search?q=zurutto+hours&ludocid=1913882960576136366&sa=X&ved=2ahUKEwjKx4CdgMTgAhVBheAKHf_aDbcQ6BMwGXoECAwQRA&biw=1189&bih=621"target="_blank">Hours: <span class="font-weight-bold">12pm-11pm</span> every day</a></p>
            <p className="phone">Phone:  <span class="font-weight-bold"><a href="tel:12124980022">(212)498-0222</a></span></p>
            <br/>

            </div>
        </div>
    )
}

export default Contact
