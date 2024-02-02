import Button from "@components/Button";
import Notice from "./NoticeItem";
import styles from "./styles.module.css";
import { notices } from "@/constants/notice";

// set api url to make api calls
const apiURL = process.env.NEXT_PUBLIC_API_HOST;

const Notices = () => {
  //TODO: fetch notices form database
  

  return (
    <div className={`${styles.noticeList} grid gap-6 m-4`}>
      {notices.map((notice, index) => (
        <Notice
          key={index}
          category={notice.category}
          title={notice.title}
          date={notice.date}
          description={notice.description}
          downloadLink={apiURL + notice.downloadLink}
          detailsLink={notice.detailsLink}
        />
      ))}
      <div className="mx-auto w-fit">
        <Button text={"More &rarr;"} href={""} />
      </div>
    </div>
  );
};

export default Notices;
