import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='py-5 gx-4 gy-3 row d-flex textStyle justify-content-center  align-items-center mx-auto'>
            <div className="col-lg-12">
            <h3>Difference between authorization and authentication ?</h3>
            <article>Authentication means telling the system who you are by providing username and password. And Authorization is things you can do according to who you are .  authentication is the process of verifying who someone is . whereas authorization is the process of verifying what specific applications, files, and data a user has access to.Authentication is used to verify that users really are who they represent themselves to be. Once this has been confirmed, authorization is then used to grant the user permission to access different levels of information and perform specific depending on the rules established for different types of users.</article>
            </div>

            <div className="col-lg-6">
            <h3>Why are you using firebase? </h3>
            <article>Firebase manages all data real-time in the database. Many time the exchange of data to and  from the database is very hard . bur Firebase can it very fast and safely.If you have designed a business app, or are looking to design one, then Google’s Firebase is absolutely essential for you</article>
            </div>

            <div className="col-lg-6">
            <h3>Other options do you have to authentication?</h3>
            <article>Web Browsers are the most commonly used Internet application.  A web browser allows an information resource such as a web page, image, video, or virtually any other type of content to be displayed on a computer from a remote server in a seamless way.  Many applications used today use web browsers as their interface, providing a consistent and familiar user interface.</article>
            </div>

            <div className="col-lg-12">
            <h3> What other services does firebase provide other than authentication ?</h3>
            <article>Firebase is a full package that can help in developing your mobile or web applications faster with fewer resources and more efficiency. Now, let’s look at some of the services and use of it. There are many services which Firebase provides, Most useful of them are: Cloud Firestore, Cloud Functions, Authentication, Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging, Dynamic Links, Remote Config etc .We know that the widely used services for this purpose are Cloud Messaging, Authentication, Dynamic Links, Predictions, Google Analytics, and Remote Config.</article>
            </div>
        </div>
    );
};

export default Blogs;