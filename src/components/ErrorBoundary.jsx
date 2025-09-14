import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log error to an error reporting service here
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-pink-400 font-mono">
          <h1 className="text-3xl mb-4">Something went wrong.</h1>
          <p className="mb-2">Please reload the page or try again later.</p>
        </div>
      );
    }
    return this.props.children;
  }
}
