module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        // targets: {
        //   browsers: [
        //     '>1%',
        //     'last 1 versions',
        //     'Firefox ESR',
        //     'not ie < 9',
        //   ]
        // },
        // targets: {
        //   "chrome": "58",
        // },
        targets: {
          node: '5',
        },
        useBuiltIns: 'usage',
        // debug: true
      }
    ],
    "@babel/preset-react"
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: false,
        helpers: false,
        regenerator: true,
        useESModules: false
      }
    ],
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true
      }
    ],
    [
      'import',
      {
        libraryName: 'antd',
        style: 'css',
      }
    ]
  ]
}