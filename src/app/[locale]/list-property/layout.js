import MainContainer from "@/components/layout/MainContainer";

export default function ManageListingLayout({ children }) {
  return (
    <>
      <div className="bg-white navbar-fixed  fixed z-[3] left-0 right-0  w-full shadow-md" id="navbar-fixed">
        <div className="container p-6">
          <nav className="bg-transparent  flex justify-between items-center w-full">
            <div className="text-primary-color text-3xl font-semibold cursor-pointer">Property Web</div>
          </nav>
        </div>
      </div>
      <MainContainer>{children}</MainContainer>
    </>
  );
}
