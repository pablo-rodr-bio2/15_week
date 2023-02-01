const ErrorComponent = () => {
    if (Date.now()) {
        throw new Error()
        return (<div>Upss</div>)
    }
    return (
        <div>This was a mistake</div>
    )
}

export default ErrorComponent