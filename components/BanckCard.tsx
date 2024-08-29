import Link from 'next/link';
import React from 'react'

const BanckCard = ({accounts, userName, showBalance = true}: Bank) => {
  return (
    <div className='flex flex-col'>
      <Link href="/" className="bank-card"></Link>
    </div>
  )
}

export default BanckCard;