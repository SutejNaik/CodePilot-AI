import ProfileCard from "../components/profile/ProfileCard";


export default function Profile() {

    return (

        <div className="min-h-screen bg-slate-950 text-white p-8">


            <div className="max-w-5xl mx-auto">


                <h1 className="text-4xl font-bold">
                    Profile
                </h1>


                <p className="text-slate-400 mt-3 mb-10">
                    Manage your CodePilot-AI account.
                </p>



                <ProfileCard />


            </div>


        </div>

    );
}