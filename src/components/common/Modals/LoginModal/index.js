import React from "react";
import LoginForm from "@/components/Forms/LoginForm";

const LoginModal = ({ closeModal }) => {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl lg:max-w-4xl md:max-w-2xl sm:max-w-6xl md:w-full w-full sm:w-full xs:w-full sm:my-8">
            <div className="close-icon text-right mt-2  px-2">
              <div className="flex justify-between align-center border-b-2">
                <h3
                  className="text-base font-medium leading-6 text-gray-900 text-start mb-1"
                  id="modal-title"
                >
                  Welcome to Property Web
                </h3>
                <i
                  className="ri-close-line text-lg cursor-pointer mb-1"
                  onClick={closeModal}
                ></i>
              </div>
            </div>
            <div className="flex h-96  w-full lg:space-x-4 xs:space-x-0 sm:space-x-0">
              <div className="hidden lg:block xs:block md:block sm:hidden md:w-3/5 lg:w-3/5 xl:w-3/5 bg-[#f7f7f7] p-2">
                <div className="max-w-lg mx-auto p-4">
                  <div className="relative">
                    <img
                      className="h-auto max-w-xs object-cover m-auto"
                      src="/images/loginModal.webp"
                      alt="login modal"
                    />
                  </div>
                  <p className="text-sm max-w-sm m-auto text-center mt-4">
                    View saved properties Keep search history across devices See
                    which properties you have contacted.
                  </p>
                </div>
              </div>
              <div className="w-full xs:w-full sm:w-full md:w-2/5 lg:w-2/5 xl:w-2/5 flex justify-center flex-col p-3 mx-[10px]">
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
