<script>
	import '../app.css';
	import { locale } from '../i18n';
	import ThemeSwitcher from '$lib/ThemeSwitcher.svelte';

	$: if (locale) {
		if (typeof document !== 'undefined') {
			const i18n = $locale === 'en' ? 'en-US' : 'fr-FR'
			document.documentElement.lang = i18n
			document.getElementById('i18n-og')?.setAttribute('content', i18n)
		}
	}

</script>


<nav class="w-full h-10 py-10 px-2">
	<ul class="flex justify-end items-center">
		<li>
			<select bind:value={$locale} class="mx-6 bg-base font-bold text-xl focus:outline-none">
				<option value="fr" label="Français">
					🇫🇷 Français
				</option>
				<option value="en" label="English">
					🇬🇧 English
				</option>
			</select>
		</li>
		<li class="mx-6 font-bold text-xl">
			<ThemeSwitcher />
		</li>
	</ul>
</nav>

<slot />
