/**
 * 组件：评分星星
 * 作者： 结城
 * 时间： 2019-4-22
 */

Vue.component('jc-star',{
	props: {
		count: {
			type: Number,
			required: true
		},
		icon: {
			type: String,
			required: true
		},
		iconed: {
			type: String,
			required: true
		},
		value: {
			type: Number,
			default: 0
		}
	},
	template: `
		<div class="jc-star"
			@mouseleave="vValue=Value"
		>
			<span 
				v-for="p in count" 
				v-text="p<=vValue?iconed:icon"
				@mouseenter="goStar(p)"
				@click="confirmStar(p)"
			></span>
		</div>
	`,
	data(){
		return {
			Value: this.value,//需要传递给父组件的数据
			vValue: this.value,//需要展示的数据
		}
	},
	methods: {
		//hover星星
		goStar(p){
				this.vValue = p;
		},
		//确认
		confirmStar(p){
			this.Value = p;
			this.vValue = p;
			this.$emit('update:value',this.Value);//将数据发送到父组件
		}
	},
})