import React, { useState } from 'react'
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';


function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = e => {
    e.preventDefault();

    db.collection('posts').add({
      displayName: 'Bashir Sani',
      username: 'The_Bashirr',
      verified: true,
      text: tweetMessage,
      image: tweetImage
    })

    setTweetMessage("");
    setTweetImage("");
  }

  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox-input'>
          <Avatar src='' alt='' />
          <input
            value={tweetMessage}
            placeholder={`What's happening?`}
            type='text'
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>

        <input
          value={tweetImage}
          className='tweetBox-imageInput'
          placeholder='Optional: Enter Image URL'
          type='text'
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <Button
          type='submit'
          className="tweetBox-tweetButton"
          onClick={sendTweet}
        >Tweet</Button>
      </form>

    </div>
  )
}

export default TweetBox
