/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import styles from './styles.scss';

export default class PrivacyPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className={styles.privacy}>
        <h1>
          Privacy Policy
        </h1>
        <div>
        Effective date: September 1, 2016
        </div>

        <div>
        The creators of votemate ("votemate") are committed to preserving your privacy and being transparent about how we use the information collected through the votemate website and any other services offered as part of the votemate platform (the “votemate Services”). 
        </div>

        <h3>Information Collected by votemate:</h3>
        <div>
          When you use the votemate Services, we may collect the following information:
          <ul>
          <li>
          Information You Provide Related to Your Voting: When you use the votemate Services you will have the opportunity to provide us with some information directly related to checking your voter registration or preparing the documentation you need to vote. Depending on your state, that may in include your name, address, date of birth, and any other information that your state requires. This information is routed to your state’s voter registration website or a third-party voter registration database website, and is only stored as long as is needed to facilitate that transaction. votemate does not permanently store this information.
          </li>
          <li>
          Information Your Provide for Election Alerts: The votemate Services allow you to provide votemate with an email address. votemate will also note whether or not you appear to have registered to vote in your particular state. If you provide us with this information, votemate will use that to send you alerts related to voter registration deadlines and election information. If you do not wish votemate to use your email address in this way, either do not subscribe, or follow the instructions to unsubscribe provided in the notification emails.
          </li>
          <li>
          Automatically Collected Information: As with most online services, when you access and use the votemate Services, we may automatically record certain types of information from your browser. This information may include your IP address, the content and pages that you access, and the dates and times of your access. We may also collect information about the software you use to connect to the votemate Services, as well as information about the geographic location from which you are accessing the votemate Services.
          </li>
          <li>
          votemate may also use "cookies" or other automated mechanisms to collect information and personalize your service. Cookies are small files that services like votemate can send to your browser for storage on your computer. They make use of the votemate Services easier to navigate by saving preferences and recalling other aspects of your use of the service on prior web pages. While most browsers allow you to disable cookies, we recommend that you leave cookies enabled so as not to interfere with the full functionality of the votemate Services.
          </li>
          </ul>
        </div>

        <h3>
        Use of Collected Information
        </h3>
        <div>
        The information we collect is used to operate, personalize, and maintain the votemate Services. We may also use your e-mail address to communicate with you about your account, and/or to inform you of changes to the votemate Services.
        </div>
        <div>
        The automatically collected information described above may also be used to further personalize or simplify your experience, facilitate certain functions on the votemate Services, and track user trends and preferences so as to identify potential improvements to the platform. 
        </div>
        <div>
        Except as noted above, votemate also reserves the right to retain data and content for archival, restorative, or research purposes. 
        </div>

        <h3>
        Sharing of Collected Information with Third Parties
        </h3>
        <div>
        Except as set forth in this policy, votemate does not share user information with third parties without your consent. Nevertheless, some amount of sharing is necessary in order for votemate to provide the votemate Services. The following individuals or entities may have access to user information.
        </div>
        <ul>
        <li>
        votemate Staff: Members of the votemate team may have access to user information as necessary for the operation of the votemate Services.
        </li>
        <li>
        Third Party Service Providers: votemate may work with third-party service providers in order to research, operate, or improve the votemate Services, and may share user Information with its third party service providers as is needed for those third party service providers to provide services to votemate.
        </li>
        <li>
        Business Transfers: If votemate is acquired by another entity, goes into dissolution, or otherwise sells or transfers its assets to another, votemate will transfer any information in its possession to the other company as part of this transaction.
        </li>
        <li>
        Legal Compliance: votemate may share information when we believe in good faith that release is necessary to comply with a governmental or court order; to comply with applicable law; to comply with a subpoena from a third party; or to protect the rights, property, or safety of votemate, our employees, our users, or others.
        </li>
        <li>
        Data Analysis: votemate may use, transfer, and share aggregated, anonymous data derived from user information for any business purpose, including for purposes of analyzing usage trends and seeking compatible business partners. This data will not include any personally identifiable information.
        </li>
        </ul>

        <h3>Information Concerning Minors</h3>
        <div>
        Because this is a voter registration and voter services platform, 
        votemate does not anticipate handling any data of those who are under 18, 
        except those minors who are checking their voter information in anticipation of them turning 18 before a given election. 
        If we learn that votemate has collected information from a child under the age of 18, 
        we will delete that information promptly. Please send any such notifications to <a href="mailto:info@votemate.us" className={styles.link}>info@votemate.us</a>.
        </div>

        <h3>Changes to Privacy Policy</h3>
        <div>
        votemate may amend this policy at any time. The use of information we collect is subject to the privacy policy in effect at the time such information is used. We will update the effective date at the top of this policy when there are changes, but it is your responsibility to check this page periodically for updates to this policy.
        </div>

        <h3>Contact Us</h3>
        <div>
        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@votemate.us" className={styles.link}>info@votemate.us</a>.
        </div>
      </div>
    );
  }
}
