const fs = require('fs')
const execa = require('execa')
const emoji = require('node-emoji')
const chalk = require('chalk')

const eArrows = emoji.get('fast_forward')
const eRocket = emoji.get('rocket')

;(async () => {
  try {
    await execa('git', ['checkout', '--orphan', 'gh-pages'])
    console.log(`${eArrows} ${chalk.yellow('Building...')}`)
    // To build Storybook
    await execa('npm', ['run', 'storybook:build'])

    // Understand if it's dist or build folder
    const folderName = fs.existsSync('storybook-static')
      ? 'storybook-static'
      : ''
    await execa('git', ['--work-tree', folderName, 'add', '--all'])
    await execa('git', ['--work-tree', folderName, 'commit', '-m', 'gh-pages'])
    // // To build App
    // await execa('npm', ['run', 'build'])
    // await execa('npm', ['run', 'generate'])
    // // Understand if it's dist or build folder
    // const folderName = fs.existsSync('dist') ? 'dist' : 'build'
    // await execa('git', ['--work-tree', folderName, 'add', '--all'])
    // await execa('git', ['--work-tree', folderName, 'commit', '-m', 'gh-pages'])
    console.log(`${eArrows} ${chalk.yellow('Pushing...')}`)
    await execa('git', ['push', 'origin', 'HEAD:gh-pages', '--force'])
    await execa('rm', ['-r', folderName])
    await execa('git', ['checkout', '-f', 'master'])
    await execa('git', ['branch', '-D', 'gh-pages'])
    console.log(`${eRocket} ${chalk.green('Successfully deployed')} ${eRocket}`)
  } catch (e) {
    console.log(e.message)
    process.exit(1)
  }
})()
