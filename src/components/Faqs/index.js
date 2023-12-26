// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {
    faqState: [],
    isClicked: false,
  }

  constructor(props) {
    super(props)
    const {faqsList} = this.props
    this.state = {
      faqState: faqsList,
      isClicked: false,
    }
  }

  expandCard = id => {
    const {faqState} = this.state
    let {isClicked} = this.state
    faqState.map(each => {
      if (id === each.id) {
        isClicked = !isClicked
        return isClicked
      }
      return isClicked
    })
  }

  render() {
    console.log(this.state)
    const {faqState} = this.state
    return (
      <div className="bg-container">
        <h1 className="title">FAQs</h1>

        <ul className="faq-container">
          {faqState.map(each => (
            <FaqItem data={each} id={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Faqs
