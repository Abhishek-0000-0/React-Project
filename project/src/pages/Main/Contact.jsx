import { useEffect } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Card from "../../components/Cards/Contact"

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact | EduPath";
  }, []);
  const contactCards = [
    {
      icon: <FaEnvelope className="text-blue-600 text-3xl" />,
      title: "Email Us",
      info: "info@edupath.com",
      description: "Send us your questions and we'll get back to you within 24 hours",
      link: "mailto:231205abhi@gmail.com?subject=Hello&body=This is the email body",
      linkText: "Send Email",
    },
    {
      icon: <FaPhone className="text-green-600 text-3xl" />,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      description: "Our support team is available Monday-Friday, 9am-5pm",
      link: "tel:+15551234567",
      linkText: "Call Now",
    },
    {
      icon: <FaMapMarkerAlt className="text-red-600 text-3xl" />,
      title: "Visit Us",
      info: "123 Education Street, Boston, MA 02115",
      description: "Schedule an appointment to visit our campus",
      link: "https://maps.google.com",
      linkText: "Get Directions",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[url(/Images/contact.jpg)] bg-cover bg-center w-full relative bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            We're here to help and answer any questions you might have
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactCards.map((card, idx) => (
            <Card key={idx} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};



export default ContactPage;
