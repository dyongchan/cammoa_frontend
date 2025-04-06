import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  { ignores: ['dist'] }, //검사에서 제외할 폴더
  {
    files: ['**/*.{js,jsx}'], //설정 적용할 파일 패턴
    languageOptions: {
      ecmaVersion: 2020, //ECMAScript 2020 문법까지 허용
      globals: globals.browser, //브라우저 환경의 전역 객체 사용 가능
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: 'detect' } },
    plugins: {
      //사용할 ESLint 플러그인을 등록
      react,
      'react-hooks': reactHooks, //리액트 훅 사용 시 규칙
      'react-refresh': reactRefresh,
      prettier: prettierPlugin,
    },
    rules: {
      ...js.configs.recommended.rules, //기본 자바스크립트 규칙
      ...react.configs.recommended.rules, //eslint-plugin-react가 제공하는 React 관련 추천 룰셋
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'prettier/prettier': 'error', //Prettier 규칙 위반 시 ESLint 오류로 표시
    },
  },
];
