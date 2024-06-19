const faqs = [
  { 
    title: "What is your return policy?", 
    description: "You can return any item within 30 days of purchase as long as it is in its original condition and packaging." 
  },
  { 
    title: "How long does shipping take?", 
    description: "Shipping times vary based on your location. Domestic shipping typically takes 5-7 business days, while international shipping can take 2-3 weeks." 
  },
  { 
    title: "Do you offer customer support?", 
    description: "Yes, our customer support team is available 24/7 to assist you with any inquiries or issues you may have. You can reach us via email, phone, or live chat." 
  },
  { 
    title: "Can I track my order?", 
    description: "Yes, once your order has shipped, you will receive a tracking number via email. You can use this number to track the status of your delivery on our website." 
  },
  { 
    title: "What payment methods do you accept?", 
    description: "We accept various payment methods including credit cards, debit cards, PayPal, and Apple Pay." 
  }
];


const FAQ = () => {
  return (
    <>
      <div className="landingPagePadx">
        <div className="text-center uppercase app-text-primary">FAQs</div>
        <h2 className="text-center">Questions & Anwers</h2>
        <div className="flex justify-center mt-2">
          <div className="text-center text-gray-600 max-w-[70%] md:max-w-[60%] lg:max-w-[40%]">Any other questions? Reach out on twitter or mail. You will get answers withing a few hours.</div>
        </div>
        <div className=" flex justify-center">
          <div className=" join join-vertical w-full py-5 md:max-w-[80%] lg:max-w-[70%]">
            {faqs.map((faq, index) => (
              <div key={index} className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  {faq.title}
                </div>
                <div className="collapse-content">
                  <p>{faq.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default FAQ