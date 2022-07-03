import React, {useState} from 'react'
import {FormWrapper, MainForm } from './styled'
import { usePaystackPayment } from 'react-paystack';
import Fade from 'react-reveal/Fade'
import {message} from 'antd';
import 'antd/dist/antd.less'
import 'antd/dist/antd.min.css'

const PayForm = () => {
    const [name, setName]= useState("")
    const [email, setEmail]= useState("")
    const [phone, setPhone]= useState("")
    const [amount, setAmount]= useState("")
    const publicKey= process.env.REACT_APP_PAYSTACK_KEY
    const actualAmount = amount*100
  
    const config = {
        reference: (new Date()).getTime().toString(),
        metadata: {
            name:name,
            phone:phone,
          },
        email: email,
        amount :actualAmount,
        publicKey:publicKey,

    };
    
  
    const onSuccess = () => {
     
      console.log('success');
      setEmail("");
      setName("");
      setAmount("");
      setPhone("");
      message.success('Payment successful');
    };

  
    const onClose = () => {
     
      console.log('closed')
    }

    const initializePayment = usePaystackPayment(config)
    const onSubmit =(e)=>{
        initializePayment(onSuccess, onClose);
        console.log(name, email,phone,actualAmount)
        e.preventDefault();
    }
    
    
    return (
        <FormWrapper>
            <Fade left cascade={true}>
            <MainForm onSubmit={onSubmit} >
                <input label="name" placeholder="FullName" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                <input label="email" placeholder="Email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input label="phone" placeholder="Phone Number" type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                <input label="amount" placeholder="Amount" type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}/>

                <button type="submit">Make Payment</button>
                
                
            </MainForm>
            </Fade>

            
           
                
        </FormWrapper>
    )
}

export default PayForm
