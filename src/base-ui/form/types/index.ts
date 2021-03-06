type IFormType = "input" | "password" | "select" | "datepicker"

export interface IFormItem {
  field?: string
	type: IFormType
	label: string
	rules?: any[]
	placeholder?: any,
  // 针对select的属性
  options?: any[]
  // 针对特殊的属性
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  itemStyle?: any
  colLayout?: any
}
