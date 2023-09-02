import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/feedbackData'
function App() {
  const [Feedback, setFeedback] = useState(FeedbackData)

    return (
    <>
        <Header />
        <div className='container'>
          <FeedbackList feedback={Feedback} />
        </div>
    </>
    )
}

export default App