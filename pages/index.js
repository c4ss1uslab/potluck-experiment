import Head from 'next/head';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Potluck Prototype</title>
      </Head>

      <main>
        <h1>Potluck Prototype - MoL/Unilivre Experiment</h1>

        <p>
          This is an MVP (minimum viable product) for running Math Trades. The hope is that it can facilitate a math trade for things other than boardgames, which was the intention of the original TradeMaximizer.
        </p>

        <p>
          <b>Como funciona?</b>
        </p>

        <p>
          O potluck é basicamente a união de 2 ideias:
        </p>

        <p>
          <b>1)</b> A criação de um pote comunitário de ofertas.
        </p>
       
        <p>
          Todos nós temos recursos disponíveis e potenciais inutilizados que podem apoiar outras pessoas da rede. A ideia é tornar esses recursos e potenciais visíveis pra que a gente possa se apoiar de forma mais efetiva.
        </p>

        <p>
          <b>2)</b> A implementação de um algoritmo de "maximizar trocas".
        </p>
        <p>
          A ideia essencial por trás desse algoritmo é que toda troca, se for realizada, vai ser uma troca ganha-ganha. Você vai receber algo que você quer mais do que o que você tem a ofertar, e quem vai receber aquilo que você tem a ofertar também.
        </p>
        <p>
          Por quê?
        </p>
        <p>
          A cada oferta que você faz, você determina pelo que você está disposte(o/a) a trocar aquilo.
        </p>
        <p>
          Você também pode optar por simplesmente doar algo. Mas se optar por trocar, o fato de poder escolher pelo quê você está disposte a trocar, significa que você só vai fazer uma troca se for algo benéfico pra você.
        </p>
        <p>    
          Ou seja, não é porque você está ofertando algo que necessariamente uma troca vai acontecer e você vai ter que entregar aquilo. Depende do que as outras pessoas também estão dispostas a trocar!
        </p>       

        <p>
          Pra exemplificar:
        </p>
        <p>
          Imagina um piquenique onde cada um leva umas comidinhas pra serem compartilhadas por geral e cada um leva também algo pra ser trocado entre a roda. Você lembra de um jogo de tabuleiro que você tem guardado e não joga há um bom tempo, então você está disposte a trocar ele por alguma outra coisa que outras pessoas trouxerem.
        </p>
        <p>
          Vocês sentam, comem e compartilham da comida, e apresentam seus itens de troca. Você gostou da proposta de 4 aulas de zouk que alguém propôs, mas a pessoa que ofereceu não tem interesse no seu jogo. Ainda assim, uma outra pessoa na roda levou um patinete que era algo que a professora de dança gostaria de receber. E o dono do patinete tem interesse no seu jogo.
        </p>
        <p>
          Boom! Match! ✨ 3 trocas realizadas.
        </p>

        <p>
          O potluck possibilita isso em grupos cada vez maiores!
        </p>

        <p>
          <b>Ok, entendi! Mas o que eu posso oferecer?</b>
        </p>
        <p>
          Qualquer coisa! Desde um convite pra algum evento, um livro que você quer passar pra frente, ou um sofá pra alguém dormir. As possibilidades são infinitas!
        </p>

        <p>
          Seguem aqui algumas sugestões que podem te dar ainda mais ideias:
        </p>
        <p>
          - Dá uma olhada no que já está sendo ofertado pela rede. É só ir em <a href='https://main--cerulean-dolphin-be33db.netlify.app/offerings'>"Offerings"</a> lá em cima.
        </p>
        <p>
          - Você já conhece os <a href='https://digitalgarden-c4ss1uslab.vercel.app/img/optimized/9rHPj9SM3p-656.webp'>8 tipos de capital</a>? É um modelo que vem da permacultura e pode te ajudar a refletir sobre: Que tipo de valor você pode gerar? Quais recursos você tem disponíveis que não estão sendo compartilhados?
        </p>
        <p>    
          - Se liga nesse modelo chamado <a href='https://digitalgarden-c4ss1uslab.vercel.app/img/optimized/W9f0u5OwvY-700.webp'>fourgames</a>. É um modelo baseado na teoria integral, que simplifica a vida em 4 grandes "jogos". Pode te ajudar a refletir sobre: Em quais áreas da vida das pessoas você pode gerar valor/tem algo a oferecer? Em quais áreas da sua vida você mais está precisando de ajuda?
        </p>
        <p>
          - Sentar com a reflexão simples e profunda de: O que mais é possível quando decidimos experimentar/jogar a vida em rede?
        </p>
        </p>

        <h2>About the Project</h2>

    <p>
        </p>
        <h3>Innovation</h3>
        <p>
          To create the wantlists instead of using a grid like the OLWLG and
          Abecorn, or setting individual values, instead we simply sort a list.
          This means that the process of evaluating trades for the user
          decreases from O(n^2) to O(n) complexity.
        </p>
  
        <h3>Source Code</h3>
        <ul>
          <li><a href='https://gitlab.com/lightandluck/next-js-potluck'>Gitlab</a></li>
          <li><a href='https://github.com/lightandluck/nextjs-potluck'>Github</a></li>
          <li><a href='https://gitlab.com/lightandluck/potluck-prototype'>Old version</a> for posterity</li>
        </ul>
  
        
  
        <h3>Credits and Prior Art</h3>
        <ul>
          <li>
            Used{' '}
            <a href='https://github.com/beaucarnes/mern-exercise-tracker-mongodb'>
              https://github.com/beaucarnes/mern-exercise-tracker-mongodb
            </a>{' '}
            as foundation (Mongoose may have been unnecessary)
          </li>
          <li>
            Inspiration from:{' '}
            <a href='https://github.com/abecorn/abecornlite'>
              https://github.com/abecorn/abecornlite
            </a>
            . Also the commercial site:{' '}
            <a href='https://www.abecorn.com'>abecorn.com</a>
          </li>
          <li>
            The BoardGameGeek community and everything they've done and shared
            about Math Trades -{' '}
            <a href='https://boardgamegeek.com/wiki/page/Math_Trades'>
              https://boardgamegeek.com/wiki/page/Math_Trades
            </a>
          </li>
          <li>
            The original TradeMaximizer:{' '}
            <a href='https://github.com/chrisokasaki/TradeMaximizer'>
              https://github.com/chrisokasaki/TradeMaximizer
            </a>
          </li>
          <li>
            Online Wantlist Generator:{' '}
            <a href='https://boardgamegeek.com/wiki/page/OLWLG#toc12'>
              https://boardgamegeek.com/wiki/page/OLWLG#toc12
            </a>
          </li>
          <li>
            TradeMaximizer wiki:{' '}
            <a href='https://boardgamegeek.com/wiki/page/TradeMaximizer'>
              https://boardgamegeek.com/wiki/page/TradeMaximizer
            </a>
          </li>
          <li>
            <a href='https://boardgamegeek.com/user/JeffyJeff'>
              Jeff Michaud's
            </a>{' '}
            Javascript implementation of Trade Maximizer
            <a href='https://bgg.activityclub.org/olwlg/trademax.html'>
              https://bgg.activityclub.org/olwlg/trademax.html
            </a>
          </li>
        </ul>
      </main>

      {/* <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .subtitle {
          font-size: 2rem;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style> */}
    </Fragment>
  );
}
