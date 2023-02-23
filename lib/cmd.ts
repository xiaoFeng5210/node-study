import commandLineArgs from 'command-line-args';


// 配置我们的命令行参数
const optionDefinitions = [
  { name: 'title', alias: 't', type: String },
  { name: 'min', type: Number },
  { name: 'max', type: Number },
];
const options = commandLineArgs(optionDefinitions); // 获取命令行的输入

export default options
