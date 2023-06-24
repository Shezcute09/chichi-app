import './dialogue.scss';



const Dialogue = ({yes, no}) => {


  return (
    <div className='overlay'>
        <div className="dialogue">
            <div className="dialogue_content">
                <h2 className="dialogue_title">Delete a blog?</h2>
                <p className="dialogue_description">Are you sure you want to delete this blog</p>
            </div>
            <hr />
            <div className="dialogue_footer">
                <button className="dialogue_cancel" onClick={() => no()}>No</button>
                <button className="dialogue_confirm" onClick={()=> yes()}>Yes, delete Blog</button>
            </div>
        </div>

 

              
    </div>
  )
}

export default Dialogue