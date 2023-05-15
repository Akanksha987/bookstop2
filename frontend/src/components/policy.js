import React from "react";
import Footer from "./footer";
const Policy = () => {
  return (
    <div className="term">
      <p className="intro">
        This privacy policy describes how we handle your personal information.
        We collect, use, and share personal information to help the Book Stop
        website (“Book Stop”) work and to keep it safe (details below). In
        formal terms, Book Stop acting itself and through its subsidiaries is
        the “data controller” of your personal information.
      </p>
      <p>
        <div className="main-div">
          <b className="bold">Collection</b>
          <p className="para">
            Information posted on Book Stop is obviously publicly available.
            Therefore, if you choose to provide us with personal information,
            you are consenting to the transfer and storage of that information
            on our servers. We collect and store the following personal
            information:
            <li>
              email address, physical contact information (depending on the
              service used)
            </li>
            <li>
              computer sign-on data, statistics on page views, traffic to and
              from Book Stop
            </li>
          </p>
        </div>
        <div className="main-div">
          <b className="bold">Use</b>
          <p className="para">
            We use users’ personal information to:
            <li>Provide our services</li>
            <li>Resolve disputes, collect fees, and troubleshoot problems</li>
            <li>Encourage safe trading and enforce our policies</li>
            <li>Communicate marketing and promotional offers to you</li>
          </p>
        </div>
        <div className="main-div">
          <b className="bold">General</b>
          <p className="para">
            We may update, upgrade, modify (partially &/or fully) this policy at
            any time, with updates taking effect when you next post or after 30
            days, whichever is sooner. If we or our corporate affiliates are
            involved in a merger or acquisition, we may share personal
            information with another company, but this policy will continue to
            apply.
          </p>
        </div>
        <div className="main-div">
          <b className="bold">Confidentiality of Information.</b>
          <p className="para">
            Users who use any of the features on Book Stop agree and accept that
            they have been fully informed by Book Stop that the use of features
            may lead to publication, to all users of Book Stop, of any personal
            information posted by them while using any specific feature on Book
            Stop. Users further agree that the authenticity of, and consequences
            from the posting by users of any personal information of themselves
            or any other person, are the sole responsibility of the user. Users
            further agree and accept that the terms of the Privacy Policy will
            be applicable to the use of all features, existing and new. However,
            the Users agree and accept that confidentiality of information
            posted on such features has been waived by the Users of such
            features themselves.
          </p>
        </div>
      </p>
      <Footer />
    </div>
  );
};

export default Policy;
