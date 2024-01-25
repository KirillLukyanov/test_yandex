import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

const enum ENV_MODES {
    DEVELOPMENT = 'development',
    PRODUCTION = 'production'
}
type EnvType = {
    mode: ENV_MODES,
    port: number
}

export default ({ mode, port }: EnvType) => {
  const isDev = mode === ENV_MODES.DEVELOPMENT;
  const config: webpack.Configuration & DevServerConfiguration = {
    mode: mode ?? ENV_MODES.DEVELOPMENT,
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                  localIdentName: isDev
                    ? '[path][local]__[hash:base64:5]'
                    : '[hash:base64:8]',
                },
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash:8].css',
        chunkFilename: '[name].[contenthash:8].css',
      }),
    ],
    optimization: {
      minimizer: [
        new CssMinimizerPlugin(),
      ],
    },
    devServer: {
      port: port ?? 3000,
      open: true,
    },
    devtool: isDev && 'inline-source-map',
  };
  return config;
};
