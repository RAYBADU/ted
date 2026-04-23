import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HashRouter  } from "react-router-dom";

class RootErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, message: "" };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      message: error instanceof Error ? error.message : "Unknown app error",
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-stone-100 px-6 py-16 text-slate-900">
          <div className="mx-auto max-w-2xl rounded-3xl border border-red-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              App Error
            </p>
            <h1 className="mt-3 text-3xl font-bold">The page failed to load.</h1>
            <p className="mt-4 text-sm text-slate-600">
              {this.state.message || "Something went wrong while rendering."}
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RootErrorBoundary>
      <HashRouter >
        <App />
      </HashRouter>
    </RootErrorBoundary>
  </StrictMode>
);
