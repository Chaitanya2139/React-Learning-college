import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-white shadow-sm border-b-4 border-yellow-400'>
      {/* Top Row */}
      <div className='flex items-center justify-between px-6 py-3'>
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img 
            src="https://www.cibil.com/official-partners/_jcr_content/root/contentcontainer/pagesection/columnrow/image.coreimg.svg/1670428891123/cibil-logo-lt.svg" 
            alt="CIBIL Logo" 
            className='h-12'
          />
        </Link>

        {/* Center - BUSINESS/PERSONAL tabs */}
        <div className='flex gap-8 ml-8'>
          <Link to="/business" className="text-sm font-medium text-gray-700 hover:text-gray-900 uppercase">
            BUSINESS
          </Link>
          <Link to="/personal" className="text-sm font-medium text-gray-700 hover:text-gray-900 uppercase">
            PERSONAL
          </Link>
        </div>

        {/* Right - NEW USER / EXISTING USER buttons */}
        <div className='flex gap-4 ml-auto items-center'>
          <Link 
            to="/newUser" 
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full text-sm uppercase"
          >
            NEW USER
          </Link>
          <Link 
            to="/existingUser" 
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full text-sm uppercase"
          >
            EXISTING USER
          </Link>
          <span className="text-sm text-gray-600 ml-2">ENGLISH</span>
        </div>
      </div>

      {/* Bottom Row - Navigation Links */}
      <div className='border-t border-gray-200'>
        <nav className='flex items-center gap-8 px-40 py-3'>
          <Link to='/productServices' className="text-sm text-gray-700 hover:text-gray-900">
            Products & Services
          </Link>
          <Link to='/knowledgeCenter' className="text-sm text-gray-700 hover:text-gray-900">
            Knowledge Center
          </Link>
          <Link to='/consumerGrievance' className="text-sm text-gray-700 hover:text-gray-900">
            Consumer Grievance
          </Link>
          <Link to='/support' className="text-sm text-gray-700 hover:text-gray-900">
            Support
          </Link>
          <Link to='/about' className="text-sm text-gray-700 hover:text-gray-900">
            About
          </Link>
          <button className="text-gray-600 hover:text-gray-900">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
