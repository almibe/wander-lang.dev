import { createContext } from "solid-js";
import { createStore } from "solid-js/store";
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
    setBodyContent: (resultContent) => {
        setState({resultContent})
    },
    setEditorContent: (editorContent) => {
        setState({editorContent})
    },
    setSelectedResource: (selectedResource) => {
        setState({selectedResource})
    },
    setSelected: (selected) => {
        setState({selected})
    },
    run: async () => {
        let resultContent = printResult(state.editorContent)
//        console.log(printResult(resultContent))
        setState({resultContent})
    },
    readNetworks: async () => {
        throw "TODO"
        // const res = await runWander("networks ()")
        // const networks: string[] = JSON5.parse(res)
        // setState({networks})
    },
    addNetwork: async (networkName) => {
        const networks = [networkName]
        setState({networks})
    },
    removeNetwork: async (networkName) => {
        
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
