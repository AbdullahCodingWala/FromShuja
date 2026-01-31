import { useState, useEffect } from 'react';
import App from './App.jsx';
import Preloader from './Preloaders/preloader1.jsx';

export default function Root() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    return loading ? <Preloader /> : <App />;
}
