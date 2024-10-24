export default class Validator {
    static required(value) {
        return value !== undefined && value !== null && value.trim() !== '';
    }

    static minLength(value, length) {
        return value.length >= length;
    }

    static maxLength(value, length) {
        return value.length <= length;
    }

    static email(value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    }

    static passwordStrength(value) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        return passwordRegex.test(value);
    }

    static numeric(value) {
        return !isNaN(value);
    }
    static matches(value,regex) {
        return regex.test(value);
    }

}
