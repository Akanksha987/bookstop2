import React from "react";
import "./css/Term.css";
import Footer from "./footer";
const Safety = () => {
  return (
    <div className="term">
      <h1>Read Before You Deal</h1>
      <p className="intro">
        Here are several safety guidelines to help make sure that your usage of
        BookStop is safe. While community members who use BookStop have success
        with buying, selling, renting or connecting with others. It is important
        we help keep our community members safe from people attempting to scam
        or defraud them. We have found that one of the best ways to address this
        problem is to ensure that all transactions take place locally and
        in-person. We request you to take the following precautions:
        <ol>
          <li>
            When buying or selling, you should meet in-person to see the
            product. Learn as much as you can about who you are meeting or
            trading with before you complete the transaction BookStop is all
            about local transactions.
          </li>
          <li>
            Never send or wire money to sellers or buyers. This includes never
            mailing a cheque or using wire payment services to pay for items
            found on BookStop.
          </li>
          <li>
            Be wary of Users with no reliable contact information, who respond
            slowly or not at all
          </li>
          <li>
            BookStop does not offer any sort of buyer protection. Any emails or
            websites that talk about such systems are scams, even if they have
            the BookStop logo. If you receive any emails promoting these
            services, please forward the message to us.
          </li>
          <li>
            Never provide your personal or banking information (e.g. credit card
            number) to others over the Internet. Never give out your BookStop
            password, even if asked to do so in an email supposedly sent by
            BookStop.
          </li>
          <li>
            Protect personal information, e.g. do not share your home address
            unless you know the other person and want them to visit you.
          </li>
          <li> Know the site Terms of Use and Prohibited Item Policy</li>
          <li>
            Make yourself aware of common scams and fraud. Do not believe the
            promise of large sums of money for your help in any task.
          </li>
          <li>
            Inform BookStop of any attempted fraud or suspicious emails, Ads, or
            other activity by community members. In case of fraud, report it to
            the local authorities and inform us.
          </li>
          <li>
            Use common sense. If something sounds too good to be true, it
            probably is not.
          </li>
        </ol>
      </p>

      <Footer />
    </div>
  );
};

export default Safety;
