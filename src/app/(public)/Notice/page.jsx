import NoticesAndEvents from "@/components/public/HomeComponents/noticesAndEvents/Index";

export const metadata = {
  title: "Facilities - Markham College of Commerce",
  description:
    "Markham College of Commerce, Hazaribagh was established on 10th February 1974. It is one of the premier institutions established to impart & provide in the field of higher education for the deserving candidates and prove to be a milestone in the part of progress.",
};

const Notice = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-4 px-2">
        <NoticesAndEvents />
    </div>
  );
};

export default Notice;