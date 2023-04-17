import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { firebaseConfig } from '@/firebase';
import { initializeApp } from 'firebase/app';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    const handleRouteChange = (url: string) => {
      logEvent(analytics, 'page_view', { page_path: url });
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />
}