const DashboardLayout = ({ children }) => {
  return (
    <>
      <h1 className="bg-blue-300 text-white p-4 text-center">nav bar</h1>
      {children}
      <h1 className="bg-blue-300 text-white p-4 text-center">footer</h1>
    </>
  );
};

export default DashboardLayout;
