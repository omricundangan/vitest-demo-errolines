# Test Reproduction
This project was started by running `npm create vite@latest`, then `npx vitest init browser`, selecting Javascript, React, and playwright when prompted

1. `npm install`
2. `npm run test:browser`
3.  observe error output and reported lines
4. comment out lines 4-6 in `src/test/unit/performOp.test.js`
5. `npm run test:browser`
6. observe error output is now accurate
