export const validateForm = async (formData) => {
    const errors = {};

    const trimmedFormData = {};
    for (const key in formData) {
        trimmedFormData[key] = formData[key] ? formData[key].toString().trim() : '';
    }

    // Validate title
    if (!trimmedFormData.title) {
        errors.title = 'Title is required.';
    } else if (trimmedFormData.title.length < 3) {
        errors.title = 'Title must be at least 3 characters long.';
    } else if (trimmedFormData.title.length > 200) {
        errors.title = 'Title cannot be longer than 200 characters.';
    }

    // Validate category
    if (!trimmedFormData.category) {
        errors.category = 'Category is required.';
    }

    // Validate photo URL
    if (!trimmedFormData.photo) {
        errors.photo = 'Photo URL is required.';
    } else if (!isPhotoURLValid(trimmedFormData.photo)) {
        errors.photo = 'Photo URL is not valid or the photo is not valid.';
    }

    // Validate video URL
    if (!trimmedFormData.link) {
        errors.link = 'Video URL is required.';
    } else if (!isVideoURLValid(trimmedFormData.link)) {
        errors.link = 'Video URL is not valid or the video is not valid.';
    }

    // Validate description
    if (!trimmedFormData.description) {
        errors.description = 'Description is required.';
    } else if (trimmedFormData.description.length < 10) {
        errors.description = 'Description must be at least 10 characters long.';
    } else if (trimmedFormData.description.length > 500) {
        errors.description = 'Description cannot be longer than 200 characters.';
    }

    return errors;
};

// Validate photo URL
const isPhotoURLValid = (url) => {
    const photoUrlPattern = /\.(jpg|jpeg|png|gif)$/i;
    return photoUrlPattern.test(url);
};

// Validate video URL
const isVideoURLValid = (url) => {
    const videoUrlPattern = /^https:\/\/www\.youtube\.com\/embed\/[a-zA-Z0-9_-]+\?si=[a-zA-Z0-9_-]+$/;
    return videoUrlPattern.test(url);
};
