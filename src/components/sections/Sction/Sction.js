import './sction.css'

const Servies = (props) => {
  return (
    <div className='sction'>
      <div className='container'>
        <div className='row text-center py-5'>
          <h1 className='title-sction'>{props.title}</h1>
          <p className='paragraph-down'>{props.para}</p>
        </div>
      </div>
    </div>
  )
}

export default Servies