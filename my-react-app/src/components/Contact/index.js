import './index.scss'

let useRef;

const Contact = () => {
    const refForm = useRef
    const sendEmail = (e) => {
        e.preventDefault()

        
    }

    return (
        <>
        <center><h1>Contact Me</h1>
        <h3>Get in touch!</h3>
        <p>
            I'd love to hear from you, you attractive person you.

        </p>
        <p>samira.borghei@hotmail.com</p></center>
        <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
                <ul>
                    <li className="half">
                        <input type="text" name="name" placeholder="Name" required />

                    </li>
                    <li className="half">
                        <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required/>

                    </li>
                    <li>
                        <input placeholder="Subject" type="text" name="subject" required />
                    </li>
                    <li>
                        <textarea
                        placeholder="Message"
                        name="message"
                        required></textarea>
                    </li>
                    <li>
                        <input type="submit" className="flat-button" value="SEND"/>
                    </li>
                </ul>
            </form>
            
        </div>
        </>
    )
}

export default Contact