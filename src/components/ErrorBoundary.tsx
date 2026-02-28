import { Component } from "react";
import type { ReactNode, ErrorInfo } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-background px-6">
          <div className="text-center max-w-md">
            <h1 className="font-display text-4xl font-semibold text-foreground mb-4">Ops!</h1>
            <p className="text-muted-foreground mb-8">
              Algo deu errado ao carregar a página. Tente recarregar ou volte para a página inicial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 rounded-full border border-border text-foreground font-medium hover:bg-muted transition-colors"
              >
                Recarregar
              </button>
              <a
                href="/"
                className="px-6 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
              >
                Voltar ao Início
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
