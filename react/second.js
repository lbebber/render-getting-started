import React from 'react'
import {FormattedMessage} from 'react-intl'

const SecondStep = () => (
  <h2 className='dn'>
    <FormattedMessage
      id="getting-started.congrats"
      defaultMessage="Woohoo! Você fez sua primeira mudança numa app!"
    />
  </h2>
)

export default SecondStep
