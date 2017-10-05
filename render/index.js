import React, {Component} from 'react'
import classNames from 'classnames/bind'
import {ExtensionPoint} from 'render'
import style from './style.css'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'

const cx = classNames.bind(style)

//eslint-disable-next-line
class GettingStartedIndex extends Component {
  render () {
    return (
      <article>
        <header className="bg-light-blue sans-serif">
          <div className="mw9 center pa5 pt5-ns ph7-1 grow">
            <h1 className="f2 f1-m f-headline-l lh-title mv0">
              <FormattedMessage
                id="getting-started.greeting"
                description="Boas vindas ao usuário no seu primeiro tutorial"
                defaultMessage="Bem-vindo ao Primeiro Tutorial do Render®!"
              />
            </h1>
            <h3 className="f3 fw1 georgia">
              <FormattedMessage
                id="getting-started.description"
                description="Descrição mais detalhada sobre o tutorial"
                defaultMessage="Esse é um tutorial interativo. A idéia é você descobrir as funcionalidades do Render editando uma app."
              />
            </h3>
            <h4 className="f6 ttu tracked black-80">
              @renderteam
            </h4>
          </div>
        </header>
        <div className="pa4 ph7-l georgia mw9 center">
          <ExtensionPoint id="first-step">
          </ExtensionPoint>
          <ExtensionPoint id="second-step">
          </ExtensionPoint>
        </div>
      </article>
    )
  }
}

export default GettingStartedIndex
