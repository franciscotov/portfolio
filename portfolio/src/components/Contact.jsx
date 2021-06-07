//require("dotenv").config();
import React from 'react';
import styles from './Contact.module.scss';
import emailjs from 'emailjs-com';

//const { YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_USER_ID } = process.env;


const Contact = () => {

    //console.log('hola', YOUR_SERVICE_ID);
    function sendEmail(e) {
        e.preventDefault();
        
        
        emailjs.sendForm('service_5ni45qh', 'template_8c513xp', e.target, 'user_SicT46dRo0IkFNAR0rnUC')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

        e.target.reset();
      }


    return (
        
            <section className={styles.container} id='Contact'>
                <div className={styles.elements}>
                    <h1>Contact</h1> 
                    <div className={styles.line}></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nostrum provident
                        eligendi tenetur omnis repellat, officia harum iste at illum, corrupti quas
                        incidunt numquam aperiam veritatis commodi ipsum similique temporibus!</p>
                </div>

                <div className={styles.cont_form}>
                    <form className={styles.login_form}  onSubmit={sendEmail}>

                           
                            <div className={styles.form__group}>
                                
                                <input type="text" name="name" className={styles.form__field}
                                placeholder="Name"  id='name' required />
                                <label for="name" className={styles.form__label} >Name</label>
                            </div>

                            <div className={styles.form__group}>                  
                                <input type="email" name="email" className={styles.form__field}
                                 placeholder="Email"  id='email' required/>
                                <label for="email" className={styles.form__label}>Email</label>
                            </div>

                            <div className={styles.form__group}> 
                                <input type="text" name="subject" className={styles.form__field}
                                 placeholder="Subject"  id='subject' required/>
                                <label for="subject" className={styles.form__label}>Subject</label>
                            </div>
                            
                            <div className={styles.form__group}>
                                
                                <textarea name="message" className={styles.form__field}
                                placeholder="message"  id='message' required/>
                                <label for="message" className={styles.form__label}>Message</label>
                            </div>
                            
                            
                                <input type="submit" value="Send Message" />
                            
                            
                    </form>
                </div>
            </section>
            
        
    );
};

export default Contact;