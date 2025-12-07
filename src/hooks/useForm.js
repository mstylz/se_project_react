import { useState, useCallback } from 'react';

export function useForm() {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({...values, [name]: value });
        setErrors({...errors, [name]: e.target.validationMessage });
        const form = e.target.closest('form');
        setIsValid(form ? form.checkValidity() : false);
    };

    const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
        setValues(newValues);
        setErrors(newErrors);
        setIsValid(newIsValid);
    }, []);

    return { values, handleChange, errors, isValid, resetForm, setValues, setIsValid };
}