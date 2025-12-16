import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Background from './Background'
import Cursor from './Cursor'
import { useEffect } from 'react'

export default function Layout() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);

        // Disable right click
        const handleContextMenu = (e) => {
            e.preventDefault();
        };
        document.addEventListener('contextmenu', handleContextMenu);

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
        };
    }, [pathname]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
            <Cursor />
            <Background />
            <Navbar />
            <main style={{ flex: 1, paddingTop: '80px' }}>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
