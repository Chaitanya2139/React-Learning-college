import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   
    <header className='p-4 bg-white shadow-md flex items-center'>
        <div>
            <Link to="/" className="mr-4 text-lg font-semibold text-gray-800 p-4">
                <img src="https://www.cibil.com/official-partners/_jcr_content/root/contentcontainer/pagesection/columnrow/image.coreimg.svg/1670428891123/cibil-logo-lt.svg" alt="CIBIL Logo" className='w-1/4'/>
            </Link>
        </div>

        <div className='nav-links flex flex-col w-full'>
            <div className='top_nav flex space-x-4 justify-between'>
                <div className='leftNav'>
                    <Link to="/personal" className="text-gray-600 hover:text-gray-800 p-4">Personal</Link>
                    <Link to="/business" className="text-gray-600 hover:text-gray-800 p-4">Business</Link>
                    

                </div>
                <div className='rightNav'>
                    <Link to="/newUser" className="text-gray-600 hover:text-gray-800 p-4">New User</Link>
                    <Link to="/existingUser" className="text-gray-600 hover:text-gray-800 p-4">Existing User</Link>
                </div>
            </div>
        </div>
        <div className='bottom_nav mt-auto'>
            <ul className='flex gap-4'>
                <li>
                    <Link to = '/productServices' className="text-gray-600 hover:text-gray-800 p-4">Product Services</Link>

                </li>
                <li>
                    <Link to='/knowledgeCenter' className="text-gray-600 hover:text-gray-800 p-4">Knowledge Center</Link>
                </li>
                <li>
                    <Link to = '/consumerGrievance' className="text-gray-600 hover:text-gray-800 p-4">Consumer Grievance</Link>
                </li>
                <li>
                    <Link to = '/support' className="text-gray-600 hover:text-gray-800 p-4">Support</Link>
                </li>
                    
            </ul>

        </div>
    </header>
    

  )
}

export default Header
