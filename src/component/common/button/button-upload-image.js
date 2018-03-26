
import React from "react";
import { compose, withHandlers, withState } from "recompose";
import { ButtonUploadImageContainer } from '../../../theme/common/button/button-theme'
import ImageCompressor from 'image-compressor.js'


const enhance = compose(
  withState('file', 'handleFile', ''),
  withState('image', 'handleImage', ''),
  withHandlers({
    setImage: props => () => {
      props.getImage(props.image, props.file)
    }
  }),
  withHandlers(() => {
    return({
      previewImage: props => (fileImage) => {
          new Promise(function(resolve, reject) {
                  const reader = new FileReader()
                  reader.readAsDataURL(fileImage)
                  reader.onloadend = () => {
                    const base64data = reader.result
                    props.handleImage(base64data,() => {
                        resolve()
                    })
                  }
          }).then(() => {
            props.setImage()
          });
      },
      setImage: props => () => {
        
      }
    })
  }),
  withHandlers(() => {
    return({
      selectedImage: props => evt => {
          let newFiles = [];
          const ValidImageTypes = ["image/gif", "image/jpeg", "image/png"];
          for (const key in evt.target.files) {
            if (typeof evt.target.files[key] === "object") {
              evt.target.files["type"];
              ValidImageTypes.forEach(type => {
                if (evt.target.files[key]["type"] === type) {
                  newFiles.push(evt.target.files[key]);
                  const file = evt.target.files[key];
                  new ImageCompressor(file, {
                    quality: 0.6,
                    success(result) {
                      props.handleFile(result, () => {
                        props.previewImage(result)
                      })
                    }
                  });
                }
              });
            }
          }
          evt.target.value = null;
      },
      sendImage: props => () =>{}
    })
  })
)


const ButtonUploadImage = props => (
        <ButtonUploadImageContainer htmlFor='files'>
          <div>
            <input
              type="file"
              id="files"
              onChange={props.selectedImage}
              style={{
                display: "none"
              }}
            />
            <label htmlFor='files' className="fas fa-images" />
          </div>
      </ButtonUploadImageContainer>
)


export default enhance(ButtonUploadImage)


// handleChange(evt) {
//   let newFiles = [];
//   const ValidImageTypes = ["image/gif", "image/jpeg", "image/png"];
//   for (const key in evt.target.files) {
//     if (typeof evt.target.files[key] === "object") {
//       evt.target.files["type"];
//       ValidImageTypes.forEach(type => {
//         if (evt.target.files[key]["type"] === type) {
//           newFiles.push(evt.target.files[key]);
//           const file = evt.target.files[key];
//           new ImageCompressor(file, {
//             quality: 0,
//             success(result) {
//               console.log("compress image", result);
//               //newFiles.push(result.name);
//             }
//           });
//         }
//       });
//     }
//   }
//   evt.target.value = null;
//   this.setState({ files: newFiles, image: "" }, () =>
//     this.previewImage(this.state.files)
//   );
// }

// previewImage(files) {
//   let imagePreviewUrl = [];
//   new Promise(function(resolve, reject) {
//     files.forEach((file, index) => {
//       let fileType = file["type"];
//       let ValidImageTypes = ["image/gif", "image/jpeg", "image/png"];
//       ValidImageTypes.forEach(type => {
//         if (fileType === type) {
//           loadImage(
//             file,
//             canvas => {
//               const base64data = canvas.toDataURL("image/jpeg");
//               imagePreviewUrl.push(base64data);
//               if (files.length - 1 === index) {
//                 resolve();
//               }
//             },
//             {
//               canvas: true,
//               orientation: true
//             }
//           );
//         }
//       });
//     });
//   }).then(() => {
//     this.setState({ image: imagePreviewUrl });
//     this.props.SendFileImage(this.state.image, this.state.files);
//   });
// }