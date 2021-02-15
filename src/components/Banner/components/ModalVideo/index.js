import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import  { VideoFrameModal } from './styles'
import { makeStyles } from '@material-ui/core/styles';


function getYouTubeId(youtubeURL) {
    return youtubeURL
      .replace(
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
        '$7',
      );
  }
  //-------------
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  }));

export default function ModalVideo(props){
  const classes = useStyles();
  const esc = false;
  const url = props.videoURL.includes('youtube') ? `https://www.youtube.com/embed/${getYouTubeId(props.videoURL)}?autoplay=0` : props.videoURL;
  console.log(url);
  return(
   <div>
    <Modal
    //disableEscapeKeyDown={esc}
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    open={props.open}
    onClose={props.handleClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    className={classes.modal}
    BackdropProps={{
      timeout: 500,
    }}
  >  
    <Fade in={props.open}>
     <VideoFrameModal
        title="Video"
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
    />
    </Fade>
   
  </Modal>
  
  </div>
  );
}