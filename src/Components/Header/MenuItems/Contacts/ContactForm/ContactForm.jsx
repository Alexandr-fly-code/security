import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './ContactForm.css';

class ContactForm extends PureComponent {
    render() {
        return (
            <div>
                <form action="./mail.php" method="POST">
                    <input type="email" className='input-email'  name="email"/>
                    <input type="text" className='input-name'  name="name"/>
                    <input type="text" className='input-phone'  name="phone"/>
                   <input type="submit" value='Отправить' className='btn-submit'/>
                </form>
                
            </div>
        );
    }
}

ContactForm.propTypes = {

};

export default ContactForm;