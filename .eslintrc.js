module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // これを追加
  ],
  plugins: ['@typescript-eslint', 'prettier'], // prettier を追加
  rules: {
    'prettier/prettier': 'error', // Prettierのエラーを ESLintエラーにする
  },
};
