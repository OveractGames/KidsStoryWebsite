import { defineConfig } from 'vite';
import fs from 'fs';

export default defineConfig({
    base: './',
    build: {
        rollupOptions: {
            output: {
                // nothing extra here unless needed
            }
        }
    },
    plugins: [
        {
            name: 'force-relative-paths',
            closeBundle() {
                const filePath = './dist/index.html';
                const html = fs.readFileSync(filePath, 'utf-8')
                    .replace(/(src|href)="\/assets\//g, '$1="./assets/')
                fs.writeFileSync(filePath, html);
                console.log('✔ Rewrote /assets/ to ./assets/ in index.html');
            }
        }
    ]
});
