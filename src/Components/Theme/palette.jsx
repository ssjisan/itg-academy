import { alpha } from '@mui/material/styles';

export const grey = {
    100: '#F3F3F3',
    500: '#918EAF',
    900: '#060415',
};

export const primary = {
    light: '#FCEDFF',
    main: '#9C27B0',
    dark: '#831A95',
};
export const info = {
    light: '#F5FDFF',
    main: '#0DCAF0',
    dark: '#00ABCD',
};
export const success = {
    light: '#F4FFFA',
    main: '#198754',
    dark: '#0D7142',
};
export const error = {
    light: '#FFF6F7',
    main: '#DC3545',
    dark: '#C22635',
};
export const warning = {
    light: '#FFFCF3',
    main: '#FFC107',
    dark: '#E4AB00',
};


const base = {
    primary,
    grey,
    success,
    error
};


// ------------------------------------------------------------

export function palette() {
    return {
        ...base,
        text: {
            primary: grey[900],
            secondary: grey[500],
            disabled: alpha(grey[900], 0.24)
        },
    };
}