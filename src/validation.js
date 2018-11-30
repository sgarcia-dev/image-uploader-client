export function validateImageFiles(files) {
  const SUPPORTED_FILE_TYPES = ['image/png', 'image/jpeg', 'image/gif'];
  const MAX_IMAGE_SIZE = 150000;
  const errors = [];

  if (files.length > 3) {
    errors.push('Only 3 images can be uploaded at a time');
  }

  files.forEach(file => {
    if (SUPPORTED_FILE_TYPES.every(type => file.type !== type)) {
      errors.push(
        `${file.name}'s extension "${
          file.type
        }" is not a supported format. Please save a file thats in (${SUPPORTED_FILE_TYPES.toString()}) format`
      );
    }

    if (file.size > MAX_IMAGE_SIZE) {
      errors.push(`${file.name} is too large, please pick a file smaller than ${MAX_IMAGE_SIZE / 1000}KBs`);
    }
  });

  return errors;
}
