import fs from 'fs';
import path from 'path';

import cssnano from 'cssnano';
import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';
import { EleventyI18nPlugin } from '@11ty/eleventy';

export default function (eleventyConfig) {
  const isProduction = process.env.NODE_ENV === 'production';

  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: 'en',
    errorMode: 'allow-fallback',
  });

  eleventyConfig.addFilter('t', function (key) {
    const lang = this?.ctx?.lang?.code || 'en';
    const i18n = this?.ctx?.i18n || {};

    const keys = key.split('.');
    let value = i18n?.[lang];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  });

  eleventyConfig.addShortcode('asset', function (path) {
    const base = process.env.BASE_PATH || '';
    return `${base}/assets/${path}`;
  });

  const postcssPlugins = [tailwindcss(), ...(isProduction ? [cssnano({ preset: 'default' })] : [])];

  const processor = postcss(postcssPlugins);

  /* Hook para processar o CSS antes do build do Eleventy */
  eleventyConfig.on('eleventy.before', async () => {
    const tailwindInputPath = path.resolve('./src/assets/css/styles.css');
    const tailwindOutputPath = './_site/assets/css/styles.css';

    /* Lê o conteúdo do arquivo */
    const cssContent = fs.readFileSync(tailwindInputPath, 'utf8');
    const outputDir = path.dirname(tailwindOutputPath);

    /* Garante que o diretório de saída existe */
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    /* Processa o CSS com Tailwind v4 + PostCSS */
    const result = await processor.process(cssContent, {
      from: tailwindInputPath,
      to: tailwindOutputPath,
      map: isProduction ? false : { inline: true },
    });

    fs.writeFileSync(tailwindOutputPath, result.css);

    if (isProduction) {
      console.log('🚀 Tailwind v4: CSS Minificado para Produção.');
    }
  });

  eleventyConfig.addWatchTarget('./src/assets/css/');
  eleventyConfig.watchIgnores.add('./_site/assets/css/styles.css');

  eleventyConfig.addPassthroughCopy({ './src/assets/js': '/assets/js' });
  eleventyConfig.addPassthroughCopy({ './src/assets/icons': '/assets/icons' });
  eleventyConfig.addPassthroughCopy({ './src/assets/favicon.svg': '/favicon.svg' });

  const pathPrefix = isProduction ? '/tekuai.ca/' : '/';

  return {
    pathPrefix: pathPrefix,
    dir: {
      input: 'src',
      output: '_site',
    },
  };
}
