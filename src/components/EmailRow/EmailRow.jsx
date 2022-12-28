import { IconButton } from '@material-ui/core'
import Checkbox from "@material-ui/core/Checkbox";
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined'
import { useNavigate } from 'react-router-dom'
import './EmailRow.css'
import { useDispatch } from 'react-redux';
import { selectMail } from '../../features/mailSlice';

const EmailRow = ({ id, title, subject, description, time}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const openMail = () => {
        dispatch(
            selectMail({
                id, 
                title, 
                subject, 
                description, 
                time
            })
        )
        navigate('/mail')
    }
    
    return (
    <div onClick={openMail} className='emailRow'>
        <div className='emailRow__options'>
            <Checkbox />
            <IconButton>
                <StarBorderOutlinedIcon />
            </IconButton>
            <IconButton>
                <LabelImportantOutlinedIcon />
            </IconButton>
        </div>
        <h3 className='emailRow__title'>
            {title}
        </h3>
        <div className='emailRow__message'>
           <h4>
                {subject}{" "}
                <span className='emailRow__description'>
                    - {description}
                </span>
           </h4> 
        </div>

        <div className='emailRow__time'>
            {time}
        </div>
    </div>
  )
}

export default EmailRow