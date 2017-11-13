import React from 'react'
import classNames from 'classnames/bind'
import style from './style.css'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'

const cx = classNames.bind(style)

const FirstStep = () =>
  <div>
    <h2>
      <FormattedMessage
        id="getting-started.first-steps-header"
        description="Título para sessão de primeiros passos"
        defaultMessage="Primeiros passos"
      />
    </h2>
    <p>
      <FormattedMessage
        id="getting-started.toolbelt"
        description="Primeiro passo para preparar o render"
        defaultMessage="Primeiro, instale o {toolbelt}, nossa ferramenta de linha de comando para desenvolver na plataforma VTEX:"
        values={{
          toolbelt: <strong>toolbelt</strong>,
        }}
      />
    </p>
    <code className="code">
      <pre className="pre bg-near-white pa3">
{`  $ npm install -g vtex
`}
      </pre>
    </code>
    <p>
      <FormattedHTMLMessage
        id="getting-started.workspace-creation"
        description="Passo para criar um workspace"
        defaultMessage="Agora vamos fazer <i>login</i> na sua conta e criar um <strong>workspace</strong>, que é a sua área de trabalho pessoal."
      />
    </p>
    <code className="code">
      <pre className="pre bg-near-white pa3">
{`  $ vtex login
? Email: seuemail@vtex.com
? Account: ${global.__RUNTIME__.account}
! Please check your email - we've sent you a temporary code.
? Code:
? Workspaces: Create new workspace...
? New workspace name: meu-workspace-unico
`}
      </pre>
    </code>
    <p>
      <FormattedHTMLMessage
        id="getting-started.workspace-description"
        description="Explica para que serve um workspace"
        defaultMessage="Um workspace serve para que você possa fazer mudanças isoladas na sua loja. Nada que você faz em um workspace é publicado até que você <strong>promova</strong> seu workspace. Por enquanto, não se preocupe com isso."
      />
    </p>
    <p>
      <FormattedMessage
        id="getting-started.clone"
        description="Passo para clonar o repositório"
        defaultMessage="Agora, clone o repositório dessa app:"
      />
    </p>
    <code className="code">
      <pre className="pre bg-near-white pa3">
{`  $ git clone git@github.com:vtex-apps/getting-started.git
$ cd getting-started
$ vtex setup eslint
`}
      </pre>
    </code>
    <p>
      <FormattedMessage
        id="getting-started.synchronize"
        description="Passo para sincronizar mudanças do app"
        defaultMessage="Finalmente, para podermos alterar uma app e ver suas mudanças precisamos sincronizar os arquivos locais com a plataforma. Assim, todas as nossas edições serão refletidas em tempo real!"
      /> ✨
    </p>
    <p>
      <FormattedMessage
        id="getting-started.watch"
        description="Explica sobre o comando 'watch'"
        defaultMessage="Pra fazer isso, vamos usar o comando {link}"
        values={{link: <i>link</i>}}
      />
    </p>
    <code className="code">
      <pre className="pre bg-near-white pa3">
{`  $ vtex link
info:    Linking app vtex.getting-started
Your URL: http://meu-workspace-unico.basedevmkp.myvtex.com/getting-started
`}
      </pre>
    </code>
    <p>
      <FormattedHTMLMessage
        id="getting-started.online"
        description="Explica como abrir o workspace online"
        defaultMessage="Legal! Após alguns segundos, seus arquivos já estão sendo sincronizados e você pode clicar na URL que apareceu no seu terminal para ver o <i>seu workspace online!</i>"
      />
    </p>
    <p>
      <FormattedMessage
        id="getting-started.edit-file"
        description="Pede para editar um arquivo"
        defaultMessage="Agora, abra seu editor de texto preferido para editar o arquivo {nomeDoArquivo}."
        values={{ nomeDoArquivo: <i>render/second.js</i> }}
      />
    </p>
    <p>
      <FormattedMessage
        id="getting-started.change-css"
        description="Pede para mudar uma classe css no código"
        defaultMessage="Procure o seguinte trecho de código e mude a classe 'hide' para 'success':"
      />
    </p>
    <code className="code">
      <pre className="pre bg-near-white pa3">
{`  // ANTES
<h2 className={cx('hide')}>

// DEPOIS
<h2 className={cx('success')}>
`}
      </pre>
    </code>
    <p>
      <FormattedHTMLMessage
        id="getting-started.save"
        description="Pede para salvar o arquivo e ver a mudança"
        defaultMessage="Agora <strong>salve</strong> o arquivo. Se tudo der certo, a mudança vai aparecer aqui embaixo!"
      />
    </p>
  </div>

export default FirstStep
