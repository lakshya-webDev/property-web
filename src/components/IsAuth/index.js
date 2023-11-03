"use client"
import { redirect } from 'next/navigation';
import { sessionStatus } from "@/utils/constants";

export const withAuthRoute = (Component) => {
    return function WithAuthRoute(props) {  
    const {locale} = props.params
    const auth = sessionStatus;
    if (!auth) {
        redirect(`/${locale}/login`);
    }

    return <Component {...props} />;
  };
};
