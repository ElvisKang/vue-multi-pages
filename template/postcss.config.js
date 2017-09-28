module.exports = {
  plugins: {
    'postcss-import': {
      path: [ "src/assets/css" ]
    },
    'postcss-cssnext':{
      'browsers':'ios >= 7,android >= 4'
    },
    'postcss-adaptive':{
      autoRem:true
    },
  }
}