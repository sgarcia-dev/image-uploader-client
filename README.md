
# Image Uploader Client
A basic image uploader client built using ReactJS. **Relies on the [Image Uploader Server](https://github.com/sgarcia-dev/image-uploader-server) built with Node/Express/Cloudinary Node SDK to work.**

Created because I couldn't find a drastically simplified, easy to use example on how to upload and view images uploaded to Cloudinary through NodeJS SDK, so I made one. The initial source code was the app built by [Jesse Heaslip](https://codeburst.io/@funador)'s [Simple Image Upload with React](https://codeburst.io/react-image-upload-with-kittens-cc96430eaece) article, but I removed and made changes where possible to remove things I found could be confusing to complete React & Node beginners.

# How to Run Locally
* Clone this repository as well as the [image-uploader-server](https://github.com/sgarcia-dev/image-uploader-server).
* Run both apps via `npm start`

# Helpful Articles that I used while creating this app (might help clear some questions)
* An explanation on what **multipart/form-data** is and how it works, the contentType of choice for fileUpload in HTTP,  https://stackoverflow.com/questions/4526273/what-does-enctype-multipart-form-data-mean
* Explains how to send multipart form data with jQuery, useful to understand what's going on without React, https://stackoverflow.com/questions/5392344/sending-multipart-formdata-with-jquery-ajax
* Mozilla Developer Network's documentation on FormData, the standard to send multipart form data, https://developer.mozilla.org/en-US/docs/Web/API/FormData
* How to load files from React forms into Form Data, https://stackoverflow.com/questions/47168659/how-to-send-a-multipart-form-data-from-react-js-with-an-image
* The wonderful foundation for this app, [Jesse Heaslip](https://codeburst.io/@funador)'s [Simple Image Upload with React](https://codeburst.io/react-image-upload-with-kittens-cc96430eaece) article.
