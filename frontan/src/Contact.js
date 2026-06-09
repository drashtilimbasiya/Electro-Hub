import Navbar from "./Navbar";

function Contact() {

    return (

        <div>

            <Navbar />

            <div className="page-container">

                <h1>

                    Contact Us

                </h1>

                <div className="contact-box">

                    <h2>

                        Electro Hub Support

                    </h2>

                    <p>

                        📧 Email :
                        electronic@gmail.com

                    </p>

                    <p>

                        📞 Phone :
                        +91 9876543210

                    </p>

                    <p>

                        📍 Address :
                        Ahmedabad, Gujarat, India

                    </p>

                    <p>

                        🕒 Support Time :
                        9:00 AM To 9:00 PM

                    </p>

                    {/* CONTACT FORM */}

                    <input
                        type="text"
                        placeholder="Enter Your Name"
                    />

                    <input
                        type="email"
                        placeholder="Enter Your Email"
                    />

                    <textarea
                        placeholder="Enter Message"
                        className="message-box"
                    ></textarea>

                    <button
                        className="send-btn"

                        onClick={() =>
                            alert("Message Sent")
                        }
                    >

                        Send Message

                    </button>

                </div>

            </div>

        </div>
    );
}

export default Contact;