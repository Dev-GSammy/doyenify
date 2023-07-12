import React  from "react";
import { Modal, Button } from 'react-bootstrap';

const Privatepolicy: React.FC = () => {
    
    const [isShow, invokeModal] = React.useState(false)
    const initModal = () => {
        return invokeModal(true)
    }

    const close = () => {
        return invokeModal(false)
    }
    


    return(
      <>
      
      <p style={{cursor: "pointer"}} onClick={initModal} className="text-center pb-3 px-3">Privacy Policy</p>
      
      <Modal show={isShow}>
                <Modal.Header closeButton onClick={close}>
                <Modal.Title className="text-center" style={{color: "#509b35"}}>Our Privacy Policy</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row" >
                        
                        <div className="col-md-12" style={{textAlign: "justify"}}>
                        
                        <div className="holder">
                            <h5 className="titles">Our Commitment To Privacy</h5>
                            <div className="body">Your privacy is important to us at Doyenify. 
                                In order to protect your privacy, Doyenify provides a 
                                description of our data practices, including how we collect data,
                                 why we collect it, and how it will be used.
                            </div>
                        </div>


                        <div className="holder">
                            <h5 className="titles">What Data Do We Collect?</h5>
                            <div className="body">We collect information submitted through our contact forms and pages. This information must be expressly and voluntarily provided to us – Doyenify does not collect it without you knowingly making the decision to give it to us.
                                Some of the information you may provide includes your name, email address, and phone number. The information is related to projects, services, and billing. Information may also be collected through phone or email conversations via official Doyenify representatives.
                                In addition, Doyenify may collect data regarding third parties that is specifically related to you, your project, or the services you contacted us to do for you.
                            </div>
                        </div>

                        <div className="holder">
                            <h5 className="titles">How Do We Use The Data We Collect?</h5>
                            <div className="body">We collect information submitted through our contact forms and pages. This information must be expressly and voluntarily provided to us – Doyenify does not collect it without you knowingly making the decision to give it to us.
                                Some of the information you may provide includes your name, email address, and phone number. The information is related to projects, services, and billing. Information may also be collected through phone or email conversations via official Doyenify representatives.
                                In addition, Doyenify may collect data regarding third parties that is specifically related to you, your project, or the services you contacted us to do for you.
                                The information that Doyenify collects is used to provide digital and technology services to you. Some of the ways in which your information could be used by us include (but are not limited to these); to web support, customer service, project email updates, and direct contact in regards to the project and services.
                                Doyenify does not share data with outside parties unless it is necessary to complete the services you requested. Doyenify reserves the right to release applicable information following official judicial practices, such as a valid subpoena or court order.
                            </div>
                        </div>

                        <div className="holder">
                            <h5 className="titles">Do We Use Cookies?</h5>
                            <div className="body">Cookies are small files that websites place on individual computer hard drives through web browsers. Users must explicitly allow cookies to be placed by every website that uses them. Cookies enable a website to remember a specific browser, and capture and retain particular information.
                                Doyenify uses cookies to remember, understand and save your preferences for upcoming visits to our website. Cookies help us gather data regarding website traffic, engagement, and interactions, and enable us to provide better future online experiences, tools, and services.
                                The information that our cookies collect has no personal information that can identify you specifically. Conversely, the anonymous information captured by the cookies is transmitted to Google, where it is used to create anonymous web activity reporting only for the domain <a href={window.location.origin + "contact"}>Contact Us</a> , the data is used to gain insight into how to optimize customer experience, content and marketing efforts for  <a href={window.location.origin + "contact"}>Contact Us</a> .
                                In addition, no personally identifiable information will be collected on this website unless explicitly submitted through a fill-in form on our Contact Us page.</div>
                        </div>
                        
                        <div className="holder">
                            <h5 className="titles">Remarketing</h5>
                            <div className="body">Doyenify uses cookies to display remarketing advertisements. These are based on a user’s prior visits 
                            to <a href={window.location.origin + "contact"}>Contact Us</a> and may be seen throughout other websites on the Internet.
                            Users can opt out of cookies through Google at any point by visiting Google Ads Preferences Manager.</div>
                        </div>

                        <div className="holder">
                            <h5 className="titles">Third-Party Websites</h5>
                            <div className="body">Doyenify’s website may provide links to third-party websites. Doyenify does not have control over these websites or their content, which have their own unique and independent privacy policies. Thus, we do not assume any responsibility or liability for those websites.
                                Doyenify also does not endorse these websites, including the information and products found on them. If you choose to visit one of the third-party websites linked on this website, 
                                it is done at your own discretion and risk.</div>
                        </div>

                        <div className="holder">
                            <h5 className="titles">Doyenify Is Committed To Data Security</h5>
                            <div className="body">Doyenify Is Committed To Protecting Children’s Privacy Online
                                Doyenify is committed to protecting children’s privacy. Therefore, we do collect or maintain information at our website from those we actually know are under 13. Our website is also not structured to attract anyone under the age of 13 and is not intended for users under the age of 13.
                                If we become aware that anyone under the age of 13 has submitted personal information to our website, Doyenify will delete that information and will not use it for any purpose whatsoever.
                                Doyenify encourages parents and legal guardians to discuss the possible risks of offering personal information through the Internet with their children.
                                Our Privacy Policy and Your Consent
                                By using our website, you consent to Doyenify’s privacy policy.
                                If we have any changes to our privacy policy, they will be posted on this web page.
                                Your Privacy Choices and Rights
                                You do not need to provide any personal information in order to enjoy the majority of the features on our website.</div>
                        </div>

                        <div className="holder">
                            <h5 className="titles">Contacting Doyenify</h5>
                            <div className="body">If you have any questions regarding our privacy policy, please contact Doyenify at:
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=doyenifyacademy@gmail.com" style={{marginLeft: "5px"}} target="_blank">doyenifyacademy@gmail.com</a></div>
                        </div>
                        
                        
                        
                    </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={close}>
                    Close
                </Button>
                
                </Modal.Footer>
            </Modal>
    </>
    
    )
}

export default Privatepolicy;