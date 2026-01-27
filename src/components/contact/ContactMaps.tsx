export default function ContactMaps() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Get In Touch</h3>
          <p className="text-gray-600 dark:text-gray-400">
            We are here to provide you with comprehensive information and support regarding newborn screening. 
            Your feedback, questions, and concerns are important to us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* First Map */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <div className="w-full h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.6624217183214!2d121.1513532!3d14.0808642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6f5b5ee668c3%3A0x96b7c0479c850247!2sDMMC%20Institute%20of%20Health%20Sciences!5e0!3m2!1sen!2sph!4v1622999030345!5m2!1sen!2sph" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h5 className="text-xl font-bold text-gray-900 dark:text-white">
                Newborn Screening Center Southern Luzon
              </h5>
            </div>
          </div>

          {/* Second Map */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <div className="w-full h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1151.5146668821208!2d122.26567393527066!3d13.88589599874935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a289fdde6be4e9%3A0xb7c841b60097d8c1!2sNewborn%20Screening%20Center%20-%20Southern%20Luzon%20Lopez%2C%20Quezon%20Satellite%20Office!5e0!3m2!1sen!2sph!4v1742890923068!5m2!1sen!2sph" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h5 className="text-xl font-bold text-gray-900 dark:text-white">
                Newborn Screening Center - Lopez Extension Office
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}