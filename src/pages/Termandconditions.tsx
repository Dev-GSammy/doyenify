import React, {useState, useEffect}  from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Termandconditions.css";
import { Audio } from 'react-loader-spinner'
import Footer from "../Footer";

const Termandconditions: React.FC = () => {
    const [ready, setReady] = useState(false);

    const spins = async() => {
        await new Promise(r => setTimeout(r, 100));
        setReady(true)
    }
    useEffect(() => {
        spins();
    }, [])

    return(
      <>
        {
        ready ? (<>
        
        
            <div className="termsfirst">
                <div style={{textAlign: "justify"}} >
                    <div className="parent1">
                        <img className="caroimg" src="./img/about.png" alt="..." />

                       
                    
                        <div className="child2">
                            <div className="text-center">
                                <h1 style={{color: "#09fa3d", fontWeight: "600"}}>Terms & Conditions</h1>
                                <p style={{fontSize: "20px"}}>Last Updated: June 23, 2023</p>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="herotext">
                                        Doyenify provides IT and Consultancy  (Services) via the Company website offered from time to time reach Us through <a href={window.location.origin + "/contact"} style={{textDecoration: "none", color: "#31e0d8", fontWeight: "600"}}>Our Contact Form</a> .  The Company Service is owned and operated by Doyenify Team Members.
                                
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="herotext">
                                        Your use of the Service is subject to the terms and conditions set forth in these Terms of Service.
                                    </div>
                                </div>
                            </div>
                           

                        </div>

                        

                    </div>
                    

                    <div className="container">
                    
                    <br/>
                    <div >
                        <h5 style={{fontWeight: "600"}}>PLEASE READ THE TERMS OF SERVICE CAREFULLY. BY ACCESSING OR USING ANY PART OF THE SERVICE, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTAND AND AGREE TO BE BOUND BY ALL THE REGULATIONS OF THE TERMS OF SERVICE. IF YOU DO NOT AGREE TO THESE TERMS OF SERVICE, EXIT THIS PAGE AND DO NOT ACCESS OR USE THE SERVICE. USE OF THE SERVICE IS EXPRESSLY CONDITIONED UPON YOUR ACCEPTANCE OF THE TERMS OF SERVICE.</h5>
                    </div>

                    <div>
                    <ol>
                        <li><span style={{marginRight: "4px", fontWeight: "600", fontSize: "17px"}}>Updates to Terms of Service:</span><p>Integration. We may, in our sole discretion, 
                            modify the Terms of Service via email or by posting notice on any part of the Service.
                                The “Last Updated” date at the top the Terms of Service indicates when the latest
                                modifications were made to the Terms of Service. By continuing to access and use 
                                the Service you agree to any such modifications. Therefore, you are responsible 
                                for reviewing and should become familiar with any such modifications. 
                                You are encouraged to review these Terms of Service periodically and to 
                                check the “Last Updated” date at the top of the Terms of Service for the most
                                recent version. In addition, when using services or features on the Service,
                                you will be subject to any posted guidelines or policies applicable to such 
                                services or features that may be posted from time to time, including but not
                                    limited to the Privacy Policy as noted below. All such guidelines or policies 
                                    are hereby incorporated by reference into these Terms of Service.</p>
                        </li>
                        
                        <li><span style={{marginRight: "4px", fontWeight: "600", fontSize: "17px"}}>Service Availability:</span><p>The Service may be modified, updated, interrupted, suspended or discontinued at any time without notice or liability.
                            If the Service were discontinued at any time, 
                            all data would be deleted pursuant to the discontinuation process.</p></li>

                            <li><span style={{marginRight: "4px", fontWeight: "600", fontSize: "17px"}}>Privacy Policy:</span><p>Use of the Service is subject to the terms of our Privacy 
                            Policy which is hereby incorporated into and made part of these Terms of Service. Please carefully
                            review our Privacy Policy. By using or accessing the Service, you agree to be bound by the terms of our Privacy Policy.</p></li>

                            <li><span style={{marginRight: "4px", fontWeight: "600", fontSize: "17px"}}>Age:</span><p>The Service is meant for those at least eighteen (13) years of age.  
                            Use of the Service by anyone under this age is a violation of the Terms of Service.</p></li>

                            <li><span style={{marginRight: "4px", fontWeight: "600", fontSize: "17px"}}>Intellectual Property:</span><p>You acknowledge that all materials on the Service, including
                            <span style={{color: "#FF0000"}}>(but not limited to these )</span>; the Website design, Video editing, graphics design,
                            text, pictures, and other files and the selection and arrangement thereof are the property of Company and/or 
                                licensors, and are subject to and protected by Nigeria and international copyright and other intellectual property 
                                laws and rights. All rights to Materials not expressly granted in these Terms of Service are reserved to their respective 
                                copyright owners. Company authorizes you to view, download and/or print the Materials provided that you keep intact all 
                                and other proprietary notices contained in the original Materials. Except as expressly authorized by the Terms of Service,
                                you may not copy, reproduce, distribute, republish, download, perform, display, post, transmit, scrape, copy, exploit, 
                                create derivative works or otherwise use any of the Materials in any form or by any means, without the prior written authorization 
                                Company or the respective copyright owner. In the absence of a written agreement, you may not modify or adapt the Materials in 
                                any way or otherwise use them for any public or commercial resale purposes. The trademarks, service marks, trade names, logos 
                                    or described in the Service are the sole property of Company and/or its licensors and may not be copied, altered or otherwise used, 
                                    in whole or in part, without the prior written authorization of Company and/or its licensors. Company reserves the right to enforce 
                                    intellectual property rights fully under the law.Your use of the Service is solely and exclusively under a limited license granted 
                                    herein and you will not obtain any ownership interest therein through the Terms of Service or otherwise.  All trademarks, service marks,
                                    trade names, domain names, logos, and other indicia of origin that appear on or in connection with any aspect of the Service are either
                                    the property of the Company, its affiliates or licensors. Company retains the right to rescind and terminate the limited license 
                                    granted under here at any point, for any reason. All rights not expressly granted herein by Company to you are fully reserved by 
                                    Company, its advertisers and licensors.Some of the company and product names, logos, brands, and other trademarks featured or referred 
                                    to within the Service may not be owned by us and are the property of their respective trademark holders.  These trademark holders are 
                                    not affiliated with, nor do they sponsor or endorse the Service.</p></li>

                            <li><span style={{marginRight: "4px", fontWeight: "600", fontSize: "17px"}}>Use of the Service:</span>
                                <ol>
                                    <li>You may be required to fill a form to use the Service and/or take advantage of certain features.  If so, you agree to:
                                        <ol>
                                            <li><p>provide true, accurate, current and complete information about yourself as prompted by the Service;</p></li>
                                            <li><p>as permitted, maintain and promptly update such information. If you provide any information that is false,
                                                    inaccurate or outdated, or Company has reasonable grounds to suspect that such information is false, inaccurate or outdated, 
                                                Company has the right to suspend or terminate your request and prohibit all current or future use of the Service by you.</p></li>
                                        </ol>
                                    </li>
                                
                                    <li>You may not do any of the following while accessing or using the Service:
                                        <ol>
                                            <li><p>access, tamper with, or use non-public areas of the Service, our computer systems, or the technical delivery systems of our providers;</p></li>
                                            <li><p>probe, scan, or test the vulnerability of any system or network or breach or circumvent any security 
                                                or authentication measures</p></li>
                                            <li><p>access or search or attempt to access or search the Service by any means other than through our currently available, published interfaces that are provided by us, 
                                                unless you have been specifically allowed to do so in 
                                                a separate agreement with us;</p></li>
                                            <li><p>forge any TCP/IP packet header or any part of the header information in any email or posting, 
                                                or in any way use the Service to send altered, deceptive or false source-identifying information; or</p></li>
                                            <li><p>disrupt or interfere with the access of any user, host or network, including, without limitation, sending a virus, overloading,
                                                    flooding, spamming, mail-bombing the Service, 
                                                    or otherwise creating an undue burden on the Service.</p></li>
                                        </ol>
                                    </li>

                                    <li>You may not use manual or automated software, devices, or 
                                        other processes to “crawl,” “scrape,” or “spider” any page of the Service. You will not decompile, reverse engineer, 
                                            otherwise attempt to obtain the source code of any part of the Service.</li>

                                    <li>Your use of the Service is at your own risk, including the risk 
                                        that you might be exposed to Content that is offensive, 
                                        indecent, inaccurate, objectionable, or otherwise inappropriate.</li>
                                    
                                </ol>
                            </li>

                            <li><span style={{marginRight: "4px", fontWeight: "600", fontSize: "17px"}}>Third Party Sites & Services:</span>
                                <ol>
                                    <li><p>Links provided via the Services to Third-Party websites, if any, 
                                        are provided only as a convenience. If you use these Third-Party Services or use 
                                        links to such websites, you may leave the Services. Company does not control nor endorse any such
                                            Third-Party Services. You agree that the Company Parties, as defined below, will not be responsible or
                                            liable for any content, goods or services
                                            provided by such Third-Party or for your use or inability to use such Third-Party websites.</p></li>

                                    <li><p>You will use such links at your own risk.
                                            You are advised that other websites on the Internet, including Third-Party websites linked 
                                            from the Services, might contain material or information: that some people may find offensive 
                                            or inappropriate; that is inaccurate, untrue, misleading or deceptive; or that is defamatory, 
                                            libelous, infringing of others’ rights or otherwise unlawful. Company expressly disclaims any responsibility 
                                            for the content, legality, decency or accuracy of any information,
                                            and for any products and services, that appear on any Third-Party website or in advertiseme</p></li>

                                </ol>
                            </li>

                            <li><span style={{marginRight: "4px", fontWeight: "600", fontSize: "17px"}}>Suggestions and Improvements:</span><p>By sending us any ideas, suggestions, documents or proposals, you agree that (i) your Feedback does not contain the confidential or proprietary information of third parties, (ii) we are under no obligation of confidentiality, express or implied, with respect to the Feedback, (iii) we may have something similar to the Feedback already under consideration or in development, and (iv)
                                you grant us an irrevocable, non-exclusive, royalty-free, perpetual, worldwide license to use, modify, 
                                prepare derivative works, publish, distribute and sublicense the Feedback, and you irrevocably waive, and cause to be waived, 
                                Company and its users any claims and assertions of any moral rights contained in such Feedback.
                                </p>
                            </li>

                            <li><span style={{marginRight: "4px", fontWeight: "600", fontSize: "17px"}}>Termination: </span>
                                <p>You may terminate your use of the Service at any time, 
                                subject to the terms of any Agreement you may have with us. 
                                You agree that the Company may terminate or suspend your access to 
                                all or part of the Service, with or without notice, in our reasonable discretion, at any time.  
                                Company reserves the right to modify or discontinue the Service (or any part thereof) with or 
                                without notice, at any time. Following the termination or cancellation of your subscription to the 
                                Service, we reserve the right to delete all your data in the normal course of operations.</p>
                            </li>

                            <li><span style={{marginRight: "4px", fontWeight: "600", fontSize: "17px"}}>Representations: </span>
                                <ol>
                                    <li><p>Company does not warrant or guarantee the suitability or availability of any material or content, including
                                            (without limitation), data, products or services, found through the Service.</p></li>
                                    <li><p>Company does not screen the authenticity or quality of any material or content or any provider of material or
                                            content, including, data, products or services found through the Service.</p></li>
                                    <li><p>Company makes no representations or promises regarding any material or content, 
                                        and that many of the Material or 
                                        Content provided via the Service may be owned or licensed by third parties.</p></li>
                                    <li><p>Any information, including any data, materials, or content on the Service, 
                                        including on any Facebook, Instagram or Twitter page, are for informational purposes only.</p></li>
                                    <li><p>Company makes no representations or promises that any work provided via the Service 
                                        will be compliant with the Nigerian Disabilities Act (“NDA”).</p></li>
                                </ol>
                            </li>

                            <li><span style={{marginRight: "4px", fontWeight: "600", fontSize: "17px"}}>Warranties, Disclaimers and Limitations of Liability:</span>
                                <p>YOU EXPRESSLY UNDERSTAND AND AGREE THAT:YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK. THE SERVICE AND THE ASSOCIATED MATERIALS AND CONTENT ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS. EXCEPT AS OTHERWISE EXPRESSLY PROVIDED IN THESE TERMS OF SERVICE, COMPANY, ITS PARENT, SUBSIDIARY AND OTHER AFFILIATED COMPANIES, AND THEIR RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, AGENTS AND OTHER REPRESENTATIVES (COLLECTIVELY, THE “COMPANY PARTIES”), EXPRESSLY DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PURPOSE AND NON-INFRINGEMENT. WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, THE COMPANY PARTIES MAKE NO WARRANTY THAT: (I) THE SERVICE WILL MEET YOUR REQUIREMENTS; (II) THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE; (III) INFORMATION THAT MAY BE OBTAINED VIA THE SERVICE WILL BE ACCURATE OR RELIABLE; (IV) THE QUALITY OF ANY AND ALL PRODUCTS, SERVICES, INFORMATION OR OTHER MATERIAL, INCLUDING ALL MERCHANDISE, GOODS AND SERVICES, OBTAINED OR PURCHASED BY YOU DIRECTLY OR INDIRECTLY THROUGH THE COMPANY SERVICE WILL MEET YOUR EXPECTATIONS OR NEEDS; AND (V) ANY ERRORS IN THE SERVICE WILL BE CORRECTED.THE COMPANY PARTIES SHALL NOT UNDER ANY CIRCUMSTANCES BE LIABLE FOR ANY DAMAGES OF ANY KIND ARISING OUT OF, IN CONNECTION WITH OR RELATING TO THE USE OF OR INABILITY TO USE THE SERVICE, INCLUDING ANY LIABILITY: (I) AS A PUBLISHER OF INFORMATION; (II) FOR ANY INCORRECT OR INACCURATE INFORMATION OR ANY ‘BUG’ OF THE SERVICE; (III) FOR ANY UNAUTHORIZED ACCESS TO OR DISCLOSURE OF YOUR TRANSMISSIONS OR DATA; (IV) FOR STATEMENTS OR CONDUCT OF ANY THIRD PARTY ON OR VIA THE SERVICE; (V) FOR ANY DISPUTES BETWEEN USERS OF THE SERVICE OR BETWEEN A USER OF THE SERVICE AND A THIRD PARTY; OR (VI) FOR ANY OTHER MATTER RELATING TO THE SERVICE OR ANY THIRD PARTY. THIS IS A COMPREHENSIVE LIMITATION OF LIABILITY THAT APPLIES TO ALL DAMAGES OF ANY KIND, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES, WHETHER BASED ON BREACH OF CONTRACT, BREACH OF WARRANTY, TORT (INCLUDING NEGLIGENCE), PRODUCT LIABILITY OR OTHERWISE, EVEN IF AN INDIVIDUAL ADVISES THE COMPANY PARTIES OF THE POSSIBILITY OF SUCH DAMAGES. THE LIMITATIONS OF LIABILITY SET FORTH HEREIN ARE FUNDAMENTAL ELEMENTS OF THE BASIS OF THE BARGAIN BETWEEN COMPANY AND YOU. THE PRODUCTS, INFORMATION AND SERVICES OFFERED ON AND THROUGH THE SERVICE WOULD NOT BE PROVIDED TO YOU WITHOUT SUCH LIMITATIONS.NOTWITHSTANDING THE FOREGOING, THE SOLE AND ENTIRE MAXIMUM LIABILITY OF THE COMPANY PARTIES FOR ANY REASON, AND YOUR SOLE AND EXCLUSIVE REMEDY FOR ANY CAUSE OR CLAIM WHATSOEVER, SHALL BE LIMITED TO THE CHARGES PAID BY YOU DIRECTLY TO COMPANY VIA THE SERVICE FOR SERVICES PROVIDED SOLELY AND DIRECTLY BY COMPANY TO YOU IN THE SIX MONTHS PRIOR TO SUCH CAUSE OR CLAIM.
                                YOU AGREE THAT REGARDLESS OF ANY STATUTE OR LAW TO THE CONTRARY, ANY CLAIM YOU MAY BRING MUST BE FILED WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES OR IT WILL BE PERMANENTLY BARRED.
                                SOME JURISDICTIONS DO NOT ALLOW THE DISCLAIMER OF CERTAIN WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR CERTAIN TYPES OF DAMAGES. ACCORDINGLY, SOME OF THE ABOVE DISCLAIMERS AND LIMITATIONS MAY NOT APPLY TO YOU.</p>
                            </li>

                            <li><span style={{marginRight: "4px", fontWeight: "600", fontSize: "17px"}}>Indemnification:</span>
                            <p>You agree to indemnify, defend and hold harmless the Company Parties
                                against all claims, demands, causes of action, losses, expenses, damages and costs
                                (including any reasonable attorneys’ fees), resulting or arising from or relating
                                to your use of the Service, any activity related to your service by you or any other
                                person permitted by you, any Content that you submit to, post on or transmit through
                                    the Service, your breach of these Terms of Service, your infringement or violation of 
                                    any rights of another, or termination of your access to the Service. We reserve the right to 
                                    assume, at our sole expense, the exclusive defense and control of any such claim or action and 
                                    all negotiations for settlement or compromise, and you agree to fully cooperate with us 
                            in the defense of any such claim, action, settlement or compromise negotiations, as requested by us.</p>
                            </li>

                            <li><span style={{marginRight: "4px", fontWeight: "600", fontSize: "17px"}}>Purchases and Payments:</span>
                                <ol>
                                    <li><span style={{marginRight: "4px", fontWeight: "600", fontSize: "17px"}}>Purchase of Services:</span>
                                    <p>Your contract for the purchase of Services, if any, is completed once you confirm your 
                                    purchase and performance of this contract begins as soon as the purchase is complete.</p>
                                    </li>
                                    <li><span style={{marginRight: "4px", fontWeight: "600", fontSize: "17px"}}>Pricing:</span>
                                    <p>Pricing and availability of all Services we offer, if any, displayed through the Site
                                        are subject to change at any time before 
                                    you click the button indicating that you want to purchase such Services.</p>
                                    </li>
                                </ol>
                            </li>

                            <li><span style={{marginRight: "4px", fontWeight: "600", fontSize: "17px"}}>Procedure for Notifying the Company of Copyright Infringement:</span>
                                <p>Those who believe that their copyrighted work has been infringed or are aware of other infringing material, 
                                should contact our Copyright Agent at the address listed below
                                and provide us with the following information:</p>
                                <ol>
                                    <li><p>
                                    An electronic or physical signature of a person authorized 
                                    to act on behalf of the owner of the copyrighted work that has allegedly been infringed.</p>
                                    </li>

                                    <li><p>
                                    Identification of the copyrighted work claimed to have been infringed.</p>
                                    </li>

                                    <li><p>
                                        Information describing where the allegedly infringing material is located on the Service.</p>
                                    </li>

                                    <li><p>
                                    Your address, telephone number, and email address.</p>
                                    </li>

                                    <li><p>
                                        A written statement by you that you have a good faith belief that the disputed use
                                        is not authorized by the copyright owner, its agent, or the law.</p>
                                    </li>

                                    <li><p>
                                    A statement by you that the above information in your 
                                    notification is accurate and that, under penalty of perjury,
                                        you are the copyright owner or authorized to act on the copyright owner’s behalf. 
                                        The foregoing information may be emailed or mailed to our Copyright Agent at the addresses 
                                        listed at the end of this Terms of Service.Following receipt of the information listed above,
                                        we will remove or disable access to the infringing material and take reasonable steps to notify
                                        the user responsible for posting said material. The posting of infringing copyrighted 
                                    material may result in the termination of user privileges of such user.</p>
                                    </li>
                                </ol>
                            </li>
                            <li><span style={{marginRight: "4px", fontWeight: "600", fontSize: "17px"}}>Miscellaneous:</span><p>
                                These Terms of Service constitute the entire agreement between Company and 
                                each user of the Service with respect to the subject matter of these Terms of Service.</p>
                                <ol>
                                    <li><p>If any provision of these Terms of Service shall be deemed unlawful, void or for any reason unenforceable by a court of competent jurisdiction, 
                                        the validity and enforceability of any remaining provisions will not be affected.</p></li>

                                    <li><p>The failure of the Company Parties to insist upon strict adherence to any 
                                        term of these Terms of Service shall not constitute a waiver of such 
                                        term and shall not be considered a waiver or limit that party’s right 
                                        thereafter to insist upon strict adherence to that term or any other term 
                                        contained in these Terms of Service.  You may not assign your obligations 
                                        or rights hereunder to another entity or individual. We may transfer, assign
                                            or delegate these Terms of Service and its rights and obligations without
                                            your consent.</p></li>
                                    <li><p>We shall have no liability to you hereunder if we are prevented from or delayed in performing our obligations, or from carrying on our business, by acts,
                                            events, omissions or accidents beyond our reasonable control, including, without limitation, 
                                            strikes, lock-outs or other industrial disputes (whether involving the workforce of us or any other party), 
                                            failure of a utility service or transport or telecommunications network, act of God, war, riot, civil commotion, malicious damage, compliance with any law or governmental order, rule, regulation or direction, accident, breakdown of plant or machinery, fire, flood or storm.</p></li>
                                    <li><p>No agency, partnership, joint venture, or employment is created as a result of these Terms of Service and you do not have any 
                                        authority of any kind to bind us in any respect whatsoever.</p></li>
                                    <li><p>No action arising out of these Terms of Service or your use of the Service, regardless of form or the basis of the claim, may be brought by you more than one (1) year 
                                        after the cause of action has arisen (or if multiple causes, from the date the first such cause arose).</p></li>
                                    
                                </ol>
                            </li>

                            <li><p>Applicable Law and Jurisdiction. Your use of the Service is governed by and will 
                                be enforced under the laws of the State of Nigeria without regard to its conflict 
                                of law provisions. You agree to submit to the personal and exclusive jurisdiction of the 
                                courts located within this stated Jurisdiction. You agree that printed copies of any and all 
                                agreements and/or notices in electronic form are admissible in any legal or regulatory proceedings.  
                                Any controversy, claim, suit, injury or damage arising from or in any way related to the Service or
                                    these Terms of Service shall be settled by binding arbitration in accordance with the commercial 
                                    arbitration rules of the Nigerian Arbitration Association then in effect. Any such controversy, 
                                    claim, suit, injury or damage shall be arbitrated on an individual basis and shall not be consolidated 
                                    in any arbitration with any controversy, claim, suit, injury or damage of any other party. Each party shall 
                                    assume its own costs of arbitration. IN ANY CLAIM, ACTION OR PROCEEDING TO ENFORCE ANY RIGHT OR OBLIGATION OF 
                                    THE PARTIES UNDER THE TERMS OF SERVICE INCLUDING, 
                                WITHOUT LIMITATION, RELATING TO YOUR USE OF THE SERVICE, YOU HEREBY WAIVE ANY RIGHT YOU MAY NOW HAVE OR HEREAFTER POSSESS TO A TRIAL BY JURY.</p></li>

                            <li><p>Customer Service. If you have any comments or questions regarding these Terms of Service or wish to report any
                                    violation of these Terms of Service, you may contact us at the address below. <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=info.doyenify@gmail.com" style={{marginLeft: "5px", display: "block"}} target="_blank">info.doyenify@gmail.com</a></p></li>
                    </ol>
                    </div>
                    </div>

                    
                    

                </div>
                <br/>
                    <br/>
                <Footer />
            </div>
            </>):(<>
              <div style={{height: "1000px", backgroundColor: "#dfe6e1"}}>
                  <Audio
                  height="80"
                  width="80"
                  // radius="9"
                  color="green"
                  ariaLabel="loading"
                  wrapperStyle={{alignItems: "center", justifyContent: "center",verticalAlign: "middle", margin: "auto", position: "absolute",
                  top: "0", left: "0", bottom: "0", right: "0"}}
                  // wrapperClass
                  />
              </div>  
           </>)
      } 
      
               
    </>
    
    )
}

export default Termandconditions;