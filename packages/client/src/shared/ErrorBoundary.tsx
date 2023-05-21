/* eslint-disable no-console */
import Card from '@mui/material/Card';
import Alert from '@mui/material/Alert';
import * as React from 'react';

class ErrorBoundary extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = { errorInfo: null };
    }

    componentDidCatch(error: any, errorInfo): void {
        console.log(error);
        this.setState({
            errorInfo,
        });
    }

    render(): React.ReactNode {
        const { errorInfo } = this.state;
        if (errorInfo) {
            return (
                <Card
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 'calc(100vh - 64px)',
                    }}
                >
                    <Alert
                        severity="error"
                        onClick={(): void => window.location.reload()}
                    >
Something Went Wrong!!

                    </Alert>
                </Card>
            );
        }
        const { children } = this.props;
        return children;
    }
}

export default ErrorBoundary;
