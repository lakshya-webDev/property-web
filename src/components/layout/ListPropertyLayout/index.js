import React, { useEffect } from 'react'

const ListPropertyLayout = ({children,title,subtitle}) => {

  useEffect(() => {
    // Get the Navbar element by its id
    const navbar = document.getElementById("navbar-fixed");

    const navbarHeight = navbar ? navbar.clientHeight : 0;
    const main = document.getElementById("property-stepsMain");
    if (main) {
      main.style.marginTop = `${navbarHeight}px`;
      main.style.zIndex = 2;
      // main.style.marginBottom=`${footerHeight}px`
    }
  }, []);
  return (
    <div className='list-property container  py-5 flex flex-col items-center mx-auto' id="property-stepsMain">
      <div className='page-header font-medium text-center p-3'>
        <h2 className='lg:text-3xl text-lg mb-1 xs:text-md sm:text-lg'>{title}</h2>
        <p className='text-sm text-gray-500'>{subtitle}</p>
      </div>
        {children}
    </div>
  )
}

export default ListPropertyLayout