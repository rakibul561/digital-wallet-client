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
    <div className='mb-20'>
        <div>
            <h2 className="text-center text-4xl font-bold mb-8"> EsayPaY in Everyday Life</h2>
        </div>
      <section className="py-6  border-8 rounded-2xl">
        <div className="container flex flex-col justify-center p-4 mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
            <img
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src={img1}
            />
              <img
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src={img8}
            />
            <img
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src={img2}
            />
            <img
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src={img3}
            />
              <img
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src={img7}
            />
            <img
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src={img4}
            />
            <img
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src={img5}
            />
            <img
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src={img6}
            />
          
          
        
          </div>
        </div>
      </section>
    </div>
  );
};

export default PublicUser;
