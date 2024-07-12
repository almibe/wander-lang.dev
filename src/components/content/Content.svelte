<script lang="ts">
  import Readme from './Readme.svelte'
  import Wander from '../wander/Wander.svelte'
	import { selectedResource } from '../store/store';

  let selectedValue = "section:README"
  selectedResource.subscribe((value) => selectedValue = value)
</script>

{#if selectedValue == "section:README"}
  <Readme></Readme>
{:else if selectedValue == "section:Wander"}
  <Wander></Wander>
{:else}
	<p>Network View -- TODO</p>
{/if}
