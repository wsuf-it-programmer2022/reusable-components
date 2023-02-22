# React Reusable components

- counter
- dropdown
- searchfield

## To setup the project from scrach

```
 npm install -D prettier eslint eslint-config-prettier eslint-plugin-prettier;
 npm install -D react react-dom parcel;
```

```
npm install -D eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
```

for class properties:

```
npm i -D @babel/plugin-proposal-class-properties

```

create .babelrc:

```
{
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
```

# for typescript

```
npm install -D @types/react @types/react-dom
npx tsc --init
```

npx: execute npm binary packages from the npm repo
this generates the tsconfig.json file

- inside tsconfig.json the target should be es2021
- uncomment line: "jsx": "preserve"

## eslint for typescript

```
npm i -D eslint-import-resolver-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

inside package.json add ts and tsx to the lint script

Add the following to eslintrc, inside the extends section (BEFORE prettier. prettier must always be the last one)

```
'plugin:@typescript-eslint/recommended',
'plugin:@typescript-eslint/recommended-requiring-type-checking',

```

also add the following inside eslintrc so eslint knows where the tsconfig file is

```
  project: ['./tsconfig.json'],

```

this rule can be disabled:

```
'@typescript-eslint/no-empty-function' : 0
```

in the plugins, enable:

```
'@typescript-eslint',
```

in the settings (after react)

```
'import/parsers': {
  '@typescript-eslint/parser': ['.ts', '.tsx']
},
'import/resolver': {
  'typescript': {
    'alwaysTryTypes': true
  }
}
```

after this if you run npm run lint, you should see the linter reporting typescript related errors as well
