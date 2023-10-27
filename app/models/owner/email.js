const { owner } = require('../../constants')

function ViewModel (value, error) {
  this.model = {
    formAction: owner.routes.email,
    backLink: owner.routes.phoneNumber,
    email: {
      label: {
        text: 'What is your email address?',
        classes: 'govuk-label--l',
        isPageHeading: true
      },
      id: 'email',
      name: 'email',
      value
    }
  }

  if (error) {
    this.model.email.errorMessage = {
      text: 'Enter an email address in the correct format, like name@example.com.'
    }
  }
}

module.exports = ViewModel
