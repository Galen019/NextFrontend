// pages/_app.tsx
import { AppProps } from 'next/app';
import Tabs from '../components/tabs';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Tabs />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;