const spdx = require('spdx-license-list/spdx-simple.json')
const licenses = spdx.map(name => ({
  name,
  value: name
}));

module.exports = [
  {
    type: 'input',
    name: 'libName',
    message: 'Enter your component lib name.',
    default: 'my-component'
  },
  {
    type: 'confirm',
    name: 'travis',
    message: 'Do you wish to install travis config?',
    default: true,
    group: 'CI/CD'
  },
  {
    when: answers => answers.travis,
    type: 'confirm',
    name: 'npm',
    message: 'Do you wish to deploy your lib to npm?',
    default: true,
    group: 'NPM'
  },
  {
    when: answers => answers.npm,
    type: 'input',
    name: 'author',
    message: 'Enter your npm acount name.',
    group: 'NPM'
  },
  {
    when: answers => answers.npm,
    type: 'input',
    name: 'email',
    message: 'Enter your email for npm acount.',
    group: 'NPM'
  },
  {
    when: answers => answers.npm,
    type: 'input',
    name: 'description',
    message: 'Enter description for your lib.',
    default: 'My component lib.',
    group: 'NPM'
  },
  {
    when: answers => answers.npm,
    type: 'input',
    name: 'repository',
    message: 'Enter repository for your lib.',
    group: 'NPM'
  },
  {
    when: answers => answers.npm,
    type: 'list',
    name: 'license',
    message: 'Choose a license:',
    choices: licenses,
    default: 'MIT',
    group: 'NPM'
  }
]