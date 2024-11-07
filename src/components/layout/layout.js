import Footer from "./footer"
import Header from "./header"

function layout({children }) {
  return (
    <>
    <header className="header">
        <Header />
        </header>
        <div className="main">
        {children}
        </div>
        <footer className="footer ">
        <Footer />
        </footer>
    
    </>
  )
}

export default layout