import { useState } from 'react'
import Header from './components/Header'
import FeedbackItem from './components/FeedbackItem'
import FeedbackData from './data/feedbackData'
function App() {
  const [Feedback, setFeedback] = useState(FeedbackData)

    return (
    <>
        <Header />
        <div className='container'>
          <FeedbackItem />
        </div>
    </>
    )
}

export default App