// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  constructor(prop) {
    super(prop)
    const {data} = this.props
    this.state = {
      data,
      isClicked: true,
    }
  }

  expandCard = () => {
    const {isClicked} = this.state
    this.setState({
      isClicked: !isClicked,
    })
  }

  render() {
    const {data, isClicked} = this.state
    const {questionText, answerText} = data

    return (
      <li className="faq-card-item">
        <div className="ques-expand-section">
          <h1>{questionText}</h1>
          <button
            type="button"
            onClick={this.expandCard}
            className="expand-btn"
          >
            <img
              src={
                isClicked
                  ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
              }
              alt={isClicked ? 'plus' : 'minus'}
            />
          </button>
        </div>

        <div className={`answer-section ${isClicked ? 'hide' : ''}`}>
          <hr className="seprator" />
          <p>{answerText}</p>
        </div>
      </li>
    )
  }
}

export default FaqItem
