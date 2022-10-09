import { useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import { ISourceOptions } from "tsparticles-engine";
import {AppOverlay} from "./components/appOverlay"
import { store } from "./redux/reduxStore"
import { Provider} from "react-redux"

function App() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return (
        <Provider store={store}>
            <div className="App" style = {{margin: "5%"}} >
                <Particles options={particlesOptions as ISourceOptions} init={particlesInit}/>
                <AppOverlay/>   
            </div>
        </Provider>
    );
}

export default App;
