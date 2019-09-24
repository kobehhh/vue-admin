const userColumns = [
  {
    title: "ID",
    key: "id",
    width: 80,
    align:"center"
  },
  {
    title: "登录账号",
    key: "loginName",
    minWidth: 120,
    sortable: true,
    align:"center"
  },
  {
    title: "姓名",
    key: "userName",
    minWidth: 160,
    sortable: true,
    align:"center"
  },
  {
    title: "手机号",
    key: "mobile",
    width: 120,
    align:"center"
  },
  {
    title: "邮箱",
    key: "email",
    minWidth: 160,
    sortable: true,
    align:"center"
  },
  {
    title: "角色",
    key: "roleName",
    minWidth: 130,
    align:"center",
  },
  {
    title: "状态",
    key: "status",
    minWidth: 80,
    align:"center",
    render: (h, params) => {
      return h("span", ["启用", "禁用"][params.row.status]);
    }
  },
  {
    title: "机构",
    key: "groupName",
    minWidth: 140,
    align:"center"
  },
  {
    title: "创建时间",
    key: "createDate",
    width: 160,
    align:"center"
  },
  {
    title: "操作",
    slot: "action",
    fixed: "right",
    width: 200,
    align:"center",
  }
]

const companyColumns = [
  {
    type: 'selection',
    minWidth: 80
  },
  {
    title: 'ID',
    key: 'id',
    minWidth: 80
  },
  {
    title: '公司名称',
    key: 'name',
    sortable: true,
    ellipsis: true,
    minWidth: 100
  },
  {
    title: '公司代码',
    key: 'companyId',
    sortable: true,
    minWidth: 100
  },
  {
    title: '公司类型',
    key: 'themeText',
    sortable: true,
    minWidth: 130
  },
  {
    title: '备注',
    key: 'remark',
    sortable: true,
    minWidth: 100
  },
  {
    title: '状态',
    key: 'statusText',
    minWidth: 100
  },
  {
    title: '创建人',
    key: 'createUser',
    minWidth: 100
  },
  {
    title: '创建人IP',
    key: 'createIp',
    minWidth: 100
  },
  {
    title: '创建时间',
    key: 'createDate',
    minWidth: 100
  },
  {
    title: '更新人',
    key: 'updateUser',
    minWidth: 100
  },
  {
    title: '更新人IP',
    key: 'updateIp',
    minWidth: 100
  },
  {
    title: '创建人',
    key: 'createUser',
    minWidth: 100
  },
  {
    title: '更新时间',
    key: 'updateDate',
    minWidth: 100
  },
  {
    title: '删除标识（0[正常],1[删除]）',
    minWidth: 200
  },
  {
    title: '操作',
    fixed: 'right',
    slot: 'action',
    minWidth: 120,
    // render: (h, params) => {
    //   return h('div', [
    //     h('Button', {
    //       props: {
    //         size: 'small'
    //       },
    //       style: {

    //       },
    //       on: {
    //         click: () => {
    //           tableEdit(params.row)
    //         }
    //       }
    //     }, '修改'),
    //     h('Button', {
    //       props: {
    //         size: 'small'
    //       },
    //       style: {

    //       },
    //       on: {
    //         click: () => {
    //           tableDelete(params.index)
    //         }
    //       }
    //     }, "删除")
    //   ])
    // }
  }
]
export {userColumns,companyColumns}