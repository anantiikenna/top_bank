import React, { useCallback, useEffect, useState } from 'react'
import { Button } from './ui/button'

const PlaidLink = ({ user, variant, dwollaCustomerId }: PlaidLinkProps) => {
const [token, setToken] = useState('');

useEffect(() =>{
    const getLinkToken = async () =>{
        // const data = await creatLinkToken(user);
        // setToken(data);
    }
    getLinkToken();
})
    const onSuccess = useCallback(async () =>{

    }, [user])

    const config: PlainLinkOption = {
        token: '',
        onSuccess: (),
    }  
  return (
    <>
        {variant === 'primary' ? (
            <Button className='plaidlink-primary'>
                Connect bank
            </Button>
            ): variant === 'ghost' ? (
                <Button>
                    Connect bank
                </Button>
            ): (
                <Button>
                    Connect bank
                </Button>
            )
        }
    </>
  )
}

export default PlaidLink