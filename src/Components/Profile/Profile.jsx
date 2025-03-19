import secureLocalStorage from "react-secure-storage";

const Profile = () => {
  const LoginData = secureLocalStorage?.getItem("LoginData");

  const RegistrationData = secureLocalStorage?.getItem("registrationData");

  const profileData = RegistrationData?.find(
    (obj) => obj?.username === LoginData?.username
  );

  const finalProfileData = profileData ;

  // console.log(finalProfileData); 

  return (
    <div className="my-5 ms-5">
      <div className="row gutters-sm">
        <div className="col-md-8">
          <div className="card mb-3">
            <div className="card-body w-100">
              {Object?.entries(finalProfileData)?.map(
                ([key, value]) =>
                  key !== "confirmPassword" && ( 
                    <div className="row" key={key}>
                      <div className="col-sm-3">
                        <h6 className="mb-0">
                          {key === "DOB"
                            ? "Date of Birth"
                            : key?.charAt(0)?.toUpperCase() + key?.slice(1)}
                        </h6>
                      </div>
                      <div className="col-sm-9 text-secondary">{value}</div>
                      <hr />
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
