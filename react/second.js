import React from 'react'
import classNames from 'classnames/bind'
import style from './style.css'
import { FormattedMessage } from 'react-intl'

const cx = classNames.bind(style)

const SecondStep = () => (
  <h2 className={cx('hide')}>
    <FormattedMessage
      id="getting-started.congrats"
      description="Parabeniza o usuário pela primeira mudança"
      defaultMessage="Woohoo! Você fez sua primeira mudança numa app!"
    />
  </h2>
)

export default SecondStep
