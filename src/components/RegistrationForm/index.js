import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameBlur: false,
    lastNameBlur: false,
    isFormSubmitted: false,
  }

  onClickAnotherResponse = () => {
    this.setState({firstName: '', lastName: '', isFormSubmitted: false})
  }

  onFormSubmitSuccess = () => {
    this.setState({isFormSubmitted: true})
  }

  onFormSubmit = async event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '') {
      this.onTriggerFirstNameBlur()
    }
    if (lastName === '') {
      this.onTriggerLastNameBlur()
    }

    if (firstName !== '' && lastName !== '') {
      this.onFormSubmitSuccess()
    }
  }

  onFirstNameChange = event => {
    this.setState({firstName: event.target.value})
  }

  onLastNameChange = event => {
    this.setState({lastName: event.target.value})
  }

  onTriggerFirstNameBlur = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({firstNameBlur: true})
    } else {
      this.setState({firstNameBlur: false})
    }
  }

  onTriggerLastNameBlur = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({lastNameBlur: true})
    } else {
      this.setState({lastNameBlur: false})
    }
  }

  renderFirstNameField = () => {
    const {firstName, firstNameBlur} = this.state
    const styling = firstNameBlur
      ? 'input-element-empty'
      : 'input-element-not-empty'

    return (
      <>
        <label htmlFor="first-name">FIRST NAME</label>
        <input
          type="text"
          id="first-name"
          placeholder="First name"
          onChange={this.onFirstNameChange}
          onBlur={this.onTriggerFirstNameBlur}
          value={firstName}
          className={`${styling}`}
        />
        {firstNameBlur && <p className="required-alert"> Required </p>}
      </>
    )
  }

  renderLastNameField = () => {
    const {lastName, lastNameBlur} = this.state
    const styling = lastNameBlur
      ? 'input-element-empty'
      : 'input-element-not-empty'
    return (
      <>
        <label htmlFor="last-name">LAST NAME</label>
        <input
          type="text"
          id="last-name"
          onChange={this.onLastNameChange}
          onBlur={this.onTriggerLastNameBlur}
          placeholder="Last name"
          value={lastName}
          className={`${styling}`}
        />
        {lastNameBlur && <p className="required-alert"> Required </p>}
      </>
    )
  }

  showForm = () => (
    <form className="form-content" onSubmit={this.onFormSubmit}>
      <div className="input-field">{this.renderFirstNameField()}</div>
      <div className="input-field">{this.renderLastNameField()}</div>
      <div className="btn-container">
        <button type="submit"> Submit </button>
      </div>
    </form>
  )

  showSubmitMsg = () => (
    <div className="form-content form-submit-extra">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p> Submitted Successfully </p>
      <button
        type="button"
        className="submitted-form-btn"
        onClick={this.onClickAnotherResponse}
      >
        {' '}
        Submit Another Response{' '}
      </button>
    </div>
  )

  render() {
    const {isFormSubmitted} = this.state
    return (
      <div className="bg-container">
        <div className="registration-form-card">
          <h1> Registration </h1>
          {isFormSubmitted ? this.showSubmitMsg() : this.showForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
