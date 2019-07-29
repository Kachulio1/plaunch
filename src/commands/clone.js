const {Command, flags} = require('@oclif/command')

class CloneCommand extends Command {
  async run() {
    const {flags} = this.parse(CloneCommand)
    const name = flags.name || 'Github'
    this.log(`hello ${name} from ./src/commands/hello.js`)
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
