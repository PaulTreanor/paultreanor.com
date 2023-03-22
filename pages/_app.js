import '../styles/global.css'
import '../styles/github.css'; // Adjust the path according to your project structure and chosen theme


export default function App({ Component, pageProps }) {
  return (
    <>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      <Component {...pageProps} />
    </>
  )
}
