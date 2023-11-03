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
    <div className='list-property container  py-5 flex flex-col items-center' id="property-stepsMain">
      <div className='page-header font-medium text-center p-3'>
        <h2 className='text-3xl mb-2'>{title}</h2>
        <p>{subtitle}</p>
      </div>
        {children}
    </div>
  )
}

export default ListPropertyLayout