import App from './App';
import {createRoot} from "react-dom/client";
import {MobxProvider} from "./store";
import CheckAuth from "./components/CheckAuth";
import {BrowserRouter} from "react-router-dom";
// Scroll bar
import 'simplebar/src/simplebar.css';

const container = document.getElementById('root');
const root = createRoot(container);


root.render(
    <MobxProvider>
        <CheckAuth>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </CheckAuth>
    </MobxProvider>
);

