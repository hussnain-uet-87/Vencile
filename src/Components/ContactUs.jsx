import React from 'react'

const ContactUs = () => {
  return (
    <section id='contact' className="bg-[#e8f2e9] text-[#45553d] py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* Left - Contact Info + Map */}
        <div className="space-y-6">
          <div className='bg-white px-12 py-8 rounded-xl shadow-lg' > 
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact US</h2>
            <ul className="space-y-3 text-sm md:text-base">
              <li><span className="font-semibold">Email:</span> support@vencile.com</li>
              <li><span className="font-semibold">Phone:</span> +92 311 1234567</li>
              <li><span className="font-semibold">Location:</span> 7 Office, Floor 3, Prime Building, Mall Road ,Lahore</li>
            </ul>
          </div>

          {/* Google Map */}
          <div className="rounded-xl shadow-xl overflow-hidden shadow-md h-[250px] md:h-[300px]">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.897255189083!2d-74.00601508459384!3d40.71277577933086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjAuMCJX!5e0!3m2!1sen!2sus!4v1681234567890!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
            ></iframe>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="bg-white px-8 py-8 shadow-lg rounded-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Get in Touch</h2>
          <p className="text-sm md:text-base mb-6">
            Have questions or feedback? Fill out the form and we’ll get back to you shortly.
          </p>

          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full p-2.5 border rounded-md bg-white outline-none text-sm focus:ring-2 focus:ring-[#45553d]"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full p-2.5 border rounded-md bg-white outline-none text-sm focus:ring-2 focus:ring-[#45553d]"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Message</label>
              <textarea
                rows="4"
                className="w-full p-2.5 border rounded-md bg-white outline-none text-sm focus:ring-2 focus:ring-[#45553d]"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full md:w-auto bg-[#45553d] text-[#e8f2e9] px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
