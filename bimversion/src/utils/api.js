const host = 'https://www.easy-mock.com/mock/5cc2b8eee9b5fb48196764d5/ht';
/*const local = 'http://localhost:10000/inquiry';*/
/*const local = 'api.glodon.com/inquiry';*/
const local = 'http://localhost:10000/inquiry'
export default {
  // 版本号
  ver: 'v1.0.0',
  // 错误提示
  msg: '网络故障，请重试',
  // 登录npm
  login: `${host}/login`,
  // 个人信息
  profile: `${host}/profile`,
  // 用户密码
  password: `${host}/password`,
  // 用户头像
  avatar: `${host}/avatar`,
  // 设备汇总
  chartDevice: `${host}/chartDevice`,
  // 实时车辆
  chartOnline: `${host}/chartOnline`,
  // 热力地图
  mapHot: `${host}/mapHot`,
  // 管理员列表
  listMember: `${host}/listMember`,
  // 角色列表
  listRole: `${host}/listRole`,
  // 请求大屏
  // 建筑行业产值
  paomap: `${local}/archValue`,
  // 飞线图
  flyline: `${local}/flyline`,
  // 柱状图
  loca: `${local}/loca`,
  // 热力图
  heatmap: `${local}/info_overview`,
  // 企业分析
  capanalysis: `${local}/capanalysis`,
  // 两房分析
  house: `${local}/house`,
  // 从业人员分析
  employee: `${local}/employee`,
  // 文件上传功能
  fileUpload: `${host}/fileUpload`,
  fileDynamic: `${local}/dynamic`
};
