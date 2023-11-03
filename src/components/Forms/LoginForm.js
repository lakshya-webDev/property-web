"use client"
import React,{ useState,useEffect } from 'react';
import { auth, signInWithGoogle } from "@/utils/firebase";
import {Input} from "../common/Input"
import Button from "../common/Button"
import CustomSelect from "../common/CustomSelect"
import {redirect} from "next/navigation"
import { fetchCountriesData } from "@/utils/countriesData";
import { useDispatch, useSelector } from "react-redux";
import { saveUser, setLoading } from "@/Redux/Features/authSlice";
import OTPScreen from "@/components/OTPScreen";
import { useRouter } from 'next/navigation';
const LoginForm = () => {
  const router = useRouter();
    const [phone, setPhone] = useState(null);
    const [countryData, setCountryData] = useState(null);
    const [countryOptions, setCountryOptions] = useState([]);
    const dispatch = useDispatch();
    const {loading} = useSelector((state)=>state.authUser.loading)
    const [showOtp,setShowOTP]=useState(false);
    const [email , setEmail]= useState()
    const [view, setView] = useState("phone");
    // const userData = useSelector((state)=> state)   
    useEffect(() => {
      fetchCountriesData()
        .then((data) => {
          setCountryData(data.countries);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    const handleGoogleSignIn = async () => {
      dispatch(setLoading(true));
      await signInWithGoogle();
      
      // After successful Google sign-in, you can perform the user data dispatch here.
      const user = auth.currentUser; // Get the authenticated user
      console.log(user,"userDATA")
      if (user) {
        const userData = {
          uid: user.uid,
          accessToken: user.accessToken,
          userName: user.displayName,
          email: user.email,
          phone: user.phone,
          profile: user.photoURL,
          lastLogin: new Date().toISOString(),
        };
        dispatch(saveUser(userData));
        dispatch(setLoading(false));
        router.push("/en/list-property");
      }
    };
    useEffect(() => {
      const option = [];
      if (countryData) {
        countryData.map((country) => {
          option.push({
            label: `${country.dial_code} (${country.code})`,
            value: country.dial_code,
          });
        });
        setCountryOptions(option);
      } else {
        setCountryOptions([]);
      }
    }, [countryData]);
  
  const handleOtp =()=>{
    setShowOTP(true);
  }
  const handleView =()=>{
    if(view === "phone"){
      setView("email")
      setShowOTP(false);
    }else if(view ==="email"){
      setView("phone")
      setShowOTP(false);
    }
  }
  return (
    <>
              {showOtp ? (
                <OTPScreen sentTo={view === "phone" ? phone: email} view={view}/>
              ) : view === "phone" ? (
                <div className="mobile-login space-y-3 mb-2">
                  <div className="phone-input flex w-full items-end lg:space-x-2 sm:space-x-2">
                    <div className="flex-2 sm:flex-2 md:flex-2 relative">
                      {countryOptions.length && (
                        <CustomSelect
                          options={countryOptions}
                          defaultValue={countryOptions[228].label}
                        />
                      )}
                    </div>
                    <div className="flex-1 sm:flex-1 md:flex-1">
                      <Input
                        type="number"
                        onChange={(e) => setPhone(e.target.value)}
                        name="phone"
                        id="phone"
                        value={phone}
                        className="block font-medium py-[4px] px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 dark:placeholder-gray-400 placeholder-gray-400 dark:text-gray-600 dark:border-gray-600 dark:focus:border-primary-color focus:outline-none focus:ring-0 focus:border-primary-color"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                </div>
              ) : view === "email" ? (
                <div className="email-login space-y-3 mb-2">
                  <div className="email-input flex w-full flex-col space-y-5 items-end lg:space-x-2 sm:space-x-2">
                    <div className="w-full">
                      <Input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        id="email"
                        value={email}
                        className="block font-medium py-[4px] px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 dark:placeholder-gray-400 placeholder-gray-400 dark:text-gray-600 dark:border-gray-600 dark:focus:border-primary-color focus:outline-none focus:ring-0 focus:border-primary-color"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>
              ) : null}
              
              <Button
              variant="w-full bg-primary-color text-white rounded text-sm font-medium py-2 px-4"
              onClick={handleOtp}
            >
              {showOtp ? `Verify OTP` : `Continue`}
            </Button>
             
                <div className="separator-login relative"></div>
                <div className="flex flex-col space-y-2">
                  <Button variant="border border-primary-color py-2 px-4 w-full text-sm rounded text-primary-color font-medium" onClick={handleView}>
                    <div className="flex items-center text-start">
                      <img
                        src={view==='phone'?`/images/mail.svg`:`/images/phone.svg`}
                        width={20}
                        height={20}
                        className="mr-2"
                        alt="email"
                      />
                      Continue with {view==="phone" ? 'Email' :'Phone'}
                    </div>
                  </Button>
                  <Button
                    variant="border py-2 px-4 w-full text-sm rounded border-primary-color text-primary-color font-medium"
                    onClick={handleGoogleSignIn}
                  >
                    <div className="flex items-center text-start ">
                      <img
                        src="/images/google.svg"
                        width={20}
                        height={20}
                        className="mr-2"
                        alt="google"
                      />
                      {loading ? `Connecting...` : `Continue with Google`}
                    </div>
                  </Button>
                </div>
              </>
  )
}

export default LoginForm