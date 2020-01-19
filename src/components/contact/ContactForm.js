import React, { Component, Fragment } from 'react';

class ContactForm extends Component {
  constructor () {
    super();
  };
  render () {
    return (
      <>
        <form>
          <div>
            <label>
              Name  &nbsp;
              <input type='text' name='name' />
            </label>
          </div>
          <div>
          <label>
            E-Mail&nbsp;
            <input type='text' name='email' />
          </label>
          </div>
          <div>
          <label>
            Message&nbsp;
            <input type='textarea' name='message' />
          </label>
          </div>
        </form>
      </>
    )
  }
}

export default ContactForm;
