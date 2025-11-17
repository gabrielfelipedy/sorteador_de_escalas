import React from 'react'
import Link from 'next/link'

const Footer = ({ className }: { className: string }) => {
  return (
    <footer className={className}>
        <p className='text-center text-sm text-gray-600'>Todos os direitos reservados a Gabriel Felipe</p>

        <div className='flex justify-center gap-4 mt-4'>
        <Link href="https://www.linkedin.com/in/gabrielfelipedy" className='text-center text-sm text-blue-500' target='_blank'>LinkedIn</Link>
        <Link href="https://www.github.com/gabrielfelipedy" className='text-center text-sm text-blue-500' target='_blank'>GitHub</Link>
        </div>
    </footer>
  )
}

export default Footer