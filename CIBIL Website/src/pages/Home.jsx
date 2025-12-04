import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
            <section className="banner py-20">
                <div className="container mx-auto px-4 text-center">
                    <div className="banner-content max-w-2xl mx-auto">
                        <div className="banner-text mb-6">
                            <h1 className="text-4xl font-bold text-gray-800 mb-4">Your <span className="text-[#00A6CA]">CIBIL</span>, in your hands. Stay informed, stay ahead.</h1>
                            <p className="text-lg text-gray-600">Your trusted partner for credit information and solutions.</p>
                        </div>
                        <div className="banner-box mt-6 p-6 bg-[#E6EDF1] flex items-center space-x-4">
                            <img src="src/assets/look-up-svgrepo-com.svg" alt="Look Up Icon" className="w-12 h-12" />
                            <p>Don’t worry! Checking your own CIBIL Score <span>won’t lower it.</span></p>
                        </div>
                        <div className="banner-blue-line mt-8 space-x-4 before:content-[''] before:block before:w-[100px] before:h-1 before:bg-[#99DBEA] before:mb-4 inline-block">
                            <p class="section-desc">Become credit ready today!</p>
                            <p class="web-cta">Already have an account?
                                <Link href="https://urldefense.com/v3/__https://myscore.cibil.com/CreditView/mobilelogin.page?enterprise=CIBIL__;!!GX53klZ1TQ0!2YjGoMjAf-IbS3NMuA6mqubBr4w9t_As62qAYjyoeCgIUHGe_mro7G1pD5RNfVTlDYzdnuVmrgcdj_ZFEFIBkA$">Log in</Link></p>
                        </div>
                        <div className="arrow-cta-container">
                            <Link className="arrow-cta mt-6 inline-block px-6 py-3 bg-[#FCD800] text-black font-semibold rounded-full hover:bg-[#008bb1]"
                                href="https://urldefense.com/v3/__https://myscore.cibil.com/CreditView/enrollShort_new.page?enterprise=CIBIL&amp;offer=FACRA__;!!GX53klZ1TQ0!2YjGoMjAf-IbS3NMuA6mqubBr4w9t_As62qAYjyoeCgIUHGe_mro7G1pD5RNfVTlDYzdnuVmrgcdj_ZiN8HG_w$&quot;" >
                            Get your free CIBIL Score &amp; Report
                            <span className="arrow-icon">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section >
    </>
  )
}

export default Home
