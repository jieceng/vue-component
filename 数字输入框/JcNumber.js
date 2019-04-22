/**
 * 组件：数字输入框组件
 * 作者：结城
 * 时间：2019-4-19
 */


Vue.component('JcNumber',{
	props: ['value','min','max','step'],
	template: `
		<div class="jc-number">
			<a href="#"
			:disabled="Val==Min"
			@click.prevent="sub()"
			>-</a>
			<input type="text"
				v-model="Val"
			>
			<a href="#"
			:disabled="Val==Max"
			@click.prevent="add()"
			>+</a>
		</div>	
	`,
	data(){
		return {
			Val: this.value,
			Min: this.min || 0,
			Max: this.max || 10,
			Step: this.step|| 1
		}	
	},
	methods: {
		//减少
		sub(){
			this.Val -= this.Step;
		},
		//增加
		add(){
			this.Val += this.Step;
		}
	},
	updated(){
		this.$emit('input',this.Val)//发送数据给父组件
	},
	watch:{
		Val (newVal, oldVal){
			if(newVal>=this.Max)  this.Val = this.Max;
			if(newVal<=this.Min)  this.Val = this.Min;
			if(/\D/.test(newVal)) this.Val = oldVal;
		}
	}
})