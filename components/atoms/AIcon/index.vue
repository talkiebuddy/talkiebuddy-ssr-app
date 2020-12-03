<template>
	<div
		:class="[
			'a-icon',
			`a-icon--${color}`,
			`a-icon--${size}`,
			`a-icon--${name}`,
		]"
		v-html="svg"
	></div>
</template>

<script>
export default {
	name: 'AIcon',
	props: {
		name: {
			required: true,
			type: String
		},
		color: {
			type: String,
			default: 'black'
		},
		size: {
			type: String,
			validator(value) {
				return ['x-small', 'small', 'medium', 'large'].indexOf(value) !== -1
			},
			default: 'small'
		},
	},
	data() {
		return {
			svg: null
		}
	},
	created() {
		this.loadSvg()
	},
	computed: {
		svgLoader() {
			return () => import(/* webpackChunkName: "Icon" */ `!html-loader!./icons/${this.name}.svg`)
		}
	},
	watch: {
		name() {
			this.loadSvg()
		}
	},
	methods: {
		async loadSvg() {
			try {
				let component = await this.svgLoader()
				this.svg = component.default
			} catch (e) {
				throw new Error(`Could not load icon svg - ${e}`)
			}
		}
	}
}
</script>
