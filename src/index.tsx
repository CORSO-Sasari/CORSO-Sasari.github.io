import {render} from "preact";
import {LocationProvider, Route, Router} from "preact-iso";

import {Home} from './pages/Home';

export function App() {
    return (
        <Home></Home>
       //<LocationProvider>
       //    <Router>
       //        <Route path='/' component={Home} />
       //    </Router>
       //</LocationProvider>
    );
}

render(<App />, document.getElementById('app') as HTMLElement);