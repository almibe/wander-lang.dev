import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/tree/tree.js';
import '@shoelace-style/shoelace/dist/components/tree-item/tree-item.js';
import { For, useContext } from 'solid-js';
import { StoreContext } from '../store/StoreProvider';

export function Networks() {
  const store = useContext(StoreContext)

  setTimeout(() => {
   const tree = document.querySelector("#resourceTree")
   tree?.addEventListener("sl-selection-change", e => {
    const selection = (e.detail.selection[0]).getAttribute("value")
    store.setSelectedResource(selection)
  })})

  return <div>
    {/* <sl-button id="addNetwork">+</sl-button> */}
    <sl-tree id="resourceTree">
      <sl-tree-item selected value="section:README"><sl-icon src="/icons/file-earmark-text.svg"></sl-icon>README</sl-tree-item>
      <sl-tree-item value="section:Wander"><sl-icon src="/icons/terminal.svg"></sl-icon>Wander</sl-tree-item>
      <For each={store.state.networks}>
        {(network, _index) => <sl-tree-item>{network}</sl-tree-item>}
      </For>
    </sl-tree>
  </div>
}
