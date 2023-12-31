import { Component } from "react";
import { Link } from "react-router-dom";


class ErrorBoundary extends Component {
    state = { hasError: false };
    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.error("ErrorBoundary component caught an error", error, info)
    }
}

