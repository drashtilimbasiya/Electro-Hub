import Navbar from "./Navbar";

function About() {

    return (

        <div>

            <Navbar />

            <div className="about-container">

                {/* HEADING */}

                <h1>

                    About Electro Hub

                </h1>

                {/* INTRO */}

                <p className="about-text">

                    Welcome to Electro Hub,
                    your trusted destination for
                    the latest electronic products.
                    We provide high-quality gadgets,
                    smart devices, laptops, mobiles,
                    headphones, cameras, gaming accessories,
                    and many more products at affordable prices.

                </p>

                {/* SECTIONS */}

                <div className="about-grid">

                    {/* CARD 1 */}

                    <div className="about-card">

                        <h2>

                            Our Mission

                        </h2>

                        <p>

                            Our mission is to make
                            modern technology accessible
                            for everyone with best prices,
                            secure shopping, and fast delivery.

                        </p>

                    </div>

                    {/* CARD 2 */}

                    <div className="about-card">

                        <h2>

                            Why Choose Us

                        </h2>

                        <p>

                            We provide genuine products,
                            trusted brands, exciting offers,
                            secure payments, and customer satisfaction.

                        </p>

                    </div>

                    {/* CARD 3 */}

                    <div className="about-card">

                        <h2>

                            Fast Delivery

                        </h2>

                        <p>

                            We deliver products quickly
                            across India with safe packaging
                            and reliable shipping services.

                        </p>

                    </div>

                    {/* CARD 4 */}

                    <div className="about-card">

                        <h2>

                            Customer Support

                        </h2>

                        <p>

                            Our support team is always
                            available to help customers
                            with orders, products, and services.

                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default About;