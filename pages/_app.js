import '../styles/bootstrap.min.css';
import '../styles/global.css';

export default function MyApp({ Component, pageProps }) {
  return (
    // TODO: Figure out if we really want to wrap our entire application in div.container
    <div className="container">
      <Component {...pageProps} />
    </div>
  )
}