# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Test Reproduction
1. `npm install`
2. `npm run test:browser`
3.  observe error output and reported lines
4. comment out lines 4-6 in `src/test/unit/performOp.test.js`
5. `npm run test:browser`
6. observe error output is now accurate
