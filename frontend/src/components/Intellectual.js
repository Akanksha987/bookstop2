import React from "react";
import Footer from "./footer";
import "./css/Term.css";
const Intellectual = () => {
  return (
    <div className="term">
      <h1>Intellectual Property notice</h1>
      <p className="intro">
        "Welcome to Book Stop! We are committed to protecting intellectual
        property rights and ensuring a respectful environment for creators,
        authors, and copyright holders. This Intellectual Property Notice
        outlines our policies regarding copyright, trademarks, user-generated
        content, and more. By accessing or using our website, you agree to
        comply with the terms and conditions outlined in this notice. Please
        read this section carefully to understand your rights and
        responsibilities."
        <br />
        Following the introduction, you can proceed with the specific sections
        addressing various aspects of intellectual property, such as copyright
        notice, DMCA compliance, user-generated content, trademarks, and so on.
        Organize the information in a clear and concise manner, using
        subheadings and bullet points as appropriate.
      </p>
      <div className="main-div">
        <b className="bold">Copyright Notice</b>
        <p className="para">
          All content on this website, including but not limited to text,
          images, graphics, logos, and software, is the property of Book Stop or
          its content suppliers and is protected by international copyright
          laws. The compilation of all content on this site is the exclusive
          property of Book Stop and is protected by copyright laws.
        </p>
      </div>
      <div className="main-div">
        <b className="bold"> DMCA Compliance</b>
        <p className="para">
          Book Stop respects the intellectual property rights of others. If you
          believe that any content on our website infringes your copyright,
          please notify us in writing and provide the following information:
          <br />
          (1) A description of the copyrighted work that you claim has been
          infringed.
          <br />
          (2) A description of the infringing material and its location on our
          website. <br />
          (3) your contact information.
          <br />
          (4) A statement that you have a good faith belief that the useof the
          material is not authorized by the copyright owner.
          <br />
          (5) A statement, made under penalty of perjury, that the above
          information is accurate and that you are the copyright owner or
          authorized to act on behalf of the copyright owner.
        </p>
      </div>
      <div className="main-div">
        <b className="bold">User-Generated Content</b>
        <p className="para">
          By submitting any content, including book reviews, comments, or other
          user-generated material, to our website, you grant Book Stop a
          non-exclusive, royalty-free, perpetual, irrevocable, and fully
          sublicensable right to use, reproduce, modify, adapt, publish,
          translate, create derivative works from, distribute, and display such
          content worldwide in any media. You represent and warrant that you own
          or have the necessary rights to grant us this license and that your
          submitted content does not infringe the intellectual property rights
          or violate the rights of any third party.
        </p>
      </div>
      <div className="main-div">
        <b className="bold">Trademarks</b>
        <p className="para">
          All trademarks, logos, service marks, and trade names displayed on
          this website are the property of their respective owners. The use of
          any third-party trademarks, logos, or service marks on this site does
          not imply endorsement or affiliation with Book Stop, unless explicitly
          stated.
        </p>
      </div>
      <div className="main-div">
        <b className="bold">Intellectual Property Infringement Reporting</b>
        <p className="para">
          If you believe that your intellectual property rights have been
          infringed upon on our website, please contact us at
          "akanksha.agrawal@kalvium.community" with detailed information
          regarding the alleged infringement. We will investigate the matter
          promptly and take appropriate action, including the removal of
          infringing content if necessary.
        </p>
      </div>
      <div className="main-div">
        <b className="bold">Respect for Intellectual Property</b>
        <p className="para">
          We expect all users of our website to respect the intellectual
          property rights of others. You may not reproduce, distribute, modify,
          or create derivative works of copyrighted material found on our
          website without obtaining proper authorization from the copyright
          owner.
        </p>
      </div>
      <div className="main-div">
        <b className="bold">License Terms</b>
        <p className="para">
          Digital books and other digital content available for sale on this
          website are licensed to the purchaser for personal, non-commercial
          useonly. Unauthorized distribution, sharing, or reproduction of the
          purchased content is strictly prohibited.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Intellectual;
