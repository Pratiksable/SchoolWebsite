
import Heading2 from "@components/Heading2";
import Image from "next/image";
import Pagination from '@/app/ui/invoices/pagination';
import { EventData } from "@/constants/media";


const itemsPerPage = 12;

const EventPhotos = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    router.push(`/your-current-page-path?page=${page}`);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPhotos = EventData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <section className="my-6">
      <div className="max-w-screen-xl mx-auto container p-3">
        <div className="w-full mb-20">
          <Heading2 headingText={"Event Photos"} />
        </div>
        <div className="flex flex-wrap -m-2">
          {currentPhotos.map((imageUrl, index) => (
            <div key={index} className="p-2 w-full md:w-1/3">
              <Image
                alt={`gallery-image-${index}`}
                className="w-full h-60 lg:h-80 object-cover object-center block"
                src={imageUrl}
                width={500}
                height={300}
              />
            </div>
          ))}
        </div>
        {/* Pagination controls */}
        <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={50} />
      </div>
      </div>
    </section>
  );
};

export default EventPhotos;
