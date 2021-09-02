import Header from "../components/Header";
import Footer from "../components/Footer";

const EnglishLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {/* Header */}
      <main>{children}</main>
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default EnglishLayout;
