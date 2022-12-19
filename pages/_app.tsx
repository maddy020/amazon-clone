import '../styles/globals.css'
import { store } from '../app/store'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { SessionProvider } from 'next-auth/react'
// import { Provider as AuthProvider } from 'next-auth/client'
function MyApp({ Component, pageProps }: AppProps) {
 
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      </SessionProvider>
    
  ) 
 
}
export default MyApp
