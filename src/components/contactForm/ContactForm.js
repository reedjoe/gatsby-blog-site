import React from 'react'

import "./ContactForm.css"

class ContactForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            submitDisabled: false,
            onclic: false,
            validate: false,
            validateError: false
        };

        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onMsgChange = this.onMsgChange.bind(this);
        this.addOnClickClass = this.addOnClickClass.bind(this);
        this.success = this.success.bind(this);
        this.error = this.error.bind(this);
        this.submitContactForm = this.submitContactForm.bind(this);
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }
    onEmailChange(event) {
        this.setState({email: event.target.value})
    }
    onMsgChange(event) {
        this.setState({message: event.target.value})
    }


    async addOnClickClass() {
        setTimeout(() => {
            this.setState({onclic: true});
          }, 150);
    }

    async success() {
        setTimeout(() => {
            this.setState({onclic: false, validate: true});
        }, 1250);
        setTimeout(() => {
            this.setState({
                validate: false,
                name: '',
                email: '',
                message: '',
                submitDisabled: false
            });
        }, 2250);
    }

    async error() {
        setTimeout(() => {
            this.setState({onclic: false, validateError: true});
        }, 1250);
        setTimeout(() => {
            alert('Error: Message Not Sent\n\nThere was a problem sending your message. Please refresh the page and try again.');
        }, 1500);
        setTimeout(() => {
            this.setState({
                validateError: false,
                name: '',
                email: '',
                message: '',
                submitDisabled: false
            });
        }, 2500);
    }

    async submitContactForm(e) {
        e.preventDefault();

        this.setState({
            submitDisabled: true
        });

        await this.addOnClickClass();

        const payload = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        }
        try {
            const url = 'https://3vf3tl8vj3.execute-api.eu-west-2.amazonaws.com/dev/email/send';
            const response = await fetch(url, config);
            const data = await response.json();
            if (response.status !== 200) {
                await this.error();
                return response;
            }
            await this.success();
            return data;
        } catch (e) {
            await this.error();
            return e;
        }
    };

    render() {
        return (
            <div className="contact-form-container">
                <form id="contact-form" onSubmit={this.submitContactForm}>
                    <h3>Contact Form</h3>
                    <h4>Send me a message and I'll get back to you</h4>
                    <fieldset>
                        <input placeholder="Name" type="text" name="name" required 
                            value={this.state.name} onChange={this.onNameChange}/>
                    </fieldset>
                    <fieldset>
                        <input placeholder="Email Address" type="email" name="email" required 
                            value={this.state.email} onChange={this.onEmailChange}/>
                    </fieldset>
                    <fieldset>
                        <textarea placeholder="Type your message here...." name="message" required 
                            value={this.state.message} onChange={this.onMsgChange}></textarea>
                    </fieldset>
                    <div className="contact-form-button-container">
                        <button name="submit" disabled={this.state.submitDisabled} 
                            type="submit" id="contact-form-button"
                            className={
                                `${this.state.onclic ? "onclic" : ""} 
                                ${this.state.validate ? "validate" : ""} 
                                ${this.state.validateError ? "validate-error" : ""}`
                            }
                        >
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ContactForm;