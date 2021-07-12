import classes from './AphixVideo.module.css'

function AphixVideo() {
  return(
    <div className={classes.container}>
      <h2>Sell Online, Sell Smarter, Sell Faster using your ERP</h2>
      <p>To find out more watch the video below...</p>
      <iframe src="https://www.youtube.com/embed/8kI-_s3UxMk?rel=0"></iframe>
    </div>
  );
};

export default AphixVideo;
