// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://diegoal1811.github.io/',
	base: 'diegos-backpack',
	integrations: [
		starlight({
			title: 'Mis Notas',
			social: {
				github: 'https://github.com/diegoal1811/',
			},
			sidebar: [
				{
					label: 'Sistemas embebidos',
					autogenerate: { directory: 'sistemas-embebidos' },
				},
				{
					label: 'Sistemas inteligentes',
					autogenerate: { directory: 'sistemas-inteligentes' },
				},
				{
					label: 'Redes IV',
					autogenerate: { directory: 'redes-iv' },
				}
			],
		}),
	],
});
