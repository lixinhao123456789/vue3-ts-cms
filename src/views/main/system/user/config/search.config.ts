import { IForm } from "@/base-ui/form";

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'id',
      type: "input",
      label: "ID",
      placeholder: "请输入ID"
    },
    {
      field: 'name',
      type: "input",
      label: "用户名",
      rules: [],
      placeholder: "请输入用户名"
    },
    {
      field: "password",
      type: "password",
      label: "密码",
      rules: [],
      placeholder: "请输入密码"
    },
    {
      field: 'sport',
      type: "select",
      label: "喜欢的运动",
      rules: [],
      placeholder: "请输入喜欢的运动",
      options: [
        { title: "篮球", value: "basketball" },
        { title: "足球", value: "basketball" }
      ]
    },
    {
      field: 'createTime',
      type: "datepicker",
      label: "时间",
      otherOptions: {
        startPlaceholder: "开始时间",
        endPlaceholder: "开始时间",
        type: "daterange"
      }
    }
  ],
  itemStyle: {
    padding: "10px 40px"
  },
  // colLayout: {
  //   span: 12
  // },
  labelWidth: "120px"
}
