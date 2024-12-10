import React from "react";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div>
      {/* Main Content */}
      <div style={{ minHeight: "80vh", padding: "20px" }}>
        <h1>Welcome to Our Website</h1>
        <p>This is the main content of the page.</p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
