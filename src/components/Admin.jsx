import React from "react";
import PostSchoolForm from "./PostSchoolForm";
import PostSchool from "./PostSchool";
import UserManagement from "./UserManagement";
import Post from "./Post";

const Admin = () => {
  return (
    <div className="flex justify-center py-6 px-4 h-full overflow-y-auto">
      <div className="w-full flex flex-col gap-6 md:gap-8">
        {/* Add your components here */}
        <UserManagement/>
        {/* <PostSchoolForm /> */}
        <Post/>
        <PostSchool />
      </div>
    </div>
  );
};

export default Admin;
