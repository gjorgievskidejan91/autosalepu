import EditCarForm from "@/components/dashboard/EditCarForm";

const page = ({ params }) => {
  const { id } = params;

  return (
    <div>
      <div className="text-h2">Edit Car</div>
      <EditCarForm id={id} />
    </div>
  );
};

export default page;
