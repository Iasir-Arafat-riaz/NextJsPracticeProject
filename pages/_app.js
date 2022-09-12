import Footer from "components/Footer";
import Header from "components/Header";
import "bootstrap/dist/css/bootstrap.css";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout;
  //hide navbar from specific component
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>

      <Footer />
    </>
  );
}

export default MyApp;

const EmptyLayout = ({ children }) => <>{children}</>;
