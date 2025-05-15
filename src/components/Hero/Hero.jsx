import "./Hero.css";

export default function Hero() {
  return (
    <section
      className="hero"
      id="home"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://source.unsplash.com/1600x900/?technology,code")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#ffffff",
        padding: "100px 20px",
        textAlign: "center",
      }}
    >
      <div className="hero-content">
        <h2>Welcome to Our React Application</h2>
        <p>A simple React app with components in separate files</p>
        <button className="cta-button">Get Started</button>
      </div>
    </section>
  );
}
