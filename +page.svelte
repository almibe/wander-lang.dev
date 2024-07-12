<script lang="ts">
	import Content from "../components/content/Content.svelte";
	import Networks from "../components/networks/Networks.svelte";
	import Split from 'split-grid'
	import '@shoelace-style/shoelace/dist/themes/light.css';
	import { onMount } from 'svelte';

	onMount(() => {
		Split({
			columnGutters: [{
			track: 1,
			element: document.querySelector('.gutter'),
			}],
		})
	})
</script>

<svelte:head>
	<title>wander-lang.dev</title>
</svelte:head>

<div id="split-panel">
	<div id="resource-panel">
		<Networks />
	</div>
	<div class="gutter"></div>
	<div id="content-panel">
		<Content />
	</div>
</div>

<style>
</style>
