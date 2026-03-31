'use client';

import useProfile from "../hooks/useProfile";

const Profile = () => {
    const {fullName, email, imageUrl, isPending} = useProfile();

    if(isPending) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-1 m-8">
            <div className="flex flex-1 flex-row justify-between">
                <div>
                    <h1>Hello {fullName}</h1>
                    <p>Email: {email}</p>
                </div>
                <div className="rounded-4xl w-[100px] h-[100px]">
                    <img className="rounded-4xl" src={imageUrl} alt={`${fullName}'s profile image`} width={150} />
                </div>
            </div>
        </div>
    )
}

export default Profile;