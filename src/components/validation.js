export const emailvalidate = {
    required: "Email is required",
    pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid email format"
    }
}
export const passwordvalidate = {
    required: "Password cannot be empty",
    pattern: {
        value: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
        message: "Must have at least 1 uppercase, 1 number, 1 special character "
    },
    minLength: {
        value: 8,
        message: "Minimum length required is 8",
    }

}

export const usernamevalidate = {
    required: "Username cannot be empty",
     pattern: {
        value: /^[A-Za-z0-9_]+$/,
        message: "Only letters, numbers and underscore allowed"
    },
     minLength: { value: 3, message: "Minlength is 3" }, 
     maxLength: { value: 15, message: "maxlength is 8" }
}
