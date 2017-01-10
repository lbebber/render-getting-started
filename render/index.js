import React, {Component} from 'react'
import classNames from 'classnames/bind'
import Placeholder from 'vtex.render/Placeholder.js'
import style from './style.css'

const cx = classNames.bind(style)

//eslint-disable-next-line
class GettingStartedIndex extends Component {
  render () {
    return (
      <article>
        <header className="bg-light-blue sans-serif">
          <div className="mw9 center pa4 pt5-ns ph7-1 grow">
            <h1 className="f2 f1-m f-headline-l measure-narrow lh-title mv0">
            Bem-vindo ao Primeiro Tutorial do Render®
            </h1>
            <h3 className="f3 fw1 georgia">
            Esse é um tutorial interativo. A idéia é você descobrir as <i>features</i> do Render editando uma app.
            </h3>
            <h4 className="f6 ttu tracked black-80">
              @renderteam
            </h4>
          </div>
        </header>
        <div className="pa4 ph7-l georgia mw9 center">
          <Placeholder id="first-step">
            <div>
              <h2>Primeiros passos</h2>
              <p>Primeiro, instale o <strong>toolbelt</strong>, nossa ferramenta de linha de comando para desenvolver na plataforma VTEX:</p>
              <code className="code">
                <pre className="pre bg-near-white pa3">
{`  $ npm install -g vtex
`}
                </pre>
              </code>
              <p>Agora vamos fazer <i>login</i> na sua conta e criar um <strong>workspace</strong>, que é a sua área de trabalho pessoal.</p>
              <code className="code">
                <pre className="pre bg-near-white pa3">
{`  $ vtex login
  ? Email: seuemail@vtex.com
  ? Account: ${render.context.account}
  ! Please check your email - we've sent you a temporary code.
  ? Code:
  ? Workspaces: Create new workspace...
  ? New workspace name: meu-workspace-unico
`}
                </pre>
              </code>
              <p>
                Um workspace serve para que você possa fazer mudanças isoladas na sua loja. Nada que você faz em um workspace é publicado até que você <strong>promova</strong> seu workspace. Por enquanto, não se preocupe com isso.
              </p>
              <p>Agora, clone o repositório dessa app:</p>
              <code className="code">
                <pre className="pre bg-near-white pa3">
{`  $ git clone git@github.com:vtex-apps/getting-started.git
  $ cd getting-started
  $ vtex setup eslint
`}
                </pre>
              </code>
              <p>Finalmente, para podermos alterar uma app e ver suas mudanças precisamos sincronizar os arquivos locais com a plataforma. Assim, todas as nossas edições serão refletidas em tempo real! ✨</p>
              <p>Pra fazer isso, vamos usar o comando <i>watch</i></p>
              <code className="code">
                <pre className="pre bg-near-white pa3">
{`  $ vtex watch
  info:    Watching app vtex.getting-started@0.1.0
  Your URL: http://developers.alpha.myvtex.com/?vtex_workspace=meu-workspace-unico
`}
                </pre>
              </code>
              <p>Legal! Após alguns segundos, seus arquivos já estão sendo sincronizados e você pode clicar na URL que apareceu no seu terminal para ver o <i>seu workspace online!</i></p>
              <p>Agora, abra seu editor de texto preferido para editar o arquivo <i>render/index.js</i>.</p>
              <p>Procure o seguinte trecho de código e mude a classe "hide" para "success":</p>
              <code className="code">
                <pre className="pre bg-near-white pa3">
{`  // ANTES
  <Placeholder id="second-step">
    <h2 className={cx('hide')}>Woohoo! Você fez sua primeira mudança numa app!</h2>
  </Placeholder>

  // DEPOIS
  <Placeholder id="second-step">
    <h2 className={cx('success')}>Woohoo! Você fez sua primeira mudança numa app!</h2>
  </Placeholder>
`}
                </pre>
              </code>
              <p>
                Agora <strong>salve</strong> o arquivo. Se tudo der certo, a mudança vai aparecer aqui embaixo!
              </p>
            </div>
          </Placeholder>
          <Placeholder id="second-step">
            <h2 className={cx('hide')}>Woohoo! Você fez sua primeira mudança numa app!</h2>
          </Placeholder>
        </div>
      </article>
    )
  }
}

export default GettingStartedIndex
