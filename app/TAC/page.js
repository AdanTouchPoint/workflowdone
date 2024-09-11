import React from "react";
import "./tac.css";
const Share = ({shareMessage,shareUrl }) => {  
  return (
<div className="tac">
<h3>Please scroll further down to read our Privacy Policy.</h3>

<h4>Terms & Conditions:</h4>
<p>Welcome to www.doesyourstatecare.com. By accessing our website, you agree to these Terms and Conditions.</p>

<h4>Privacy</h4>
<p>We are committed to protecting your privacy. We do not collect personal email addresses or other personal information except for the purpose of analysing site traffic, which involves logging the time and date of visits.</p>

<h4>Use of Email Proxy Technology</h4>
<p>Our platform utilises email proxy technology, allowing users to receive responses from entities they contact through our website. Please note that replies received via this technology are from the contacted entities and do not constitute communication from our organisation</p>

<h4>User Obligations</h4>
<p>You agree to use our website lawfully and refrain from any activity that could damage, disable, or overburden the site.</p>

<h4>Disclaimer of Warranties</h4>
<p>Our services are provided on an {`"as is" and "as available"`} basis without warranties of any kind.</p>

<h4>Limitation of Liability</h4>
<p>We shall not be liable for any damages arising from your use of our website or services.</p>

<h4>Governing Law</h4>
<p>These Terms and Conditions are governed by the laws of Australia and any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts of Australia.</p>

<h4>Changes to Terms</h4>
<p>We reserve the right to modify these terms at any time, with changes effective upon posting to the website.</p>

<h4>Privacy Policy:</h4>

<p>Privacy Policy for www.doesyourstatecare.com <br/>

This Privacy Policy outlines how www.doesyourstatecare.com {`("the Website")`} collects, uses, and protects the personal information of its users. By using the Website, you consent to the data practices described in this policy.
</p>
<h4>Collection of Personal Information</h4>
<p>The Website collects personal information when you use our service to send a pre-filled email to your local member of parliament regarding the GP payroll tax issue. The types of personal information we collect include:
Name<br/>
Postcode<br/>
Email address<br/>
</p>
<h4>Use of Personal Information</h4>
<p>The personal information you provide is used solely for the purpose of generating and sending the pre-filled email to the relevant member of parliament. Your information is sent to SendGrid, a third-party platform, which facilitates the sending of the email.</p>
<h4>Disclosure of Personal Information</h4>
<p>We do not disclose your personal information to any other third parties, except as necessary to send the email through SendGrid.</p>

<h4>Data Retention</h4>
<p>SendGrid retains the data only for as long as it takes to send the email and will not hold it unless required for legal reasons. The retention period for most personal data is a maximum of 37 days, except for certain data retained for fraud detection, anti-abuse, and security purposes, which may be held for up to a year. www.southaustralia.doesyourstatecare.com does not retain your data once we transmit it to SendGrid.</p>

<h4>Security</h4>
<p>We take reasonable steps to ensure the security of your personal information. However, no internet transmission is ever completely secure or error-free. You should take special care in deciding what information you send to us through the Website.</p>

<h4>Changes to This Privacy Policy</h4>
<p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>

<h4>Contact Us</h4>
<p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at cb@hotdoc.com.au.</p>

    </div>
  );
};
export default Share;