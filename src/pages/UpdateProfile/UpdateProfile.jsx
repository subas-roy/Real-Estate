import { Helmet } from "react-helmet";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  // const name = document.getElementById('newName');
  // console.log('name in update ', name)
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget)
    const newName = form.get('name');
    const newPhotoURL = form.get('photo');
    // console.log(newName, newPhotoURL)
    updateProfile(user, {
      displayName: newName,
      photoURL: newPhotoURL
    })
      .then(() => {
        // console.log('Profile updated.')
        toast('Profile updated successfully!')
      })
      .catch()
  }
  return (
    <div>
      <ToastContainer />
      <Helmet>
        <title>Real Estate | Profile</title>
      </Helmet>
      <Navbar />
      <div className="bg-base-200">
        <div className="hero-content py-12 flex-col mx-auto">
          <h2 className="text-3xl">Profile</h2>
          <div className="hero">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleUpdate} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input id="newName" type="text" name="name" defaultValue={user.displayName} className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input id="newEmail" type="email" name="email" defaultValue={user.email} className="input input-bordered" readOnly />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input id="newPhotoURL" type="text" name="photo" defaultValue={user.photoURL} className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UpdateProfile;