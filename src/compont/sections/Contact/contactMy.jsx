
import ContactModel from './model'


function Contact(){

 
    return(
        <div className="Contact  ">
            <div className="left">
                <form
                action="https://formsubmit.co/lamaaljuaid511@gmail.com" method="POST"  className="fs-form" >
      <div className="fs-field">
        <label className="fs-label" htmlFor="name">
          Your Name
        </label>
        <input className="fs-input" id="name" name="name" required />
      </div>
      <div className="fs-field">
        <label className="fs-label" htmlFor="email">
          Email
        </label>
        <input className="fs-input" id="email" name="email" required />
        <p className="fs-description">
          This will help me respond to your query via an email.
        </p>
      </div>
      <div className="fs-field">
        <label className="fs-label" htmlFor="message">
          Message
        </label>
        <textarea
          className="fs-textarea"
          id="message"
          name="message"
          required
        />
       
      </div>
      <div className="fs-button-group text-black">
        <button className="fs-button text-black w-[100px] h-[40px] flex justify-center items-center gap-3 bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-[5px] text-sm font-medium hover:bg-slate-100 transition duration-300" type="submit">
            
          Submit
        </button>
      </div>
    </form>
            </div>



              <div className="right">
                    <ContactModel />
            </div>
        </div>
    )
}

export default Contact