plaunch
=======

A simple CLI for improving your productivity 

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/plaunch.svg)](https://npmjs.org/package/plaunch)
[![CircleCI](https://circleci.com/gh/Kachulio1/plaunch/tree/master.svg?style=shield)](https://circleci.com/gh/Kachulio1/plaunch/tree/master)
[![Codecov](https://codecov.io/gh/Kachulio1/plaunch/branch/master/graph/badge.svg)](https://codecov.io/gh/Kachulio1/Kachulio1/plaunch)
[![Downloads/week](https://img.shields.io/npm/dw/plaunch.svg)](https://npmjs.org/package/plaunch)
[![License](https://img.shields.io/npm/l/plaunch.svg)](https://github.com/Kachulio1/plaunch/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @kachulio/plaunch
$ plaunch COMMAND
running command...
$ plaunch (-v|--version|version)
@kachulio/plaunch/1.0.0 darwin-x64 node-v12.6.0
$ plaunch --help [COMMAND]
USAGE
  $ plaunch COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`plaunch clone`](#plaunch-clone)
* [`plaunch help [COMMAND]`](#plaunch-help-command)

## `plaunch clone`

clones a repo to a specific location

```
USAGE
  $ plaunch clone

OPTIONS
  -n, --name=name  folder name to clone to.
  -u, --url=url    the repo url

DESCRIPTION
  plauch clone
```

_See code: [src/commands/clone.js](https://github.com/Kachulio1/plaunch/blob/v1.0.0/src/commands/clone.js)_

## `plaunch help [COMMAND]`

display help for plaunch

```
USAGE
  $ plaunch help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.0/src/commands/help.ts)_
<!-- commandsstop -->
