import User from "../components/User";
import ProfileImage from './ProfileImage'
import Actions from './Actions'
import Message from './Message'
import Timestamp from './Timestamp'

function Tweet (props) {
  return (
    <div className="tweet">
          <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User userData={props.tweet.user} />
          <Timestamp time={props.tweet.timestamp} />
        </div>
        <Message message={props.tweet.message} />
        <Actions />

</div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  )
}


export default Tweet;
