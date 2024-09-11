import React from 'react'
import { resourcesLinks,platformLinks,communityLinks } from '../constants/input'
function Footer() {
  return (
<footer className='mt-20 border-t py-10 order-neutral-700'>
       <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
        <div>
            <h3 className='font-semibold mb-4 text-md'>Resources</h3>
            <ul className='space-y-2'>
                {resourcesLinks.map((link,index)=>(
                    <li key={index}>
                        <a href="#" className='text-neutral hover:text-white'>{link.text}</a>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <h3 className='text-md font-semibold mb-4'>Platforms</h3>
            <ul className='space-y-2'>
                {platformLinks.map((link,index)=>(
                    <li key={index}>
                        <a href="#" className='text-neutral hover:text-white'>{link.text}</a>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <h3 className='text-md font-semibold mb-4'>Communities</h3>
            <ul className='space-y-2'>
                {communityLinks.map((link,index)=>(
                    <li key={index}>
                        <a href="#" className='text-neutral hover:text-white'>{link.text}</a>
                    </li>
                ))}
            </ul>
        </div>

       </div>
</footer>  )
}

export default Footer