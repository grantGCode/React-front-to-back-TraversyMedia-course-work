import { useState } from 'react'
import Card from './shared/card'

function FeedbackForm() {
    const [text, setText] = useState('')

    const handTextChange = (e) => {
        setText(e.target.value)
    }

  return <Card>
    <form>
        <h2>Houw would you rate our service?</h2>
        {/* @todo - rating select component*/}
        <div className="input-group">
            <input onChange={handTextChange} type='text' placeholder='Wright a review' value={text} />
            <button  type='submit'>Send</button>
            {/* @todo - button will be in it's own component this is a place holder for now*/}
        </div>
    </form>

    </Card>
  
}

export default FeedbackForm