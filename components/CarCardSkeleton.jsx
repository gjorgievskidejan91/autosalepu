// components/CarCardSkeleton.js

const CarCardSkeleton = () => {
  return (
    <>
      <section className="px-4 py-6 dark:bg-slate-800 ">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
        </div>
      </section>
    </>
  );
};

export default CarCardSkeleton;

export const CardSkeleton = () => {
  return (
    <div className="relative dark:bg-slate-700 shadow-lg rounded-lg overflow-hidden animate-pulse">
      <div className="w-full h-48 bg-gray-300 dark:bg-gray-600 rounded-t-xl"></div>
      <div className="absolute top-2 right-2 bg-blue-300 dark:bg-blue-700 text-white px-3 py-1 rounded-bl-lg w-20 h-8"></div>

      <div className="p-6">
        <div className="flex justify-between items-baseline">
          <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/3"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/4"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/3"></div>
        </div>

        <div className="flex justify-between items-center mt-6">
          <div className="h-6 bg-green-300 dark:bg-green-700 rounded w-1/3"></div>
          <div className="h-10 bg-blue-300 dark:bg-blue-700 rounded w-20"></div>
        </div>
      </div>
    </div>
  );
};
