import { useState } from 'react'
import './uploader.css'
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import Result from '../Result'

function Uploader() {

  const [image, setImage] = useState(null)
  const [fileName, setFileName] = useState("No selected file")
  const [flag, setFlag] = useState(false);
  return (!flag ?
    <main>
      <form
        onClick={(e) => { document.querySelector(".input-field").click() }}
        style={{ height: "auto", width: "fit-content" }}
      >
        <input type="file" accept='audio/*' className='input-field' hidden
          onChange={({ target: { files } }) => {
            files[0] && setFileName(files[0].name)
            if (files) {
              // setImage(URL.createObjectURL(files[0]))
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
        <span className='upload-content' style={{ cursor: "pointer" }}>

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
      <button style={{ padding: "7px 15px", marginTop: "20px", border: "2px dashed #1475cf ", background: "none", color: "white" }} onClick={() => { if (fileName.indexOf(".") != -1) { setFlag(true); } else { alert("Choose File") } }}>Classify Music - </button>

    </main>
    :
    <Result fileName={fileName} />
  )
}

export default Uploader