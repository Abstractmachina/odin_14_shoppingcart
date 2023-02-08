import React, { FC, ReactElement } from "react";

const Home: FC = ():ReactElement => {
    return (
        <div className="home">
            <div className="welcome-banner">
            <h2>Welcome to</h2>
                <div>
                    <h2>Plan D</h2> <span>(umplings)</span>
                </div>
                <h3>Handmade Gourmet Dumplings</h3>
                <p>We craft every single dumpling painstakingly by hand with the highest quality, local ingredients.</p>
            </div>
        </div>
    );
}

export default Home;