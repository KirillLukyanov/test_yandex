import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonProps = {
    children?: ReactNode;
    label?: string;
    className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
