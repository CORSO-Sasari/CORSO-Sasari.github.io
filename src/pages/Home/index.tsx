import {lazy} from 'preact-iso';
import {Suspense} from "preact/compat";

const Header = lazy(() => import('../../components/Header/Parent/Header').then(m => m.Header));

export function Home() {
    return (
        <Suspense fallback={<p>Загрузка...</p>}>
            <Header></Header>
        </Suspense>
    );
}