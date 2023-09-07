import { useState } from 'react'
import Card from './shared/card'
import Button from './shared/Button'

function FeedbackForm() {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handTextChange = (e) => {
      if (text === '') {
        setBtnDisabled (true)
        setMessage(NaN)
      }else if (text !== '' && text.trim().length <= 10) {
        setBtnDisabled (true)
        setMessage('Text must be at least 10 characters')
      } else {
        setMessage(null)
        setBtnDisabled(false)
      }


      setText(e.target.value)
    }

  return <Card>
    <form>
        <h2>Houw would you rate our service?</h2>
        {/* @todo - rating select component*/}
        <div className="input-group">
            <input onChange={handTextChange} type='text' placeholder='Wright a review' value={text} />
            <Button  type='submit' isDisabled={btnDisabled}>Send</Button>
            {/* @todo - button will be in it's own component this is a place holder for now*/}
        </div>
        {message && <div className='message'>{message}</div>}
    </form>

    </Card>
  
}

export default FeedbackForm