import React, { Component } from 'react';
import classnames from 'classnames';

class NewsletterForm extends Component {
  state = {
    email: '',
  }

  render() {
    const { className, submit = 'Submit' } = this.props;
    const classNames = classnames(
      'newsletter-form field field-grouped is-revealing',
      className
    )

    return (
      <form className={classNames}>

        <div className="control">
        <button
          type="button"
          className="button button-primary button-block button-shadow"
          onClick={(e) => {
            e.preventDefault();
            window.location.href='https://www.youtube.com/watch?v=X_Czo6_lbJ8&feature=youtu.be';
            }}
      > {submit}</button>
          
        </div>
        
        
      </form>
      
    )
  }
}

export default NewsletterForm;
