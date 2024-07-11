import { createContext } from "solid-js";
import { createStore } from "solid-js/store";
import { runWander } from "../../lib/ligature-client";
import JSON5 from 'json5'
import { printResult } from '@ligature/ligature'

const [state, setState] = createStore({
    networks: [],
    editorContent: "",
    resultContent: "{}",
    selectedResource: "section:README",
    selected: "text"
})
export const StoreContext = createContext({
    state,
    setBodyContent: (resultContent: string) => {
        setState({resultContent})
    },
    setEditorContent: (editorContent: string) => {
        setState({editorContent})
    },
    setSelectedResource: (selectedResource: any) => {
        setState({selectedResource})
    },
    setSelected: (selected: any) => {
        setState({selected})
    },
    run: async () => {
        let resultContent = printResult(state.editorContent)
//        console.log(printResult(resultContent))
        setState({resultContent})
    },
    readNetworks: async () => {
        const res = await runWander("networks ()")
        const networks: string[] = JSON5.parse(res)
        setState({networks})
    },
    addNetwork: async (networkName: string) => {
        const networks = [networkName]
        setState({networks})
    },
    removeNetwork: async (networkName: string) => {
        
    }
});

export function StoreProvider(props) {
    StoreContext.defaultValue.readNetworks()

    return (
        <StoreContext.Provider>
            {props.children}
        </StoreContext.Provider>
    )
}
