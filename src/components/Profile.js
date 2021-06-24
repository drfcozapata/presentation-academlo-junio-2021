const Profile = ({ title, data }) => {
  console.log(title, data)
  return (
    <div className="profile">
      <h6>{title}</h6>
      <p>{data}</p>
    </div>
  )
}
export default Profile;