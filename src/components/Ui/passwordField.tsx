import React from 'react';
import { TextField } from '@mui/material';

interface Children {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    helperText: string;
    error?: boolean; // Optional, in case you want to show error state
}

export function PasswordField({ value, onChange, onBlur, helperText, error = false }: Children) {
    return (
        <TextField
            type="password"
            label="Password"
            name="password"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            helperText={helperText}
            error={error}
            fullWidth
            FormHelperTextProps={{
                style: { color: 'red' },
            }}
        />
    );
}


