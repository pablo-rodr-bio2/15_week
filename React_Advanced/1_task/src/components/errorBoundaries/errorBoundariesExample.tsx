import { Component, ReactNode } from "react";

interface Props {
    children: ReactNode
    fallback: ReactNode
}

interface State {
    hasError: boolean
}
class ErrorBoundaryExample extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    render() {
        if(this.state.hasError) {
            return this.props.fallback
        }

        return this.props.children
    }
}

export default ErrorBoundaryExample