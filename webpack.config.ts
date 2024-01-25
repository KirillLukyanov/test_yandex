import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
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
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: [
            new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
        ],
        devServer: {
            port: port ?? 3000,
            open: true,
        },
        devtool: isDev && 'inline-source-map',
    };
    return config
};