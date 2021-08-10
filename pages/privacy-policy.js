import React, { Component } from "react";
import Navbar from "../components/navbar/navbar";

class PrivacyPolicyPage extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <div id="privacy-policy-wrapper">
          <div id="privacy-content">
            <div className="privacy-section">
              <div className="title privacy-title">
                <span id="home-covid">Privacy</span> Policy
                <span id="home-covid">.</span>
              </div>
              <div className="text">
                {" "}
                Quandary built the COVID Locator app as a Free app. This SERVICE
                is provided by Quandary at no cost and is intended for use as
                is. This page is used to inform visitors regarding our policies
                with the collection, use, and disclosure of Personal Information
                if anyone decided to use our Service. If you choose to use our
                Service, then you agree to the collection and use of information
                in relation to this policy. The Personal Information that we
                collect is used for providing and improving the Service. We will
                not use or share your information with anyone except as
                described in this Privacy Policy. The terms used in this Privacy
                Policy have the same meanings as in our Terms and Conditions,
                which is accessible at COVID Locator unless otherwise defined in
                this Privacy Policy.{" "}
              </div>
            </div>
            <div className="privacy-section">
              <div className="privacy-header">
                Information Collection and Use
              </div>
              <div className="text">
                For a better experience, while using our Service, we may require
                you to provide us with certain personally identifiable
                information, including but not limited to your location. The
                information that we request will be retained by us and used as
                described in this privacy policy.{" "}
              </div>
            </div>
            <div className="privacy-section">
              <div className="privacy-header">Log Data</div>
              <div className="text">
                We want to inform you that whenever you use our Service, in a
                case of an error in the app we collect data and information
                (through third party products) on your phone called Log Data.
                This Log Data may include information such as your device
                Internet Protocol (“IP”) address, device name, operating system
                version, the configuration of the app when utilizing our
                Service, the time and date of your use of the Service, and other
                statistics.
              </div>
            </div>
            <div className="privacy-section">
              <div className="privacy-header">Cookies</div>
              <div className="text">
                Cookies are files with a small amount of data that are commonly
                used as anonymous unique identifiers. These are sent to your
                browser from the websites that you visit and are stored on your
                device's internal memory. This Service does not use these
                “cookies” explicitly. However, the app may use third party code
                and libraries that use “cookies” to collect information and
                improve their services. You have the option to either accept or
                refuse these cookies and know when a cookie is being sent to
                your device. If you choose to refuse our cookies, you may not be
                able to use some portions of this Service.
              </div>
            </div>
            <div className="privacy-section">
              <div className="privacy-header">Service Providers</div>
              <div className="text">
                We may employ third-party companies and individuals due to the
                following reasons:
              </div>
              <ul>
                <li className="text">To facilitate our Service;</li>
                <li className="text">To provide the Service on our behalf;</li>
                <li className="text">
                  To perform Service-related services; or
                </li>
                <li className="text">
                  To assist us in analyzing how our Service is used.
                </li>
              </ul>
              <div className="text">
                We want to inform users of this Service that these third parties
                have access to your Personal Information. The reason is to
                perform the tasks assigned to them on our behalf. However, they
                are obligated not to disclose or use the information for any
                other purpose.{" "}
              </div>
            </div>
            <div className="privacy-section">
              <div className="privacy-header">Security</div>
              <div className="text">
                We value your trust in providing us your Personal Information,
                thus we are striving to use commercially acceptable means of
                protecting it. But remember that no method of transmission over
                the internet, or method of electronic storage is 100% secure and
                reliable, and we cannot guarantee its absolute security.
              </div>
            </div>
            <div className="privacy-section">
              <div className="privacy-header">Links to Other Sites</div>
              <div className="text">
                This Service may contain links to other sites. If you click on a
                third-party link, you will be directed to that site. Note that
                these external sites are not operated by us. Therefore, we
                strongly advise you to review the Privacy Policy of these
                websites. We have no control over and assume no responsibility
                for the content, privacy policies, or practices of any
                third-party sites or services.
              </div>
            </div>
            <div className="privacy-section">
              <div className="privacy-header">Children’s Privacy</div>
              <div className="text">
                These Services do not address anyone under the age of 13. We do
                not knowingly collect personally identifiable information from
                children under 13 years of age. In the case we discover that a
                child under 13 has provided us with personal information, we
                immediately delete this from our servers. If you are a parent or
                guardian and you are aware that your child has provided us with
                personal information, please contact us so that we will be able
                to do necessary actions.
              </div>
            </div>
            <div className="privacy-section">
              <div className="privacy-header">
                Changes to This Privacy Policy
              </div>
              <div className="text">
                We may update our Privacy Policy from time to time. Thus, you
                are advised to review this page periodically for any changes. We
                will notify you of any changes by posting the new Privacy Policy
                on this page. This policy is effective as of 2021-08-10
              </div>
            </div>
            <div className="privacy-section">
              <div className="privacy-header">Contact Us</div>
              <div className="text">
                If you have any questions or suggestions about our Privacy
                Policy, do not hesitate to contact us at
                zubin.hydrie@hotmail.com.
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PrivacyPolicyPage;
