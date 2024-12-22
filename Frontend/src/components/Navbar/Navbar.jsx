import React from "react";
import { FaHome } from "react-icons/fa";
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaAlignLeft } from "react-icons/fa";
import { TfiLayoutPlaceholder } from "react-icons/tfi";
import { NavButton } from "../Utilities/Button/NavButton";
import { NavLink } from "../Utilities/Links/navLink";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../slices/authApiSlice";
import { logout } from "../../slices/authSlice";

export const Navbar = ({ title }) => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fixed left-0 right-0 top-0 z-50 flex h-[50px] items-center justify-between border-b-2 border-neutral-950 bg-white px-2">
      <div className="flex gap-2">
        {/* <NavButton logo={<FaHome />} /> */}
        <NavLink link={"/"} title={title} />
      </div>
      <div className="flex gap-2">
        <NavButton logo={<TfiLayoutPlaceholder />} />
        <NavButton logo={<TfiLayoutPlaceholder />} />
        {userInfo ? (
          <NavButton onClick={logoutHandler} logo={"Logout"} />
        ) : (
          <NavLink link={"/login"} title={"login"} />
        )}
      </div>
    </div>
  );
};
