import { Button, IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import React from 'react'
import './SendMail.css'
import { useForm } from 'react-hook-form'
import { closeSendMessage } from '../../features/mailSlice'
import { useDispatch } from 'react-redux'
import { db } from '../../utils/firebaseDb'
import firebase from 'firebase/compat/app';

const SendMail = () => {
  const dispatch = useDispatch()

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    db.collection('emails').add({
      to: data.to,
      subject: data.subject,
      message: data.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    dispatch(closeSendMessage)
  }

  return (
    <div className='sendMail'>
        <div className='sendMail__header'>
            <h3>New Message</h3>
            <IconButton>
            <CloseIcon onClick={() => dispatch(closeSendMessage())} className='sendMail__close' />

            </IconButton>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="to" placeholder='To' type="email" {...register("to", {required: true})} />
            {errors.to && <p className='sendMail__error'>To is required</p>}
            <input name="subject" placeholder='Subject' type="text" {...register("subject", {required: true})} />
            {errors.subject && <p className='sendMail__error'>Subject is required</p>}
            <input name="message" placeholder='Message...' type="text" className='sendMail__message' {...register("message", {required: true})} />
            {errors.message && <p className='sendMail__error'>Message is required</p>}

            <div className='sendMail__options'>
                <Button className='sendMail__send' type="submit">Send</Button>
            </div>
        </form>
    </div>
  )
}

export default SendMail