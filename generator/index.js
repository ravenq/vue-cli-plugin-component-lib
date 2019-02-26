const camelCase = require('lodash.camelcase')
const upperFirst = require('lodash.upperfirst')
const kebabCase = require('lodash.kebabcase')
const endsWith = require('lodash.endswith')

module.exports = (api, opts, rootOptions) => {
  // delete files created by default.
  api.postProcessFiles(files => {
    for (const file in files) {
      if (/src\/main\.js$|src\/App\.vue$|src\/components\/HelloWorld\.vue$/.test(file)) {
        delete files[file]
      }
    }
  })

  const libNameCamelCase = upperFirst(camelCase(opts.libName))
  const libNameKebabCase = kebabCase(opts.libName)

  api.extendPackage({
    name: libNameKebabCase,
    main: `dist/${opts.libName}.umd.min.js`,
    scripts: {
      'serve': 'vue-cli-service serve ./example/main.js',
      'build:lib': 'vue-cli-service build --target lib ./src/index.js',
      'build:example': 'vue-cli-service build --dest example/dist ./example/main.js',
      'build': 'npm run build:lib && npm run build:example',
      'lint': 'vue-cli-service lint'
    }
  })

  if (opts.npm) {
    let repository = opts.repository
    if (endsWith(repository, '.git')) {
      repository = repository.substring(0, repository.length - 4)
    }
    api.extendPackage({
      private: false,
      description: opts.description,
      author: {
        name: opts.author,
        'e-mail': opts.email
      },
      license: opts.license,
      repository: {
        type: 'git',
        url: `git+${repository}.git`
      },
      bugs: {
        url: `${repository}issues`
      },
      homepage: repository,
    })
  }

  api.render({
    './example/components/ComponentLib.vue': './templates/example/components/ComponentLib.vue',
    './example/App.vue': './templates/example/App.vue',
    './example/main.js': './templates/example/main.js',
  }, {
    libNameCamelCase: libNameCamelCase
  })

  api.render({
    './src/index.js': './templates/src/index.js',
    './src/my-component.vue': `./templates/src/${opts.libName}.vue`,
  }, {
    libNameCamelCase: libNameCamelCase
  })

  if (opts.travis) {
    api.render({
      './.travis.yml': './templates/_travis.yml'
    })
  }
}