import React from 'react'

export default function Footer() {
    return (
        <>
            <div style={{backgroundColor:'#060b26', color:'white', position:'relative', bottom:'0'}} className="footer mt-5">
                <div className="container p-4 row g-3">
                    <div className="menu py-2">
                        <ul className='flex'>
                            <li className='pr-5'>Home</li>
                            <li className='pr-5'>Templates</li>
                            <li className='pr-5'>About Us</li>
                            <li className='pr-5'>Contact Us</li>
                        </ul>
                    </div>
                    <div className="leftside col-md-4">
                        <p className='font-bold text-2xl'>INDIA</p>
                        <p className='font-medium py-3'>901, Olympia, NH4 Mumbai-Bangalore Highway, Baner, Pune, Maharashtra, India-411045</p>
                        <p className='font-bold text-xl'>T.: +91 7028632421</p>
                    </div>
                    <div className="rightside col-md-4">
                        <p className='font-bold text-2xl'>SOCIAL</p>
                        <p className='font-medium py-3'>Connect with us on LinkedIn, Facebook, Twitter, Instagram or Medium</p>
                    </div>
                </div>
            </div>
        </>
    )
}
