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
import styles from './styles.scss';

export default class TermsOfServicePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className={styles.privacy}>
        <h1>
          Terms of Service
        </h1>
        <div>
          Effective date: September 1, 2016
        </div>

        <div>
          Welcome to votemate! The following The following Terms of Use (the "Agreement") constitute a binding agreement between you and the creators of votemate (“votemate").
          This Agreement sets forth the terms and conditions regarding your access to and use of the votemate website and any other services offered as part of the votemate platform (the “votemate Services”).
          If you do not agree to this Agreement, do not use the votemate Services.
        </div>

        <div>
        votemate reserves the right to modify this Agreement from time to time.
        The date of last modification will be posted at the top of this agreement.
        Your continued use of the votemate Services will constitute your assent to all such changes.
        It is your responsibility to check this page from time to time for updates.
        </div>

        <h3>
        1. General Description and Your Responsibilities
        </h3>
        <div>
          votemate is a service that connects users to their state’s online voter database or third-party voter databases.
          votemate also sends email reminders about upcoming elections.
        </div>
        <div>
          votemate will work to ensure the validity and timeliness of the information provided through the votemate Services, and the accuracy of instructions for submissions to state agencies (e.g., when registering to vote or changing your address information).
          However, it is solely your responsibility to confirm this information and abide by election laws, deadlines, and requirements.
          votemate makes no warranties or representations about the votemate Services, including but not limited to accuracy, reliability, completeness, timeliness or reliability.
        </div>
        <div>
          votemate is not submitting materials on your behalf.
          Rather, it is providing an easier way for you to interface with voter registration materials in your state.
          votemate is not a voter registration drive.
        </div>
        <div>
          Use of the Services or Site does not create an attorney-client relationship between the user and the votemate.
          If you are in need of legal advice about your ability to vote, contact a lawyer directly.
        </div>
        <div>
          votemate reserves the right to change, suspend, or discontinue all or any part of the votemate Services, without prior notice.
        </div>

        <h3>2. Use Requirements</h3>
        <div>
          In addition to the other limitations in this Agreement, your use of the votemate Services is subject to the following requirements:
        </div>
        <ul>
          <li>You may only use this website on your behalf. You may not use votemate to check the voter information of any other person.</li>
          <li>
            You may only submit information that you know to be correct.
            Providing false information to states concerning voter information is a crime in many cases.
            You hereby agree to indemnify and hold harmless votemate and its agents, employees, and members from and against any claims, damages, losses and expenses, including attorneys fees, arising out of or resulting from any false information you submit on the votemate Services.
          </li>
          <li>You may not use the votemate Services to transmit, route, provide connections to, or store any content that infringes or violates the rights of any party.</li>
          <li>You may not misrepresent your identity or affiliation with the votemate Services, or emulate the services on another website or platform, including but not limited to use of HTML "framing" or "mirroring."</li>
          <li>You may not use any means to systematically gather information from the website, including but not limited to use of “bots,” “scrapers,” or “spiders” to crawl the content of the votemate Services.</li>
        </ul>
        <div>
          votemate reserves the right to terminate access to the site, delete any content you submit, or otherwise remove your information from the votemate Services, including but not limited to removal for any violation of this Agreement.
        </div>

        <h3>3. Privacy</h3>
        <div>
          Your privacy is very important to us. Please see our <a href="/policy" className={styles.link}>Privacy Policy</a> for information about how votemate collects and uses information as part of the votemate Services.
        </div>

        <h3>4. Content You Submit</h3>
        <div>
        By providing information and/or content to votemate, you represent and warrant that you have the right to submit that information, and that the information does not violate federal, state, or local law.
        To the extent it is required to facilitate the votemate Services, you hereby give votemate a non-exclusive, worldwide, perpetual, sublicensable right to use, reproduce, distribute, display, or otherwise utilize the content you submit.
        </div>

        <h3>5. Warranty and Limitation of Liability</h3>
        <div>
        YOU HEREBY ACKNOWLEDGE THAT YOU ARE USING THESE SERVICES AT YOUR OWN RISK.
        THE SERVICES ARE PROVIDED "AS IS," AND VOTEMATE, ITS AFFILIATES AND ITS THIRD PARTY SERVICE PROVIDERS HEREBY EXPRESSLY DISCLAIM ANY AND ALL WARRANTIES, EXPRESS AND IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF ACCURACY, RELIABILITY, TITLE, MERCHANTABILITY, NON-INFRINGEMENT, FITNESS FOR A PARTICULAR PURPOSE, OR ANY OTHER WARRANTY, CONDITION, GUARANTEE OR REPRESENTATION, WHETHER ORAL, IN WRITING OR IN ELECTRONIC FORM, INCLUDING BUT NOT LIMITED TO THE ACCURACY OR COMPLETENESS OF ANY INFORMATION CONTAINED THEREIN OR PROVIDED BY THE SERVICES.
        VOTEMATE ITS AFFILIATES, AND ITS THIRD PARTY SERVICE PROVIDERS DO NOT REPRESENT OR WARRANT THAT ACCESS TO THE SERVICES WILL BE UNINTERRUPTED OR THAT THERE WILL BE NO FAILURES, ERRORS OR OMISSIONS OR LOSS OF TRANSMITTED INFORMATION THROUGH USE OF THE VOTEMATE SERVICES.
        </div>
        <div>
        VOTEMATE, ITS EMPLOYEES, ITS AFFILIATES, AND ITS THIRD PARTY SERVICE PROVIDERS SHALL NOT BE LIABLE IN ANY MANNER WHATSOEVER TO YOU OR ANY THIRD PARTIES FOR ANY DIRECT, INDIRECT, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF: (I) YOUR ACCESS, USE, OR INABILITY TO USE THE VOTEMATE SERVICES; (II) ANY FAILURE OR PERFORMANCE, ERROR, OMISSION, INTERRUPTION, DEFECT, DELAY IN OPERATION OR TRANSMISSION, COMPUTER VIRUS OR LINE OR SYSTEM FAILURE (INCLUDING LOSS OF VOTER DATA, BUSINESS INTERRUPTION, AND DAMAGES THAT RESULT FROM INACCURACY OF THE INFORMATION OR INCONVENIENCE, DELAY, OR LOSS OF THE USE OF THE VOTEMATE SERVICES); (III) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE VOTEMATE SERVICES; (IV) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL IDENTIFIABLE INFORMATION STORED THEREIN; (V) ANY BUGS, VIRUSES, MALWARE, OR THE LIKE, WHICH MAY BE TRANSMITTED TO OR THROUGH THE VOTEMATE SERVICES BY ANY THIRD PARTY.
        </div>

        <h3>6. Third Party Rights</h3>
        <div>
        This Agreement is not intended to give rights to any third parties. Nevertheless, votemate reserves the right to transfer its rights or obligations to a third party.
        </div>

        <h3>7. Severability</h3>
        <div>
        Should one or more of the provisions of this Agreement be found to be unlawful, void, or unenforceable, such provision(s) shall be deemed severable and will not affect the validity and/or enforceability of the remaining provisions of this Agreement, which will remain in full force and effect.
        </div>

        <h3>8. No Waiver</h3>
        <div>
        No waiver of any term of this Agreement shall be deemed a further or continuing waiver of such term or any other term, and votemate’s failure to assert any right or provision under this Agreement shall not constitute a waiver of such right or provision.
        </div>

        <h3>9. Governing Law and Venue</h3>
        <div>
        This Agreement semaihall be governed and construed in accordance with the laws of the Commonwealth of Massachusetts, United States. Any action based on, relating to, or alleging breach of this Agreement must be brought in a state or federal courts with jurisdiction over Middlesex County, Massachusetts. Both parties agree to submit to the exclusive personal jurisdiction and venue of such courts.
        </div>

        <h3>10. Entire Agreement</h3>
        <div>
        This Agreement constitutes the entire agreement between you and votemate regarding your use of the votemate Services. Any modification to this Agreement must be made in writing and signed by both parties.
        </div>

        <h3>11. Contact Us</h3>
        <div>
          If you have any questions about this Agreement, please contact us at <a href="mailto:info@votemate.us" className={styles.link}>info@votemate.us</a>.
        </div>
      </div>
    );
  }
}
