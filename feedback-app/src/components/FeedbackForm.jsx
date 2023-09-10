import { useState } from 'react'
import RaitingSelect from './RaitingSelect'
import Card from './shared/card'
import Button from './shared/Button'

function FeedbackForm({handleAdd}) {
    const [text, setText] = useState('')
    const [rating, setRaiting] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleTextChange = (e) => {
      if (text === '') {
        setBtnDisabled (true)
        setMessage(null)
      }else if (text !== '' && text.trim().length <= 10) {
        setBtnDisabled (true)
        setMessage('Text must be at least 10 characters')
      } else {
        setMessage(null)
        setBtnDisabled(false)
      }


      setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating,
            }

            handleAdd(newFeedback)
            
            setText('')
        }
    }

  return <Card>
        <form onSubmit={handleSubmit}>
            <h2>Houw would you rate our service?</h2>
            {/* @todo - rating select component*/}
            <RaitingSelect select={(rating) => setRaiting(rating)}/>
            <div className="input-group">
                <input 
                  onChange={handleTextChange} 
                  type='text' 
                  placeholder='Wright a review' 
                  value={text} 
                />
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                
            </div>
            {message && <div className='message'>{message}</div>}
        </form>

    </Card>
  
}

export default FeedbackForm