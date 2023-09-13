import React from 'react'
import Card from '../components/shared/card'

function AboutPage() {
  return (
    <Card>
      <div className='about'>
          <p>This is a React app leave feedback for a product or service.</p>
          <p>Version: 1.0.0</p>

          <p>
            <a herf='/'>Back To Home</a>
          </p>
      </div>
    </Card>
  )
}

export default AboutPage