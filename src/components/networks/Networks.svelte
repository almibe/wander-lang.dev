<script lang="ts">
  import { browser } from '$app/environment';
	import { selectedResource } from '../store/store';

  if (browser) {
    import("@shoelace-style/shoelace/dist/components/tree/tree.js");
    import('@shoelace-style/shoelace/dist/components/tree-item/tree-item.js');
    import('@shoelace-style/shoelace/dist/components/button/button.js');

    setTimeout(() => {
        const tree = document.querySelector("#resourceTree")
        tree?.addEventListener("sl-selection-change", e => {
          const selection = (e.detail.selection[0] as HTMLElement).getAttribute("value")
          selectedResource.set(selection)
        })})
  }
</script>

<div>
  <sl-button id="addNetwork">+</sl-button>
  <sl-tree id="resourceTree">
    <sl-tree-item selected value="section:README">README</sl-tree-item>
    <sl-tree-item value="section:Wander">Wander</sl-tree-item>
    <!-- <For each={store.state.networks}>
      {(network, _index) => <sl-tree-item>{network}</sl-tree-item>}
    </For> -->
  </sl-tree>
</div>
