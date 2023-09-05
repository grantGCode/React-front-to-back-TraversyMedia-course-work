import { useState } from 'react'
import Card from './shared/card'
import Button from './shared/Button'

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
            <Button  type='submit'>Send</Button>
            {/* @todo - button will be in it's own component this is a place holder for now*/}
        </div>
    </form>

    </Card>
  
}

export default FeedbackForm