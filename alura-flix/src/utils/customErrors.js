export const errortypes = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "tooShort",
];

export const messages = {
    title: {
        valueMissing: "Title field cannot be empty.",
        tooShort: "Title must be at least 3 characters long",
    },
    category: {
        valueMissing: "Please select a category.",
    },
    photo: {
        valueMissing: "Photo field cannot be empty.",
        typeMismatch: "Please add a valid image URL.",
        tooShort: "Photo URL must be at least 3 characters long.",
    },
    link: {
        valueMissing: "Video field cannot be empty.",
        typeMismatch: "Please add a valid URL.",
        tooShort: "Video URL must be at least 3 characters long.",
    },
    description: {
        valueMissing: "Description field cannot be empty.",
        tooShort: "Description must be at least 10 characters long.",
    },
};
