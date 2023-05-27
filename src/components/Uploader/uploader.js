import { useState } from 'react'
import './uploader.css'
import { MdCloudUpload, MdDelete } from 'react-icons/md'

function Uploader() {

  const [image, setImage] = useState(null)
  const [fileName, setFileName] = useState("No selected file")
  return (
    <main>
      <form
      onClick={() => document.querySelector(".input-field").click()}
      >
        <input type="file" accept='audio/*' className='input-field' hidden 
        onChange={({ target: {files}}) => {
          files[0] && setFileName(files[0].name)
          if(files){
            setImage(URL.createObjectURL(files[0]))
          }
        }}
         />

        {image ?
        <img src={image} width={100} height={100} alt={fileName} />
        : 
        <>
        <MdCloudUpload color='#1475cf' size={40} />
        <p>Browse Files to upload</p>
        </>
      }

      </form>

      <section className='uploaded-row'>
        <span className='upload-content'>
          
          <MdDelete
          size={40}
          onClick={() => {
            setFileName("No selected File")
            setImage(null)
          }}
           />
           {fileName} 
        </span>
      </section>

    </main>
  )
}

export default Uploader