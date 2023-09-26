import fs from "node:fs/promises"
import path from "node:path"
import child_process from "node:child_process"

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

for (let i = 0; i < 3; i++) {
  const workerProcess2 = child_process.spawn('node', [url, i.toString()]);

  workerProcess2.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
  });

  workerProcess2.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
  });

  workerProcess2.on('close', function (code) {
    console.log('子进程已退出，退出码 ' + code);
  });
}

