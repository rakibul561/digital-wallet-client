import img1 from '@/assets/images/img1.jpg'
import img2 from '@/assets/images/img2.jpg'
import img3 from '@/assets/images/img3.jpg'
import img4 from '@/assets/images/img4.jpg'
import img5 from '@/assets/images/img5.jpg'
import img6 from '@/assets/images/img6.jpg'
import img7 from '@/assets/images/img7.jpg'
import img8 from '@/assets/images/img8.jpg'

const PublicUser = () => {
  return (
    <div className='mb-20 mt-20'>
      <div>
        <h2 className="text-center text-4xl font-bold mb-8">
          <span className='text-primary'>Esay Pay</span> in Everyday Life
        </h2>
      </div>

      <section className="py-6 border-8 rounded-2xl">
        <div className="container flex flex-col justify-center p-4 mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
            
            {[
              img1, img8, img2, img3,
              img7, img4, img5, img6
            ].map((img, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg"
              >
                {/* Image zoom effect */}
                <img
                  className="object-cover w-full aspect-square transition-transform duration-500 ease-in-out group-hover:scale-110"
                  src={img}
                  alt={`Public user ${index + 1}`}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                  <img
                  className="object-cover w-full aspect-square transition-transform duration-500 ease-in-out group-hover:scale-125"
                  src={img}
                  alt={`Public user ${index + 1}`}
                />
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </div>
  );
};

export default PublicUser;
