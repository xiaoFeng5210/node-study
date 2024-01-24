import fs from "node:fs/promises"
import path from "node:path"
import child_process from "node:child_process"
import { stdout } from "node:process";

const url = path.resolve(__dirname, '../../assets/support.js')

// for (let i = 0; i < 3; i++) {
//   const workerProcess = child_process.exec(`node ${url} ` + i, function (error, stdout, stderr) {
//     if (error) {
//       console.log(error.stack)
//       console.log('Error code: ' + error.code)
//       console.log('Signal received: ' + error.signal)
//     }
//     console.log('stdout: ' + stdout)
//     console.log('stderr: ' + stderr)
//   })

//   workerProcess.on('exit', function (code) {
//     console.log('子进程已退出，退出码 ' + code)
//   })
// }

// for (let i = 0; i < 3; i++) {
//   const workerProcess2 = child_process.spawn('node', [url, i.toString()]);

//   workerProcess2.stdout.on('data', function (data) {
//     console.log('stdout: ' + data);
//   });

//   workerProcess2.stderr.on('data', function (data) {
//     console.log('stderr: ' + data);
//   });

//   workerProcess2.on('close', function (code) {
//     console.log('子进程已退出，退出码 ' + code);
//   });
// }

/**
 * Nodejs创建子进程共有7个API Sync同步API 不加是异步API

spawn  执行命令
exec   执行命令
execFile   执行可执行文件
fork   创建node子进程
execSync 执行命令 同步执行
execFileSync 执行可执行文件 同步执行
spawnSync 执行命令 同步执行
 */

// child_process.exec('node -v',{}, (err, stdout, stderr) => {
//   if (err) return
//   console.log(stdout.toString())
// })

child_process.execFile(path.resolve(__dirname, 'execFile.ts'), null, (err, stdout, stderr) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(stdout.toString())
})
