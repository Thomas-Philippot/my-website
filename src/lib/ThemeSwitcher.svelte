<script lang="ts">
	import { flavors } from '@catppuccin/palette';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import { config } from '@fortawesome/fontawesome-svg-core';

	import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
	config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

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

<div class="flex gap-2 items-center">
	{#if current_theme === 'latte'}
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
			<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
		</svg>
	{:else}
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
			<path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
		</svg>
	{/if}
	<select bind:value={current_theme} class="bg-base" aria-label="Theme">
		{#each Object.keys(flavors) as flavor}
			<option value="{flavor}" class="border-red-400">
				{flavor}
			</option>
		{/each}
	</select>
</div>
