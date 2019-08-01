const {Command, flags} = require('@oclif/command')
const path = require('path')
const findUp = require('find-up')
const execa = require('execa')
const Listr = require('listr')
let directory = ''
const tasks = new Listr([
  {
    title: 'Finding Directory',
    task: () => {
      return new Listr([
        {
          title: 'Searching...',
          task: async ({name}) => {
            dir = await findUp(
              async directory => {
                const hasDir = await findUp.exists(path.join(directory, name))
                return hasDir && directory
              },
              {type: 'directory'}
            )
            if (!dir) {
              throw new Error('could not find this directory: ' + name)
            }
          },
        },
      ])
    },
  },

  {
    title: 'cloning repo',
    task: async ({name, url, command}) => {
      if (!url) {
        throw new Error('No url provided')
      }

      try {
        // the regex matches the name of the repo
        directory += name + '/' + url.match(/([^/]+)\.git/g)[0].split('.')[0]
        await execa('git', ['clone', `${url}`, `${directory}`])
      } catch (error) {
        if (
          error.stderr.includes('already exists and is not an empty directory')
        ) {
          command.error('The repo exist')
        }
      }
    },
  },
])

class CloneCommand extends Command {
  async run() {
    let {
      flags: {name, url},
    } = this.parse(CloneCommand)
    let command = this

    tasks.run({name, url, command}).catch(err => {})
  }
}

CloneCommand.description = `clones a repo to a specific location
   plauch clone 
`

CloneCommand.flags = {
  name: flags.string({char: 'n', description: 'folder name to clone to.'}),

  // TODO: do something use the name of the repo only
  url: flags.string({char: 'u', description: 'the repo url'}),
}

module.exports = CloneCommand
