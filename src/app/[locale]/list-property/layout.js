import MainContainer from "@/components/layout/MainContainer";

export default function ManageListingLayout({ children }) {
  return (
    <>
      <div className="bg-transparent  fixed z-[3] left-0 right-0  w-full">
        <div className="container p-8">
          <nav className="bg-transparent  flex justify-between items-center w-full">
            <div className="text-white text-4xl font-semibold cursor-pointer">Property Web</div>
          </nav>
        </div>
      </div>
      <MainContainer>{children}</MainContainer>
    </>
  );
}
