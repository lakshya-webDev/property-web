
import LoginForm from "@/components/Forms/LoginForm";
import React from "react";

const page = () => {
  return (
    <section className="md:h-screen py-36 flex items-center relative overflow-hidden">
      <div className="min-h-screen bg-boarding-banner absolute bg-cover bg-fixed inset-0  z-1 bg-center bg-no-repeat"></div>
      <div
        className="fixed inset-0 bg-gradient-to-b from-transparent to-black opacity-70 z-2"
        id="particles-snow"
      ></div>
      <div className="container z-3">
        <div className="flex justify-center items-center  left-0  fixed right-0 top-0 bottom-0  z-3">
          <div className="w-3/5  p-8 text-white">
            <h2 className="text-3xl font-semibold mb-4">
              Looking for the right buyer?
            </h2>
            <h4 className="text-2xl font-semibold mb-4 p-2 px-4 bg-gradient-to-r from-purple-700 via-purple-600 to-transparent max-w-xl rounded-lg">
              Your Search Ends Here
            </h4>

            <div className="p-4 md:p-8 text-start">
              <div className="max-w-3xl mr-auto flex flex-col space-y-3">
                <div className="flex  items-center space-x-4">
                  <span className="bg-gradient-to-b from-purple-700 via-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
                    1
                  </span>
                  <p className="font-medium">
                    Login with your Email / Phone number
                  </p>
                </div>

                <div className="flex  items-center space-x-4">
                  <span className="bg-gradient-to-b from-purple-700 via-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
                    2
                  </span>
                  <p className="font-medium">Add property details</p>
                </div>

                <div className="flex  items-center space-x-4">
                  <span className="bg-gradient-to-b from-purple-700 via-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
                    3
                  </span>
                  <p className="font-medium">
                    Property activated in just 30 min
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/5  p-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
