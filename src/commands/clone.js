const {Command, flags} = require('@oclif/command')

class CloneCommand extends Command {
  async run() {
    let {
      flags: {name, url},
    } = this.parse(CloneCommand)
    if (!name) {
      this.warn('uh oh! you did not provide a folder name')
      name = 'Github'
    }
    this.log(`the ${name} ${url}`)
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
