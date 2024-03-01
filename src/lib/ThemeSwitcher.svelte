<script lang="ts">
	import { flavors } from '@catppuccin/palette';

	import { onMount } from 'svelte';

	let current_theme = ''

	// watch for theme changes
	$: if (current_theme) {
		if (typeof document !== 'undefined') {
			document.documentElement.className = current_theme
			localStorage.setItem(('theme'), current_theme)
		}
	}

	// apply theme on mount based on browser preferences or local storage. default : latte
	onMount(() => {
		if (typeof window !== 'undefined') {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				current_theme = 'mocha'
			}
		}

		const theme = localStorage.getItem('theme')
		console.log('stoage = ' + theme)
		if (theme) {
			current_theme = theme
		}

		if (current_theme === '') {
			current_theme = 'latte'
		}

		document.documentElement.classList.add(current_theme)
		localStorage.setItem(('theme'), current_theme)
	})
</script>

<select bind:value={current_theme} class="bg-base">
	{#each Object.keys(flavors) as flavor}
		<option value="{flavor}" class="border-red-400" label="{flavor}">{flavor}</option>
	{/each}
</select>
