import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="bar">
        <small className="muted">
          © {new Date().getFullYear()} Mykola Novokhyzhnii — Vite • React •
          Redux Toolkit
        </small>
      </div>
    </footer>
  );
}
