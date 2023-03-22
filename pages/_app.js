import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      <Component {...pageProps} />
    </>
  )
}
